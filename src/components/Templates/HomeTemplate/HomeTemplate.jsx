import React from "react";

import "./HomeTemplate.scss";

const HomeTemplate = () => {
    return (
        <section className="home-template">
            <h1 className="home-template__title">
                Hallo dit is een grote titel
            </h1>
            <h2 className="home-template__second-title">
                Hallo dit is een medium titel
            </h2>
            <h2 className="home-template__uppercase-title">
                Hallo dit is een uppercase titel
            </h2>

            <p className="home-template__body-text">
                Lopende tekst. Etiam sit amet orci eget eros faucibus tincidunt.
                Ut leo. Praesent adipiscing. Duis arcu tortor, suscipit eget,
                imperdiet nec, imperdiet iaculis, ipsum.
            </p>
        </section>
    );
};

export default HomeTemplate;
