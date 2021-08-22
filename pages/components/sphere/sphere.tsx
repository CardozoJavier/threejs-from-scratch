import * as React from 'react';
import * as THREE from 'three';

const { useEffect } = React;

export default function Sphere(props: { texture: any }) {
  function initialize() {
    // Loading
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load(props.texture.toString())
    // Canvas
    const canvas = (document.querySelector('canvas.webgl') as HTMLCanvasElement | OffscreenCanvas | undefined);
    // Scene
    const scene = new THREE.Scene();
    // Geometry
    const geometry = new THREE.SphereBufferGeometry(.5, 64, 64);
    // Material
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7;
    material.roughness = 0.2;
    material.normalMap = normalTexture;
    material.color = new THREE.Color(0x292929);

    // Mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere)
    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1)
    pointLight.position.x = 2;
    pointLight.position.x = 3;
    pointLight.position.x = 4;
    scene.add(pointLight);
    // Light 1
    const pointLight2 = new THREE.PointLight(0xff00000, 2)
    pointLight2.position.set(2.3, -1.6, -0.66);
    pointLight2.intensity = 1.37;
    scene.add(pointLight2)
    // Light 2
    const pointLight3 = new THREE.PointLight(0xd1ff, 2)
    pointLight3.position.set(-3.7, 2.52, -1.4);
    pointLight3.intensity = 1.48;
    scene.add(pointLight3)

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 2
    scene.add(camera)

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    }
    document.addEventListener('mousemove', onDocumentMouseMove);

    function updateSphere() {
      sphere.position.y = window.scrollY * .001;
    }
    document.addEventListener('scroll', updateSphere);

    const clock = new THREE.Clock()
    const tick = () => {
      targetX = mouseX * .001;
      targetY = mouseY * .001;

      const elapsedTime = clock.getElapsedTime()
      // Update objects
      sphere.rotation.y = .5 * elapsedTime      
      sphere.rotation.y += .5 * (targetX - sphere.rotation.y);
      sphere.rotation.x += .05 * (targetY - sphere.rotation.x);
      sphere.position.z += .05 * (targetY - sphere.rotation.x);

      // Render
      renderer.render(scene, camera)
      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }

  useEffect(() => {
    initialize();
  });

  return (
    <div style={{ height: '100vh' }}>
      <div className="container">
        <h1>Feel the Sphere</h1>
      </div>
      <canvas className="webgl"></canvas>
      <section></section>
    </div>
  );
}
