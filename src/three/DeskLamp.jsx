import React from 'react';

export default function DeskLamp({ position = [-2.5, -1.2, -0.2], scale = 0.9 }) {
  return (
    <group position={position} scale={scale} rotation={[0, 0.4, 0]}>
      {/* Base */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.35, 0.08, 24]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Stem lower */}
      <mesh position={[0, 0.6, 0]} rotation={[0, 0, -0.15]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.1, 16]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Stem upper arm */}
      <mesh position={[0.3, 1.1, 0]} rotation={[0, 0, 0.6]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.8, 16]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Lamp Head Shade */}
      <group position={[0.65, 0.95, 0]} rotation={[0, 0, -0.7]}>
        <mesh castShadow>
          <coneGeometry args={[0.25, 0.4, 24, 1, true]} />
          <meshStandardMaterial color="#1e293b" side={2} metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Glowing bulb interior */}
        <mesh position={[0, -0.1, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#fef08a"
            emissive="#facc15"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Warm Point Light source casting light onto laptop & desk */}
        <pointLight
          position={[0, -0.15, 0]}
          intensity={3.2}
          distance={6}
          color="#fbbf24"
          decay={2}
        />
      </group>
    </group>
  );
}
