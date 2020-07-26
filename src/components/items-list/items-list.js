import React, {Component} from "react";
import "./items-list.scss";
import SwapiService from "../../services/swapi-service";
import Loader from "../common/loader";
import ErrorIndicator from "../common/error-indicator";

class ItemsList extends Component {
    swapiService = new SwapiService();

    state = {
        persons: null,
        error: false
    };

    onPersonsReady = (persons) => {
        this.setState({
            persons
        });
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.swapiService
            .getAllPersons()
            .then(this.onPersonsReady)
            .catch(this.onError);
    }

    renderPersons = (persons) => {
        return persons.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    onClick={() => this.props.onSelectPerson(id)}
                    key={id}>
                    {name}
                </li>
            );
        });
    }

    render() {
        const { persons, error } = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const loader = !persons && !error ? <Loader /> : null;
        const items = persons && !error ? this.renderPersons(persons) : null;

        return (
            <>
                {errorMessage}
                {loader}
                <ul className="list-group items-list">
                    {items}
                </ul>
            </>
        );
    }
}

export default ItemsList;