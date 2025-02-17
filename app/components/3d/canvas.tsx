'use client';

import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './models';
import { Vector3, Euler } from 'three';

const CameraController = () => {
  const { camera } = useThree();
  const targetPosition = useRef(new Vector3(0, 5, 10));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / pageHeight, 1);
      
      // Adjust these values to slow down the movement
      targetPosition.current.set(0, 5 + scrollProgress * 1.5, 10 - scrollProgress * 4); // Reduced the movement range
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    camera.position.lerp(targetPosition.current, 0.05); // Reduced lerp speed for smoother movement
  });

  return null;
};

const ModelController = () => {
  const { scene } = useThree();
  const model = scene.getObjectByName('Sketchfab_model');
  const initialRotation = useRef(new Euler());

  useEffect(() => {
    if (model) {
      initialRotation.current.copy(model.rotation);
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (model) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
        
        model.rotation.y = initialRotation.current.y + mouseX * 0.15; // Left and right rotation remains the same
        model.rotation.x = initialRotation.current.x + mouseY * 0.075; // Removed the negative sign to invert up and down rotation
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [model]);

  return null;
};

const ThreeCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 50 }}
      style={{ width: '100%', height: '100vh' }}
    >
      <CameraController />
      <ModelController />
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} intensity={100} />
      <spotLight
        position={[0, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={200}
        castShadow
      />
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]} scale={[1, 1, 1]} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeCanvas;
