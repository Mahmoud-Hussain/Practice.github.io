import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import Lighting from './Lighting';
import Floor from './Floor';
import Particles from './Particles';
import Character from './Character';
import Laptop from './Laptop';
import DeskLamp from './DeskLamp';
import Desk from './Desk';
import FloatingObjects from './FloatingObjects';

// ----------------------------------------------------
// Rig Sub-component for Smooth Lerped Camera Damping
// ----------------------------------------------------
function CameraRig({ mouse }) {
  const { camera } = useThree();
  const targetCamPos = useRef(new THREE.Vector3(0, 0.2, 5.2));
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!mouse || !mouse.current) return;

    // Calculate mouse-based target camera position
    const mouseX = mouse.current.x;
    const mouseY = mouse.current.y;

    // Scroll influence (0 to 1 over top 600px scroll)
    const scrollFactor = Math.min(scrollYRef.current / 600, 1.0);

    targetCamPos.current.x = mouseX * 0.6;
    targetCamPos.current.y = 0.2 + (-mouseY * 0.4) - (scrollFactor * 0.6);
    targetCamPos.current.z = 5.2 - Math.abs(mouseX) * 0.2 + (scrollFactor * 0.4);

    // Smooth physical lerp damping
    camera.position.lerp(targetCamPos.current, 0.05);
    camera.lookAt(0, 0.1 - scrollFactor * 0.3, 0);
  });

  return null;
}

class SceneErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Scene Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#060814] text-slate-300 p-6 text-center">
          <p className="text-sm font-semibold">Interactive 3D Scene Loading...</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// ----------------------------------------------------
// Main Scene Host
// ----------------------------------------------------
export default function Scene() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef();

  // Mouse move handler normalized to [-1, 1]
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouseRef.current = { x, y };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full min-h-[500px] lg:min-h-[680px] relative select-none"
    >
      <SceneErrorBoundary>
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          camera={{ position: [0, 0.2, 5.2], fov: 45 }}
        >
          <color attach="background" args={['#060814']} />
          <fog attach="fog" args={['#060814', 6, 16]} />

          {/* Camera Lerp Damping Rig */}
          <CameraRig mouse={mouseRef} />

          {/* Cinematic Scene Elements */}
          <Lighting />
          <Floor />
          <Particles mouse={mouseRef} count={140} />

          {/* Developer Workspace & Character */}
          <React.Suspense fallback={null}>
            <group position={[0, -0.2, 0]}>
              <Character mouse={mouseRef} />
              <Desk />
              <Laptop />
              <DeskLamp />
              <FloatingObjects mouse={mouseRef} />
            </group>
          </React.Suspense>
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
