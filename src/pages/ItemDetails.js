import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsData } from "../data/itemsData";

const ItemDetails = () => {
    const { itemUrl } = useParams();
    const item = itemsData.find((item) => item.url == itemUrl);

    return (
        <div className="ItemDetails">
            <h1>{item.title}</h1>
            <p></p>
        </div>
    );
};

export default ItemDetails;
