import React from "react";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import BlueMap from "../../../img/blue-world.png";

import "./Globe.scss";

const Globe = () => {
    return (
        <div className="globe">
            <Canvas>
                <ambientLight intensity={0.4} color="#fff" />
                <OrbitControls rotateSpeed={0.1} />
                <GlobeModel />
            </Canvas>
        </div>
    );
};

const GlobeModel = () => {
    const globeMap = useLoader(TextureLoader, BlueMap);

    return (
        <mesh>
            <sphereBufferGeometry args={[3, 64, 64]} />
            <meshPhongMaterial map={globeMap} />
        </mesh>
    );
};

export default Globe;
