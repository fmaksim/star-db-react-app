import React, {Component} from "react";
import "./random-planet.scss";
import SwapiService from "../../services/swapi-service";

class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {}
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet});
    }

    updatePlanet = () => {
        this.swapiService
            .getPlanet(12)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet: {id, name, population,
            diameter, rotationPeriod, climate} } = this.state;

        return <div className="random-planet jumbotron rounded">
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
        </div>
    }
};

export default RandomPlanet;