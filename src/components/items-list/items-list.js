import React, {Component} from "react";
import "./items-list.scss";
import Loader from "../common/loader";
import ErrorIndicator from "../common/error-indicator";

class ItemsList extends Component {
    state = {
        items: null,
        error: false
    };

    onItemsReady = (items) => {
        this.setState({
            items
        });
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.props.getData()
            .then(this.onItemsReady)
            .catch(this.onError);
    }

    renderItems = (items) => {
        return items.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    onClick={() => this.props.onSelectItem(id)}
                    key={id}>
                    {name}
                </li>
            );
        });
    }

    render() {
        const { items, error } = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const loader = !items && !error ? <Loader /> : null;
        const data = items && !error ? this.renderItems(items) : null;

        return (
            <>
                {errorMessage}
                {loader}
                <ul className="list-group items-list">
                    {data}
                </ul>
            </>
        );
    }
}

export default ItemsList;