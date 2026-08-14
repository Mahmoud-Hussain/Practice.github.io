import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { TextureLoader } from 'three';
import * as THREE from 'three';

// ----------------------------------------------------
// 3D OBJ Character Loader Sub-Component
// Loads the 3D model from "3D model/" folder
// ----------------------------------------------------
function OBJCharacterModel({ mouse }) {
  const groupRef = useRef();

  const objPath = '/3d-model/cfa8a5355e960494d19b7122e1b137fd.obj';
  const mtlPath = '/3d-model/material.mtl';
  const texturePath = '/3d-model/texture_20250901.png';

  // Load MTL material file
  const materials = useLoader(MTLLoader, mtlPath);
  materials.preload();

  // Load OBJ 3D mesh
  const obj = useLoader(OBJLoader, objPath, (loader) => {
    loader.setMaterials(materials);
  });

  // Load high-res texture image
  const texture = useLoader(TextureLoader, texturePath);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Process & center model geometry + apply materials
  const processedModel = useMemo(() => {
    const clone = obj.clone(true);

    // Compute bounding box for scale and center calculation
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Center mesh so feet sit at y=0 and origin is centered
    clone.position.x = -center.x;
    clone.position.y = -box.min.y;
    clone.position.z = -center.z;

    // Apply materials and texture
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const mat = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.45,
          metalness: 0.1,
          side: THREE.DoubleSide
        });
        child.material = mat;
      }
    });

    // Create container group
    const container = new THREE.Group();
    container.add(clone);

    // Desired height normalized in 3D world units (around 3.2 units tall for full body view)
    const targetHeight = 3.2;
    const scaleFactor = size.y > 0 ? targetHeight / size.y : 1.0;

    return { container, scaleFactor, size };
  }, [obj, texture]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // 1. Subtle idle breathing & bobbing motion
    const breathingY = Math.sin(t * 1.8) * 0.03;
    groupRef.current.position.y = -1.5 + breathingY;

    // 2. Mouse tracking interpolation (smooth character rotation lerp toward cursor)
    if (mouse && mouse.current) {
      const targetRotY = mouse.current.x * 0.4;
      const targetRotX = -mouse.current.y * 0.15;

      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.06;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.06;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      <primitive
        object={processedModel.container}
        scale={processedModel.scaleFactor}
      />
      {/* Soft floor shadow under character */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 1.4]} />
        <meshBasicMaterial color="#030712" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// ----------------------------------------------------
// Main Character Host Component
// ----------------------------------------------------
export default function Character({ mouse }) {
  return <OBJCharacterModel mouse={mouse} />;
}
