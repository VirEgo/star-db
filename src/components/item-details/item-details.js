import React, { Component } from 'react';
import './item-details.scss';
import SwapiService from '../../services/swapi-service';


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

        const { name, gender, birthYear, eyeColor } = item;
        return (
            <div className="person-detail-wrapper">
                <div className="person-image">
                    <img src={image} alt="" />
                </div>
                <div className="person-description">
                    <div className="person-name">{name}</div>
                    <div className="person-gender person-desc-item">
                        Gender {gender}
                    </div>
                    <div className="person-birth person-desc-item">
                        Birth Year {birthYear}
                    </div>
                    <div className="person-eye-color person-desc-item">
                        Eye Color {eyeColor}
                    </div>
                </div>
            </div>
        );
    }
}
