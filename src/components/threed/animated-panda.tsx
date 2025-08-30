import React, { useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useFBX, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

type PandaAnimatedProps = {
  action?: string;
};

export function PandaAnimated(props: PandaAnimatedProps) {
  const fbx = useFBX(`${window.location.origin}/models/RedPanda_Mesh.fbx`);
  const { actions, names } = useAnimations(fbx.animations, fbx);
  const { viewport } = useThree()

  // Available actions are in `names`
  /*
    names: [ "Rig|Eat", "Rig|Idle", "Rig|Run", "Rig|Sleep", "Rig|Jump", "Rig|Turn", "Rig|Walk", "Rig|Sit" ]
  */

  const textures = useTexture({
    map: "/models/Tex_RedPanda.jpg",
  });

  fbx.children.forEach((mesh, i) => {
    // @ts-ignore
    mesh.material = new THREE.MeshStandardMaterial({ map: textures.map });
  });

  useState(() => {
    // Don't remove this console log, it fixes the issue with the Panda not loading the animations (I DON'T KNOW WHY) 
    console.log("Available actions:", names);
    if (props.action && names.includes(props.action)) {
      // @ts-ignore
      actions[props.action].reset().fadeIn(0.5).play();
      return () => {
        // @ts-ignore
        actions[props.action].reset().fadeOut(0.5);
      };
    }
    // @ts-ignore
  }, [props.action]);

  actions["Rig|Sit"]?.play();

  return (
    <group scale={(Math.min(viewport.width, viewport.height)*0.004)} position={[0,-Math.min(viewport.height, viewport.width)*0.575,0]} dispose={null}>
      <primitive object={fbx} dispose={null} />
    </group>
  );
}

useFBX.preload("models/RedPanda_Mesh.fbx");
