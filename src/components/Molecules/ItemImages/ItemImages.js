import React, { useState } from "react";

import "./ItemImages.scss";

const ItemImages = ({ images }) => {
    const [bigImage, setBigImage] = useState(images.mainImage);

    return (
        <div classNames="item-images">
            <figure className="item-images__big-image-figure">
                <img className="item-images__big-image" src={bigImage} alt="" />
            </figure>

            <div className="item-images__small-images-container">
                {images.allImages.map((image) => (
                    <figure className="item-images__small-image-figure">
                        <img
                            className="item-images__small-image"
                            src={image}
                            alt=""
                            onClick={() => {
                                setBigImage(image);
                            }}
                        />
                    </figure>
                ))}
            </div>
        </div>
    );
};

export default ItemImages;
