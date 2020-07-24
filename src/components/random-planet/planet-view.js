import React from "react";

const PlanetView = ({planet: {id, name, population, rotationPeriod, diameter, climate}}) => {
    return <>
        <img
            className="planet-img"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt=""/>
        <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Population</span>
                    <span>{population}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Rotation period</span>
                    <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Diameter</span>
                    <span>{diameter}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Climate</span>
                    <span>{climate}</span>
                </li>
            </ul>
        </div>
    </>
};

export default PlanetView;