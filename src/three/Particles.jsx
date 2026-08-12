import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles({ count = 120, mouse }) {
  const pointsRef = useRef();

  // Create randomized particle positions, speeds, colors and sizes
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    const palette = [
      new THREE.Color('#38bdf8'), // Cyan
      new THREE.Color('#a855f7'), // Purple
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#facc15')  // Gold
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;

      sz[i] = Math.random() * 0.08 + 0.02;
    }

    return [pos, col, sz];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Slow atmospheric float
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.015;

    // Subtle parallax reaction to mouse
    if (mouse && mouse.current) {
      const targetX = mouse.current.x * 0.4;
      const targetY = mouse.current.y * 0.4;

      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
      pointsRef.current.position.y += (-targetY - pointsRef.current.position.y) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
