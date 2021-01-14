import React, { Component } from 'react';
import './item-details.scss';
import SwapiService from '../../services/swapi-service';


const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
}

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            });
    }

    render() {
        const { item, image } = this.state;
        if (!this.state.item) {
            return <span>Select a person from a list</span>
        }
        const { name } = item;
        return (
            <div className="person-detail-wrapper">
                <div className="person-image">
                    <img src={image} alt="" />
                </div>
                <div className="person-description">
                    <h4 className="person-name">{name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item })
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
