import React, {Component} from "react";
import ErrorBoundry from "../../common/error-boundry/error-boundry";
import ItemsList from "../../items-list";
import PersonDetails from "../../person-details";
import SwapiService from "../../../services/swapi-service";

export default class PersonPage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPersonId: 5
    }

    onSelectPerson = (id) => {
        this.setState({
            selectedPersonId: id
        });
    }

    render() {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ErrorBoundry>
                        <ItemsList
                            getData={this.swapiService.getAllPersons}
                            onSelectItem={this.onSelectPerson} />
                    </ErrorBoundry>
                </div>
                <div className="col-md-6">
                    <ErrorBoundry>
                        <PersonDetails personId={this.state.selectedPersonId} />
                    </ErrorBoundry>
                </div>
            </div>
        );
    }
}