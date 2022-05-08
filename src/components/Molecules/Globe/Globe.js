import React from "react";

import { Canvas, useLoader } from "@react-three/fiber";
import { Circle, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import BlueMap from "../../../img/blue-world.png";

import "./Globe.scss";

const Globe = () => {
    return (
        <div className="globe">
            <Canvas onPointerMissed={() => console.log("missed")}>
                <ambientLight intensity={0.35} color="#ffffff" />
                <OrbitControls
                    rotateSpeed={0.1}
                    autoRotate
                    autoRotateSpeed={0.2}
                    enableZoom={false}
                />
                <PerspectiveCamera makeDefault position={[1, 0, 2.2]} />
                <GlobeModel />
            </Canvas>
        </div>
    );
};

const GlobeModel = () => {
    const globeMap = useLoader(TextureLoader, BlueMap);

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                console.log("yo");
            }}
        >
            <Patch />
            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshPhongMaterial map={globeMap} />
        </mesh>
    );
};

const Patch = (name) => {
    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                console.log("clicvk");
            }}
            position={[0.7, 0.56, 0.55]}
        >
            <sphereBufferGeometry args={[0.055, 32, 32]} />
            <meshBasicMaterial color="#01cbe1" />
        </mesh>
    );
};

export default Globe;
