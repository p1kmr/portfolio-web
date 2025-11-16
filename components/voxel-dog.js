import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const refModel = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  // Mouse move handler for parallax effect
  const handleMouseMove = useCallback(event => {
    const { current: container } = refContainer
    if (container) {
      const rect = container.getBoundingClientRect()
      mouseX.current = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseY.current = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
  }, [])

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // Adjusted camera scale for better view
      const scale = scH * 0.007 + 5.5
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      // Enhanced Lighting Setup

      // Ambient light (base illumination)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      // Directional light (key light with shadows)
      const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
      dirLight.position.set(5, 10, 7.5)
      dirLight.castShadow = true
      dirLight.shadow.mapSize.width = 2048
      dirLight.shadow.mapSize.height = 2048
      dirLight.shadow.camera.near = 0.5
      dirLight.shadow.camera.far = 500
      scene.add(dirLight)

      // Hemisphere light (fill light)
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6)
      hemiLight.position.set(0, 20, 0)
      scene.add(hemiLight)

      // Point light (accent/rim light) - using new theme teal color
      const pointLight = new THREE.PointLight(0x14b8a6, 0.8)
      pointLight.position.set(-5, 5, -5)
      scene.add(pointLight)

      // Add ground plane with shadow - using new theme teal color
      const groundGeometry = new THREE.CircleGeometry(10, 64)
      const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x14b8a6,
        opacity: 0.1,
        transparent: true,
        roughness: 0.8,
        metalness: 0.2
      })
      const ground = new THREE.Mesh(groundGeometry, groundMaterial)
      ground.rotation.x = -Math.PI / 2
      ground.position.y = -0.5
      ground.receiveShadow = true
      scene.add(ground)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = 1.2
      controls.target = target
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      setControls(controls)

      // Load SpiderMan model with increased scale
      loadGLTFModel(scene, '/spiderMan.glb', {
        receiveShadow: true,
        castShadow: true,
        scale: 3.5 // Increased scale to make model more visible
      }).then(model => {
        refModel.current = model
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          // Initial rotation animation
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          // Mouse parallax effect
          if (refModel.current) {
            const targetRotationY = mouseX.current * 0.3
            const targetRotationX = mouseY.current * 0.1

            refModel.current.rotation.y +=
              (targetRotationY - refModel.current.rotation.y) * 0.05
            refModel.current.rotation.x +=
              (targetRotationX - refModel.current.rotation.x) * 0.05
          }

          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    window.addEventListener('mousemove', handleMouseMove, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
      window.removeEventListener('mousemove', handleMouseMove, false)
    }
  }, [renderer, handleWindowResize, handleMouseMove])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog
