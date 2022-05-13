import React, { useContext, useEffect, useRef, useState } from "react";

import { ActivePatchContext } from "../../../App";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
    OrbitControls,
    PerspectiveCamera,
    QuadraticBezierLine,
    useContextBridge,
} from "@react-three/drei";
import {
    EffectComposer,
    Outline,
    Select,
    Selection,
} from "@react-three/postprocessing";

import BlueMap from "../../../img/blue-world.png";

import "./Globe.scss";

const Globe = () => {
    const ContextBridge = useContextBridge(ActivePatchContext);

    return (
        <div className="globe">
            <Canvas>
                <ContextBridge>
                    <ambientLight intensity={0.35} color="#ffffff" />
                    <OrbitControls
                        rotateSpeed={0.25}
                        // autoRotate
                        // autoRotateSpeed={0.2}
                        enableZoom={false}
                    />
                    <PerspectiveCamera makeDefault position={[1, 0, 2.2]} />

                    <Selection>
                        <EffectComposer autoClear={false}>
                            <Outline
                                blur
                                visibleEdgeColor="#C7E44F"
                                edgeStrength={5}
                                width={1000}
                            />
                        </EffectComposer>
                        <GlobeModel />
                    </Selection>
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

const Patch = () => {
    const { setActivePatch } = useContext(ActivePatchContext);

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                setActivePatch("test");
            }}
            position={[0.7, 0.56, 0.6]}
        >
            <sphereBufferGeometry args={[0.045, 32, 32]} />
            <meshBasicMaterial color="#01cbe1" />

            <SphereBorder />
        </mesh>
    );
};

const SphereBorder = () => {
    return (
        <Select enabled>
            <mesh>
                <sphereBufferGeometry args={[0.065, 32, 32]} />
                <meshBasicMaterial color="white" opacity={0.0} transparent />
            </mesh>
        </Select>
    );
};

const DottedLine = () => {
    const [endPosition, setEndPosition] = useState([1, 1, 0]);
    useFrame(({ camera }) => {
        setEndPosition([
            camera.position.x - 1.2,
            camera.position.y - 0.55,
            camera.position.z - 1,
        ]);
    });
    return (
        <QuadraticBezierLine
            start={[0, 0, 0]}
            end={endPosition}
            segments={20}
            color={"#C7E44F"}
            lineWidth={1.1}
            dashed={false}
        ></QuadraticBezierLine>
    );
};

export default Globe;
