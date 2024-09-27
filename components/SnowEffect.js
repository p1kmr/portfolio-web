import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const SnowEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create geometry for asterisk particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    // Create particles
    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000;  // Start from top
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Create asterisk texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(16, 0);
    ctx.lineTo(16, 32);
    ctx.moveTo(0, 16);
    ctx.lineTo(32, 16);
    ctx.moveTo(4, 4);
    ctx.lineTo(28, 28);
    ctx.moveTo(28, 4);
    ctx.lineTo(4, 28);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 4,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);

    scene.add(particles);
    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Move particles downwards
      particles.position.y -= 0.5;

      // Reset particles to top when they go out of view
      if (particles.position.y < -1000) particles.position.y = 1000;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default SnowEffect;