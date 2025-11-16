import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true, scale: 1 }
) {
  const { receiveShadow, castShadow, scale } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    // Setup Draco compression loader for better performance
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    dracoLoader.preload()
    loader.setDRACOLoader(dracoLoader)

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'spiderman'
        obj.position.y = 0
        obj.position.x = 0

        // Apply scale to make SpiderMan model larger
        obj.scale.set(scale, scale, scale)

        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        // Cleanup
        dracoLoader.dispose()
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
