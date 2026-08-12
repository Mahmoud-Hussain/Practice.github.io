import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D React Logo Component
function ReactLogo({ position, scale = 1 }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.8;
      groupRef.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Central nucleus */}
      <mesh>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.5}
          roughness={0.2}
        />
      </mesh>

      {/* Ring 1 */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.5, 0.03, 16, 50]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Ring 2 */}
      <mesh rotation={[-Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.5, 0.03, 16, 50]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Ring 3 */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.5, 0.03, 16, 50]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

// 3D JS Plaque Component
function JSPlaque({ position, scale = 1 }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Plaque Base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.7, 0.12]} />
        <meshStandardMaterial
          color="#facc15"
          emissive="#ca8a04"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* JS Symbol Text indicator */}
      <mesh position={[0.1, -0.1, 0.07]}>
        <boxGeometry args={[0.2, 0.35, 0.02]} />
        <meshStandardMaterial color="#0f172a" roughness={0.5} />
      </mesh>
    </group>
  );
}

// 3D Geometric Glass Polyhedron
function GlassPolyhedron({ position, scale = 1, type = 'icosahedron' }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.6;
      ref.current.rotation.y += delta * 0.9;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {type === 'icosahedron' ? (
        <icosahedronGeometry args={[0.45, 0]} />
      ) : (
        <octahedronGeometry args={[0.45, 0]} />
      )}
      <meshPhysicalMaterial
        color="#c084fc"
        emissive="#a855f7"
        emissiveIntensity={0.8}
        transmission={0.6}
        opacity={0.85}
        transparent
        roughness={0.1}
        metalness={0.3}
        ior={1.5}
      />
    </mesh>
  );
}

export default function FloatingObjects({ mouse }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current && mouse && mouse.current) {
      const targetX = mouse.current.x * 0.25;
      const targetY = mouse.current.y * 0.25;

      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (-targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. React Logo - Top Right */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <ReactLogo position={[2.4, 1.8, -0.5]} scale={1.1} />
      </Float>

      {/* 2. JavaScript Plaque - Bottom Right */}
      <Float speed={2.0} rotationIntensity={1.0} floatIntensity={1.2}>
        <JSPlaque position={[2.6, -1.2, 0.2]} scale={0.95} />
      </Float>

      {/* 3. Glass Icosahedron - Top Left */}
      <Float speed={3.0} rotationIntensity={1.5} floatIntensity={1.8}>
        <GlassPolyhedron position={[-2.4, 1.6, -0.8]} scale={0.9} type="icosahedron" />
      </Float>

      {/* 4. Glass Octahedron - Mid Left */}
      <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.3}>
        <GlassPolyhedron position={[-2.7, -0.8, 0.3]} scale={0.8} type="octahedron" />
      </Float>

      {/* 5. Glowing </> Code Emblem - Top Center/Left */}
      <Float speed={2.8} rotationIntensity={0.8} floatIntensity={1.4}>
        <group position={[-1.8, 2.2, -1.2]}>
          <mesh>
            <torusGeometry args={[0.4, 0.05, 16, 32]} />
            <meshStandardMaterial
              color="#ec4899"
              emissive="#db2777"
              emissiveIntensity={1.5}
              roughness={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* 6. Small floating glowing spheres for depth layering */}
      <Float speed={3.5} floatIntensity={2.0}>
        <mesh position={[1.5, -2.0, -1.0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={2.0} />
        </mesh>
      </Float>

      <Float speed={2.8} floatIntensity={1.8}>
        <mesh position={[-1.2, -2.2, -0.5]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2.0} />
        </mesh>
      </Float>
    </group>
  );
}
