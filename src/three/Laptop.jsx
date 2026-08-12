import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Laptop({ position = [-1.6, -1.2, 0.4], scale = 0.85 }) {
  const groupRef = useRef();

  // Create glowing code terminal screen texture
  const screenTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, 512, 320);

    // Header bar
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 512, 28);
    // Dots
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(16, 14, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#eab308';
    ctx.beginPath(); ctx.arc(32, 14, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#22c55e';
    ctx.beginPath(); ctx.arc(48, 14, 5, 0, Math.PI*2); ctx.fill();

    // Code lines
    ctx.font = '14px "Fira Code", monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('const developer = {', 20, 60);
    ctx.fillStyle = '#c084fc';
    ctx.fillText('  name: "Mahmoud Hussain",', 20, 85);
    ctx.fillStyle = '#818cf8';
    ctx.fillText('  role: "CSE & 2D Designer",', 20, 110);
    ctx.fillStyle = '#facc15';
    ctx.fillText('  stack: ["React", "Three.js", "Java"],', 20, 135);
    ctx.fillStyle = '#4ade80';
    ctx.fillText('  status: "Building the future..."', 20, 160);
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('};', 20, 185);

    ctx.fillStyle = '#a855f7';
    ctx.fillText('function animate() {', 20, 220);
    ctx.fillStyle = '#f43f5e';
    ctx.fillText('  requestAnimationFrame(animate);', 20, 245);
    ctx.fillStyle = '#a855f7';
    ctx.fillText('}', 20, 270);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={[0, 0.35, 0]}>
      {/* Base / Keyboard body */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.08, 1.1]} />
        <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Keyboard Area cutout */}
      <mesh position={[0, -0.005, -0.1]} receiveShadow>
        <boxGeometry args={[1.35, 0.02, 0.6]} />
        <meshStandardMaterial color="#0f172a" roughness={0.7} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, -0.005, 0.3]} receiveShadow>
        <boxGeometry args={[0.45, 0.01, 0.3]} />
        <meshStandardMaterial color="#334155" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Hinged Display Screen */}
      <group position={[0, 0, -0.52]} rotation={[-0.25, 0, 0]}>
        {/* Screen Frame */}
        <mesh position={[0, 0.55, 0]} castShadow>
          <boxGeometry args={[1.6, 1.1, 0.05]} />
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
        </mesh>

        {/* Display Panel (Glowing Screen) */}
        <mesh position={[0, 0.55, 0.028]}>
          <planeGeometry args={[1.5, 1.0]} />
          <meshBasicMaterial map={screenTexture} />
        </mesh>
      </group>
    </group>
  );
}
