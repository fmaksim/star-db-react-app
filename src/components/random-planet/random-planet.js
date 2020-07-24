import React, {Component} from "react";
import "./random-planet.scss";
import SwapiService from "../../services/swapi-service";
import Loader from "../common/loader";
import PlanetView from "./planet-view";

class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loaded: false
    };

    componentDidMount() {
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loaded: true
        });
    }

    updatePlanet = () => {
        this.swapiService
            .getPlanet(12)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet, loaded } = this.state;
        const loader = loaded ? null : <Loader />;
        const content = loaded ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {loader}
                {content}
            </div>
        );
    }
};

export default RandomPlanet;