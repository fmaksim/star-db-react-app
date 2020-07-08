import React from "react";
import "./random-planet.scss";

const RandomPlanet = () => {
    return (
        <div className="random-planet jumbotron rounded">
            <img
                className="planet-img"
                src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
                alt=""/>
            <div>
                <h4>Planet name</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>6000000</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation period</span>
                        <span>23h</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>1000</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RandomPlanet;