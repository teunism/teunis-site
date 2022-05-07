import React from "react";

import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import BlueMap from "../../../img/blue-world.png";

import "./Globe.scss";

const Globe = () => {
    return (
        <div className="globe">
            <Canvas>
                <ambientLight intensity={1} color="#fff" />
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
