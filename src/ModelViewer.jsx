import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import RoboScene from './roboScene'

function ModelViewer() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Canvas camera={{
                position: [0, 2, 5],  // Changed camera position
                fov: 50,
            }}>

                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                />

                <Environment preset="city" />

                <RoboScene
                    position={[0, -0.5, 0]}
                    rotation={[0, 0, 0]}
                    scale={3}
                />

                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    minDistance={3}
                    maxDistance={10}
                    enableDamping={true}
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    )
}

export default ModelViewer