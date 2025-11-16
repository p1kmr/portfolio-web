import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box, useColorModeValue } from '@chakra-ui/react'

const FloatingShapes = ({
  count = 20,
  speed = 0.001,
  ...props
}) => {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const shapesRef = useRef([])

  const primaryColor = useColorModeValue(0x6366f1, 0xa78bfa)
  const accentColor = useColorModeValue(0x14b8a6, 0x2dd4bf)

  useEffect(() => {
    if (!containerRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight

    // Setup scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create floating shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.TetrahedronGeometry(0.7),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TorusGeometry(0.5, 0.2, 8, 16)
    ]

    for (let i = 0; i < count; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? primaryColor : accentColor,
        transparent: true,
        opacity: 0.6,
        wireframe: Math.random() > 0.5
      })

      const mesh = new THREE.Mesh(geometry, material)

      // Random position
      mesh.position.x = (Math.random() - 0.5) * 50
      mesh.position.y = (Math.random() - 0.5) * 50
      mesh.position.z = (Math.random() - 0.5) * 50

      // Random rotation speed
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: (Math.random() - 0.5) * speed * 10
      }

      scene.add(mesh)
      shapesRef.current.push(mesh)
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(primaryColor, 1, 100)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(accentColor, 0.7, 100)
    pointLight2.position.set(-10, -10, 10)
    scene.add(pointLight2)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      shapesRef.current.forEach(shape => {
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.rotation.z += shape.userData.rotationSpeed.z

        shape.position.y += shape.userData.floatSpeed
        if (shape.position.y > 25 || shape.position.y < -25) {
          shape.userData.floatSpeed *= -1
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()

      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      shapesRef.current.forEach(shape => {
        shape.geometry.dispose()
        shape.material.dispose()
      })
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [count, speed, primaryColor, accentColor])

  return (
    <Box
      ref={containerRef}
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={0}
      pointerEvents="none"
      opacity={0.3}
      {...props}
    />
  )
}

export default FloatingShapes
