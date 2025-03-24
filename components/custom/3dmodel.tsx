"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { Group, Mesh, MeshStandardMaterial } from "three"

function Model({ simplified = false }: { simplified?: boolean }) {
  const { scene } = useGLTF("/landing/model.glb")
  const modelRef = useRef<Group>(null)

  // Set material manually
  scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      (child as Mesh).material = new MeshStandardMaterial({
        color: "#2e8464",
        roughness: 0.7,
        metalness: 0.3,
      })
    }
  })

  // Subtle animations
  useFrame(() => {
    if (modelRef.current && !simplified) {
      modelRef.current.rotation.y += 0.0005
      modelRef.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.2
      modelRef.current.rotation.z = Math.cos(Date.now() * 0.0001) * 0.15
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={simplified ? 1.5 : 2}
      position={simplified ? [2, 1.5, -2] : [4, 2, -3]}
    />
  )
}

export default function ThreeDModel() {
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas
        camera={{
          position: isMobile ? [8, 6, 6] : [15, 9, 9],
          fov: isMobile ? 65 : 50,
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <ambientLight intensity={2} />
        {!isMobile && <directionalLight position={[10, 10, 5]} intensity={1} />}
        <Suspense fallback={null}>
          <Model simplified={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  )
}
