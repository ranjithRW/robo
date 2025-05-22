import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function RoboScene({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Roboo3.glb')
  const { actions } = useAnimations(animations, group)

  // Animation setup
  useEffect(() => {
    const animationName = 'Armature.001|mixamo.com|Layer0'

    if (actions[animationName]) {
      actions[animationName]
        .setEffectiveTimeScale(1)
        .setLoop(THREE.LoopRepeat, Infinity)
        .play()
    }

    return () => {
      if (actions[animationName]) {
        actions[animationName].stop()
      }
    }
  }, [actions])

  // Reset position (remove rotation reset)
  useFrame(() => {
    if (group.current) {
      // Maintain initial position only
      group.current.position.set(1.5, -0.5, 0.5)
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[0.1, 0.163, -0.6]} rotation={[1.5, 0.3, 0.5]} scale={0.412}>
          <group name="Armature001" position={[0, -0.018, 1.122]} scale={0.024}>
            <skinnedMesh
              name="geometry_0"
              geometry={nodes.geometry_0.geometry}
              material={materials['Material_0.003']}
              skeleton={nodes.geometry_0.skeleton}
            />
            <primitive object={nodes.mixamorigHips} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Roboo3.glb')
export default RoboScene