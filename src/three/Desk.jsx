import React from 'react';

function PlantInPot({ position = [-2.2, 0.05, 0.4] }) {
  return (
    <group position={position} scale={0.7}>
      {/* White Ceramic Pot */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.16, 0.35, 20]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </mesh>
      {/* Soil */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.21, 0.21, 0.05, 16]} />
        <meshStandardMaterial color="#451a03" roughness={0.9} />
      </mesh>
      {/* Leaves */}
      <mesh position={[0, 0.25, 0]} rotation={[0.2, 0, 0.2]}>
        <dodecahedronGeometry args={[0.16, 1]} />
        <meshStandardMaterial color="#22c55e" roughness={0.4} />
      </mesh>
      <mesh position={[0.08, 0.3, -0.05]} rotation={[-0.2, 0.4, 0]}>
        <dodecahedronGeometry args={[0.12, 1]} />
        <meshStandardMaterial color="#16a34a" roughness={0.4} />
      </mesh>
    </group>
  );
}

function CoffeeMug({ position = [2.2, 0.05, 0.3] }) {
  return (
    <group position={position} scale={0.65}>
      {/* Mug Body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 20]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.4} />
      </mesh>
      {/* Handle */}
      <mesh position={[0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.12, 0.035, 12, 24]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function Desk({ position = [0, -1.8, 0] }) {
  return (
    <group position={position}>
      {/* Main Desk Surface */}
      <mesh castShadow receiveShadow position={[0, -0.15, 0]}>
        <boxGeometry args={[6.5, 0.18, 2.2]} />
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>

      {/* Desk Leg Left */}
      <mesh position={[-3.0, -1.2, 0]} castShadow>
        <boxGeometry args={[0.15, 2.0, 2.0]} />
        <meshStandardMaterial color="#020617" roughness={0.6} metalness={0.8} />
      </mesh>

      {/* Desk Leg Right */}
      <mesh position={[3.0, -1.2, 0]} castShadow>
        <boxGeometry args={[0.15, 2.0, 2.0]} />
        <meshStandardMaterial color="#020617" roughness={0.6} metalness={0.8} />
      </mesh>

      {/* Desk Accessories */}
      <PlantInPot />
      <CoffeeMug />
    </group>
  );
}
