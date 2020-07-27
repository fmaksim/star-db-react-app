import React, {Component} from "react";
import "./app.scss";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundry from "../common/error-boundry/error-boundry";
import PersonPage from "../pages/persons";

export default class App extends Component {
    render() {
        return (
            <ErrorBoundry>
                <div className="container">
                    <Header />
                    <RandomPlanet />
                    <PersonPage />
                </div>
            </ErrorBoundry>
        );
    }
}