import React, {Component} from "react";
import "./item-details.scss";
import ErrorIndicator from "../common/error-indicator";
import Loader from "../common/loader";
import ItemView from "./item-view";

export default class ItemDetails extends Component {

    state = {
        item: null,
        loaded: false,
        error: false
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateItem();
        }
    }

    onError = () => {
        this.setState({
            error: true,
            loaded: true
        })
    }

    onItemReady = (item) => {
        this.setState({
            item,
            loaded: true
        })
    }

    updateItem = () => {
        const {itemId} = this.props;
        if (!itemId) {
            return;
        }

        this.props
            .getData(itemId)
            .then(this.onItemReady)
            .catch(this.onError);
    }

    render() {
        const {item} = this.state;
        if (!item) return null;

        const {error, loaded} = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const loader = loaded ? null :<Loader />;
        const hasData = loaded && !error;
        const image = this.props.getImage(item.id);
        const fields = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {item});
        });
        
        const content = hasData ?
            <ItemView name={item.name} image={image} fields={fields} /> : null;

        return (
            <div className="item-details card">
                {errorMessage}
                {loader}
                {content}
            </div>
        );
    }
}