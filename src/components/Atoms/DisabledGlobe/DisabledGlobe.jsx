import React, { useState } from "react";

import "./DisabledGlobe.scss";

const DisabledGlobe = () => {
    const [disabled, setDisabled] = useState(true);
    return (
        <>
            {disabled && (
                <div
                    className="disabled-globe"
                    onClick={(e) => {
                        setDisabled(false);
                    }}
                >
                    <p className="disabled-globe__text">Click to use globe</p>
                </div>
            )}
        </>
    );
};

export default DisabledGlobe;
