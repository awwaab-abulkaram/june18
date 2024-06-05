import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Galaxy = () => {
  const pointsRef = useRef();
  const radius = 100;
  const count = 20000;
  
  // Create a memoized array of star positions
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * radius;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count, radius]);

  // Animate the stars on each frame
  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        attach="material" 
        size={0.1} 
        color="white" 
      />
    </points>
  );
};

const GalaxyBackground = () => {
  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can map scrollY to any animation parameters you want
      const scale = 1 + scrollY / 1000;
      const rotation = scrollY / 1000;

      // Apply transformations to the canvas
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.style.transform = `scale(${scale}) rotate(${rotation}rad)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Canvas 
      camera={{ position: [0, 0, 50], fov: 75 }} 
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <Galaxy />
    </Canvas>
  );
};

export default GalaxyBackground;
