import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import './item-list.scss';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            })
    }


    renderItems(arr) {

        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}</li>
            )
        })
    }
    render() {
        const { itemList } = this.state;
        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);
        return (
            <div className="item-list-wrapper">
                <ul className="list-group items">
                    {items}
                </ul>
            </div>
        );
    }
}