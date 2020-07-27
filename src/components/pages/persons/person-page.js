import React, {Component} from "react";
import ErrorBoundry from "../../common/error-boundry/error-boundry";
import ItemsList from "../../items-list";
import PersonDetails from "../../person-details";

export default class PersonPage extends Component {
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
                        <ItemsList onSelectPerson={this.onSelectPerson} />
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