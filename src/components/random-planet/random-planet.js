import React, {Component} from "react";
import "./random-planet.scss";
import SwapiService from "../../services/swapi-service";
import Loader from "../common/loader";
import PlanetView from "./planet-view";
import ErrorIndicator from "../common/error-indicator";

class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loaded: false,
        error: false
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

    onError = () => {
        this.setState({
            error: true,
            loaded: true
        });
    }

    updatePlanet = () => {
        this.swapiService
            .getPlanet(12)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loaded, error } = this.state;
        const hasData = loaded && !error;

        const loader = loaded ? null : <Loader />;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {loader}
                {content}
            </div>
        );
    }
}

export default RandomPlanet;