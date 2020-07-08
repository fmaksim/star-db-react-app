import React from "react";
import "./items-list.scss";

const ItemsList = () => {
    return (
        <ul className="list-group items-list">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
        </ul>
    );
};

export default ItemsList;