import React from 'react';

export default function Lighting() {
  return (
    <group>
      {/* Soft Ambient Fill */}
      <ambientLight intensity={0.45} color="#e0e7ff" />

      {/* Main Key Directional Light */}
      <directionalLight
        position={[4, 6, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Background Blue/Purple Neon Point Light */}
      <pointLight
        position={[-3, 3, -2]}
        intensity={2.5}
        distance={10}
        color="#a855f7"
      />

      {/* Background Cyan Neon Point Light */}
      <pointLight
        position={[3, 4, -3]}
        intensity={2.2}
        distance={12}
        color="#38bdf8"
      />

      {/* Rim Light separating character from background */}
      <spotLight
        position={[0, 4, -4]}
        target-position={[0, 0, 0]}
        intensity={3.5}
        angle={0.6}
        penumbra={0.8}
        color="#38bdf8"
      />
    </group>
  );
}
