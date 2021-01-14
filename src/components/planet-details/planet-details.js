import React, { Component } from 'react';
import Row from '../row-component/row-component';
import './planet-details.scss';
import ItemList from '../item-list/item-list';
import SwapiService from '../../services/swapi-service';


export default class PlanetDetails extends Component {

    swapiService = new SwapiService();
    state = {

    }




    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => item.name}></ItemList>
        );

        return (
            <Row leftElem={itemList} rightElem={null} />

        );
    }
}