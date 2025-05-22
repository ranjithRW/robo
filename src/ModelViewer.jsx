import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useState } from 'react'
import RoboScene from './roboScene'

function ModelViewer() {
  const [isWalking, setIsWalking] = useState(true)

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <button 
        style={{ position: 'absolute', top: 20, left: 20, zIndex: 1000 }}
        onClick={() => setIsWalking(!isWalking)}
      >
        {isWalking ? 'STOP WALKING' : 'START WALKING'}
      </button>

      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        
        <Environment preset="city" />
        
        <RoboScene 
          isWalking={isWalking}
          position={[0, -0.5, 0]}
          rotation={[0, Math.PI, 0]}
          scale={0.8}
        />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={3}
          maxDistance={10}
        />
        
      </Canvas>
    </div>
  )
}

export default ModelViewer