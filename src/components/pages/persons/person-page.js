import React, {Component} from "react";
import ItemsList from "../../items-list";
import SwapiService from "../../../services/swapi-service";
import Row from "../../row";
import ItemDetails from "../../item-details";
import Record from "../../item-field-record";

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
        const itemsList = (
            <ItemsList
                getData={this.swapiService.getAllPersons}
                onSelectItem={this.onSelectPerson} />
        );

        const personDetails = (
            <ItemDetails
                getData={this.swapiService.getPerson}
                getImage={this.swapiService.getPersonImage}
                itemId={this.state.selectedPersonId} >
                <Record field={"gender"} label="Gender" />
            </ItemDetails>
        );

        return (
            <Row left={itemsList} right={personDetails} />
        );
    }
}