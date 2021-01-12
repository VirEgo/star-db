import React, { Component } from 'react';
import './people-page.scss';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row-component/row-component';
import ErrorBoundry from '../error-boundry/error-boundry';



export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: 3
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        const itemList = (
            <ItemList
                getData={this.swapiService.getAllPeople}
                onItemSelected={this.onItemSelected}
                renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}></ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId={this.state.selectedPerson}></PersonDetails>
            </ErrorBoundry>
        );
        return (
            <Row leftElem={itemList} rightElem={personDetails} />
        );
    }
}