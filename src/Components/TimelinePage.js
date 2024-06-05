import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './TimelinePage.css'
import background from '../Assets/milkyway.jpg'

const TimelinePage = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    
    // Load background texture
    const loader = new THREE.TextureLoader()
    loader.load(background, (texture) => {
      scene.background = texture
    })

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.setZ(30)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    // Torus setup
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshBasicMaterial({ color: 0xD9D9D9, roughness: 0.1, metalness: 0.9 })
    const torus = new THREE.Mesh(geometry, material)
    scene.add(torus)

    // Lighting setup
    const pointLight = new THREE.PointLight(0xFFFFFF, 1)
    pointLight.position.set(6, 6, 6)
    scene.add(pointLight)

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5)
    directionalLight.position.set(-10, 10, -10)
    scene.add(directionalLight)


    // Helpers setup
    // const helper = new THREE.PointLightHelper(pointLight)
    const gridHelper = new THREE.GridHelper(200, 50)
    scene.add(gridHelper)

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement)

    // Function to add stars
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25)
      const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
      const star = new THREE.Mesh(geometry, material)

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
      star.position.set(x, y, z)
      scene.add(star)
    }

    // Adding stars
    Array(200).fill().forEach(addStar)

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)

      torus.rotation.x += 0.01
      torus.rotation.y += 0.005
      torus.rotation.z += 0.01

      controls.update()

      renderer.render(scene, camera)
    }
    animate()

    // Cleanup on component unmount
    return () => {
      renderer.dispose()
    }
  }, [])

  return (
    <canvas id="bg"></canvas>
  )
}

export default TimelinePage
