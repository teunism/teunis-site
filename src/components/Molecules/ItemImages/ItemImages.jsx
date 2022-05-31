import React, { useEffect, useState } from "react";

import "./ItemImages.scss";

const ItemImages = ({ images }) => {
    const [bigImage, setBigImage] = useState(images.mainImage);

    useEffect(() => {
        setBigImage(images.mainImage);
    }, [images]);

    return (
        <div className="item-images">
            <figure className="item-images__big-image-figure">
                <img className="item-images__big-image" src={bigImage} alt="" />
            </figure>

            <div className="item-images__small-images-container">
                {images.allImages.map((image, index) => (
                    <figure
                        className={
                            image == bigImage
                                ? "item-images__small-image-figure item-images__small-image-figure--active"
                                : "item-images__small-image-figure"
                        }
                        key={`image-${index}`}
                    >
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
