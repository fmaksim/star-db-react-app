import React from "react";
import "./header.scss";

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>StarDB</h3>
            <ul className="d-flex">
                <li><a href="#">Planets</a></li>
                <li><a href="#">Persons</a></li>
                <li><a href="#">Starships</a></li>
            </ul>
        </div>
    );
};

export default Header;