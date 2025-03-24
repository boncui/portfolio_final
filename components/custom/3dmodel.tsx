"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { useGLTF, OrbitControls } from "@react-three/drei"
import { Group } from "three"

function Model() {
  const { scene } = useGLTF("/landing/model.glb")
  const ref = useRef<Group>(null)

  return <primitive ref={ref} object={scene} scale={2} position={[4, 2, -3]} />
}

export default function ThreeDModel() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [15, 9, 9], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}
