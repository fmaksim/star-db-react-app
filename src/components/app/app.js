import React from "react";
import "./app.scss";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import ItemsList from "../items-list";
import PersonDetails from "../person-details";

const App = () => {
    return (
        <div className="container">
            <Header />
            <RandomPlanet />
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemsList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;