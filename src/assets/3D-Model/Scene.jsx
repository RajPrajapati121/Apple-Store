/*
Command: npx gltfjsx@6.5.3 scene.gltf 
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
Title: Apple iPhone 13 Pro Max
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group scale={100}>
          <mesh geometry={nodes.Frame_Frame_0.geometry} material={materials.Frame} />
          <mesh geometry={nodes.Frame_Frame2_0.geometry} material={materials.Frame2} />
          <mesh geometry={nodes.Frame_Port_0.geometry} material={materials.Port} />
          <mesh geometry={nodes.Frame_Antenna_0.geometry} material={materials.Antenna} />
          <mesh geometry={nodes.Frame_Mic_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body_Mic_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body_Bezel_0.geometry} material={materials.Bezel} />
          <mesh geometry={nodes.Body_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Body_Wallpaper_0.geometry} material={materials.Wallpaper} />
          <mesh geometry={nodes.Body_Camera_Glass_0.geometry} material={materials.Camera_Glass} />
          <mesh geometry={nodes.Body_Lens_0.geometry} material={materials.Lens} />
          <mesh geometry={nodes.Body_Material_0.geometry} material={materials.Material} />
          <mesh geometry={nodes.Camera_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Camera_Glass_0.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Camera_Camera_Frame001_0.geometry} material={materials['Camera_Frame.001']} />
          <mesh geometry={nodes.Camera_Mic_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Body001_Screen_Glass_0.geometry} material={materials.Screen_Glass} />
          <mesh geometry={nodes.Button_Frame_0.geometry} material={materials.Frame} />
          <mesh geometry={nodes.Circle003_Frame_0.geometry} material={materials.Frame} />
          <mesh geometry={nodes.Apple_Logo_Logo_0.geometry} material={materials.Logo} />
          <mesh geometry={nodes.Camera001_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Camera001_Gray_Glass_0.geometry} material={materials.Gray_Glass} />
          <mesh geometry={nodes.Camera001_Flash_0.geometry} material={materials.Flash} />
          <mesh geometry={nodes.Camera001_Port_0.geometry} material={materials.Port} />
          <mesh geometry={nodes.Camera001_Camera_Frame_0.geometry} material={materials.Camera_Frame} />
          <mesh geometry={nodes.Camera001_Camera_Glass_0.geometry} material={materials.Camera_Glass} />
          <mesh geometry={nodes.Camera001_Lens_0.geometry} material={materials.Lens} />
          <mesh geometry={nodes.Camera001_Black_Glass_0.geometry} material={materials.Black_Glass} />
          <mesh geometry={nodes.Camera003_Material002_0.geometry} material={materials['Material.002']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
