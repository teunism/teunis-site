import React, { useContext, useEffect, useState } from "react";

import { ActivePatchContext } from "../../../App";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas, useLoader } from "@react-three/fiber";
import {
    OrbitControls,
    PerspectiveCamera,
    useContextBridge,
} from "@react-three/drei";
import {
    EffectComposer,
    Outline,
    Select,
    Selection,
    HueSaturation,
} from "@react-three/postprocessing";

import { riverData } from "../../../data/patches";

import BlueMap from "../../../img/blue-world-2.png";

import "./Globe.scss";

const Globe = () => {
    const ContextBridge = useContextBridge(ActivePatchContext);

    return (
        <div className="globe">
            <Canvas>
                <ContextBridge>
                    <ambientLight intensity={0.29} color="#ffffff" />

                    <OrbitControls
                        rotateSpeed={0.25}
                        // autoRotate
                        autoRotateSpeed={0.2}
                        enableZoom={false}
                    />
                    <PerspectiveCamera makeDefault position={[1, 0, 2.2]} />

                    <Selection>
                        <EffectComposer autoClear={false}>
                            <HueSaturation saturation={0.3} />

                            <Outline
                                blur
                                visibleEdgeColor="#C7E44F"
                                edgeStrength={4.5}
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
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? "grab" : "auto";
    }, [hovered]);

    return (
        <mesh
            onPointerEnter={(e) => setHovered(true)}
            onPointerLeave={(e) => setHovered(false)}
            onPointerDown={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "grabbing";
            }}
            onPointerUp={(e) => (document.body.style.cursor = "grab")}
        >
            <Patch />

            {Object.values(riverData).map((river) => (
                <River river={river} />
            ))}

            <sphereBufferGeometry args={[1, 32, 32]} />
            <meshPhongMaterial map={globeMap} />
        </mesh>
    );
};

const Patch = () => {
    const { activePatch, setActivePatch } = useContext(ActivePatchContext);
    const [hovered, setHovered] = useState(false);
    const [border, setBorder] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto";
    }, [hovered]);

    useEffect(() => {
        setBorder(activePatch == "pacific");
    }, [activePatch]);

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                setActivePatch("pacific");
            }}
            onPointerEnter={(e) => setHovered(true)}
            onPointerLeave={(e) => setHovered(false)}
            position={[0.7, 0.56, 0.6]}
        >
            <sphereBufferGeometry args={[0.045, 32, 32]} />
            <meshBasicMaterial color="#01cbe1" />

            {border && <SphereBorder size="big" />}
        </mesh>
    );
};

const River = ({ river }) => {
    const { activePatch, setActivePatch } = useContext(ActivePatchContext);

    const [hovered, setHovered] = useState(false);
    const [border, setBorder] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto";
    }, [hovered]);

    useEffect(() => {
        setBorder(activePatch == "klang");
    }, [activePatch]);

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                setActivePatch("klang");
            }}
            onPointerEnter={(e) => setHovered(true)}
            onPointerLeave={(e) => setHovered(false)}
            position={river.globePosition}
        >
            <sphereBufferGeometry args={[0.04, 32, 32]} />
            <meshBasicMaterial opacity={0.0} transparent />

            <GreenDot />
            {border && <SphereBorder size="small" />}
        </mesh>
    );
};

const SphereBorder = ({ size }) => {
    const sphereSize = size === "big" ? [0.065, 32, 32] : [0.041, 32, 32];
    return (
        <Select enabled>
            <mesh
                onPointerEnter={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = "auto";
                }}
            >
                <sphereBufferGeometry args={sphereSize} />
                <meshBasicMaterial color="white" opacity={0.0} transparent />
            </mesh>
        </Select>
    );
};

const GreenDot = () => {
    return (
        <Select enabled>
            <mesh>
                <sphereBufferGeometry args={[0.015, 32, 32]} />
                <meshBasicMaterial color="#C7E44F" />
            </mesh>
        </Select>
    );
};

export default Globe;
