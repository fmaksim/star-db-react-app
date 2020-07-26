import React, {Component} from "react";
import "./app.scss";
import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";
import ItemsList from "../items-list";
import PersonDetails from "../person-details";

class App extends Component {
    state = {
        selectedPersonId: 5
    };

    onSelectPerson = (id) => {
        this.setState({
            selectedPersonId: id
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemsList onSelectPerson={this.onSelectPerson} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPersonId} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;