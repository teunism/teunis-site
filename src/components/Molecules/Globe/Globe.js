import React, { useContext, useState } from "react";

import { ActivePatchContext } from "../../../App";

import { Canvas, useLoader } from "@react-three/fiber";
import {
    Circle,
    OrbitControls,
    PerspectiveCamera,
    useContextBridge,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import BlueMap from "../../../img/blue-world.png";

import "./Globe.scss";

const Globe = () => {
    const ContextBridge = useContextBridge(ActivePatchContext);

    return (
        <div className="globe">
            <Canvas>
                <ContextBridge>
                    <ambientLight intensity={0.45} color="#ffffff" />
                    <OrbitControls
                        rotateSpeed={0.1}
                        autoRotate
                        autoRotateSpeed={0.2}
                        enableZoom={false}
                    />
                    <PerspectiveCamera makeDefault position={[1, 0, 2.2]} />
                    <GlobeModel />
                </ContextBridge>
            </Canvas>
        </div>
    );
};

const GlobeModel = () => {
    const globeMap = useLoader(TextureLoader, BlueMap);
    const { setActivePatch } = useContext(ActivePatchContext);

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                setActivePatch("pacific");
            }}
        >
            <Patch />
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshPhongMaterial map={globeMap} />
        </mesh>
    );
};

const Patch = (name) => {
    const { setActivePatch } = useContext(ActivePatchContext);

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                setActivePatch("test");
            }}
            position={[0.7, 0.56, 0.55]}
        >
            <sphereBufferGeometry args={[0.055, 32, 32]} />
            <meshBasicMaterial color="#01cbe1" />
        </mesh>
    );
};

export default Globe;
