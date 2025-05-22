import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function RoboScene({ isWalking, ...props }) {
  const group = useRef()
  const directionRef = useRef(1) // 1 for right, -1 for left
  const { nodes, materials, animations } = useGLTF('/Roboo3.glb')
  const { actions } = useAnimations(animations, group)

  // Animation setup
  useEffect(() => {
    const animationName = 'Armature.001|mixamo.com|Layer0'

    if (actions[animationName]) {
      if (isWalking) {
        actions[animationName]
          .setEffectiveTimeScale(1)
          .setLoop(THREE.LoopRepeat, Infinity)
          .play()
      } else {
        actions[animationName].stop()
      }
    } else {
      console.error('Animation not found:', animationName)
    }

    return () => {
      if (actions[animationName]) {
        actions[animationName].stop()
      }
    }
  }, [actions, isWalking])

  // Frame update
  useFrame((_, delta) => {
    if (!isWalking || !group.current) return

    // Move along X axis
    group.current.position.x += delta * 1.5 * directionRef.current

    // Define edge limits
    const leftEdge = -5
    const rightEdge = 5

    if (group.current.position.x >= rightEdge) {
      directionRef.current = -1
      group.current.rotation.y = Math.PI // Turn to left
    }

    if (group.current.position.x <= leftEdge) {
      directionRef.current = 1
      group.current.rotation.y = 0 // Turn to right
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[0, 0.463, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.412}>
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
