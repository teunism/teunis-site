import React, { useContext } from "react";

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

import { locationData } from "../../../data/patches";

import BlueMap from "../../../img/blue-world-2.png";
import GlobeLegend from "../../Atoms/GlobeLegend/GlobeLegend";

import "./Globe.scss";

const Globe = () => {
    const ContextBridge = useContextBridge(ActivePatchContext);
    const mobileScreen = window.innerWidth < 640;

    return (
        <div className="globe">
            <div className="globe__inner">
                <GlobeLegend />
                <Canvas>
                    <ContextBridge>
                        <ambientLight intensity={0.38} color="#ffffff" />

                        <OrbitControls
                            rotateSpeed={0.25}
                            autoRotate
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
                                    edgeStrength={mobileScreen ? 50 : 10}
                                    width={1000}
                                />
                            </EffectComposer>
                            <GlobeModel />
                        </Selection>
                    </ContextBridge>
                </Canvas>
            </div>
        </div>
    );
};

const GlobeModel = () => {
    const globeMap = useLoader(TextureLoader, BlueMap);

    const riverLocations = locationData.filter(
        (location) => location.type == "river"
    );

    const oceanLocations = locationData.filter(
        (location) => location.type == "ocean"
    );

    return (
        <mesh
            onPointerEnter={(e) => (document.body.style.cursor = "grab")}
            onPointerLeave={(e) => (document.body.style.cursor = "auto")}
            onPointerDown={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "grabbing";
            }}
            onPointerUp={(e) => (document.body.style.cursor = "grab")}
        >
            {oceanLocations.map((patch) => (
                <Patch patch={patch} key={patch.name} />
            ))}

            {riverLocations.map((river) => (
                <River river={river} key={river.name} />
            ))}

            <sphereBufferGeometry args={[1, 32, 32]} />

            <meshPhongMaterial map={globeMap} />
        </mesh>
    );
};

const Patch = ({ patch }) => {
    const { activePatch, setActivePatch } = useContext(ActivePatchContext);
    const locationIsActive = activePatch == patch.name;
    const mobileScreen = window.innerWidth < 640;

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                setActivePatch(patch.name);
            }}
            onPointerEnter={(e) => (document.body.style.cursor = "pointer")}
            onPointerLeave={(e) => (document.body.style.cursor = "auto")}
            position={patch.globePosition}
        >
            <sphereBufferGeometry
                args={mobileScreen ? [0.045, 32, 32] : [0.035, 32, 32]}
            />
            <meshBasicMaterial color="#01cbe1" />

            {locationIsActive && <SphereBorder size="big" />}
        </mesh>
    );
};

const River = ({ river }) => {
    const { activePatch, setActivePatch } = useContext(ActivePatchContext);
    const locationIsActive = activePatch == river.name;
    const mobileScreen = window.innerWidth < 640;

    return (
        <mesh
            onClick={(e) => {
                e.stopPropagation();
                setActivePatch(river.name);
            }}
            onPointerEnter={(e) => (document.body.style.cursor = "pointer")}
            onPointerLeave={(e) => (document.body.style.cursor = "auto")}
            position={river.globePosition}
        >
            <sphereBufferGeometry
                args={mobileScreen ? [0.05, 32, 32] : [0.04, 32, 32]}
            />
            <meshBasicMaterial opacity={0.0} transparent />

            <GreenDot />
            {locationIsActive && <SphereBorder size="small" />}
        </mesh>
    );
};

const SphereBorder = ({ size }) => {
    const mobileScreen = window.innerWidth < 640;
    const sphereSize = () => {
        if (size === "big" && mobileScreen) {
            return [0.065, 32, 32];
        }
        if (size === "big" && !mobileScreen) {
            return [0.055, 32, 32];
        }
        if (size !== "big" && mobileScreen) {
            return [0.051, 32, 32];
        }
        if (size !== "big" && !mobileScreen) {
            return [0.041, 32, 32];
        }
    };

    return (
        <Select enabled>
            <mesh
                onPointerEnter={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = "auto";
                }}
            >
                <sphereBufferGeometry args={sphereSize()} />
                <meshBasicMaterial color="white" opacity={0.0} transparent />
            </mesh>
        </Select>
    );
};

const GreenDot = () => {
    const mobileScreen = window.innerWidth < 640;

    return (
        <Select enabled>
            <mesh>
                <sphereBufferGeometry
                    args={mobileScreen ? [0.025, 32, 32] : [0.015, 32, 32]}
                />
                <meshBasicMaterial color="#C7E44F" />
            </mesh>
        </Select>
    );
};

export default Globe;
