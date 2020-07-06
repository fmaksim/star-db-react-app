import React from "react";
import "./app.scss";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import ItemsList from "../items-list";
import PersonDetails from "../person-details";

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />
            <div>
                <ItemsList />
                <PersonDetails />
            </div>
        </div>
    );
};

export default App;