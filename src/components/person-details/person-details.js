import React, {Component} from "react";
import "./person-details.scss";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../common/error-indicator";
import PersonView from "./person-view";
import Loader from "../common/loader";

class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null,
        loaded: false,
        error: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.personId !== this.props.personId) {
            this.updatePerson();
        }
    }

    onError = () => {
        this.setState({
            error: true,
            loaded: true
        })
    }

    onPersonReady = (person) => {
        this.setState({
            person,
            loaded: true
        })
    }

    updatePerson = () => {
        const {personId} = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then(this.onPersonReady)
            .catch(this.onError);
    }

    render() {
        if (!this.state.person) return null;

        const {error, loaded} = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const loader = loaded ? null :<Loader />;
        const hasData = loaded && !error;
        const person = hasData ? <PersonView person={this.state.person} /> : null;

        return (
            <div className="person-details card">
                {errorMessage}
                {loader}
                {person}
            </div>
        );
    }
}

export default PersonDetails;