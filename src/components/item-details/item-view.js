import React from "react";

const ItemView = ({image, name, fields}) => {
    return (
        <>
            <img
                className="item-img"
                src={image}
                alt=""/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {fields}
                </ul>
            </div>
        </>
    );
}

export default ItemView;