import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        showRandomPlanet: true,
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => item.name}></ItemList>
        );
        return (
            <div className="container">
                <Header></Header>
                <RandomPlanet></RandomPlanet>
                <PeoplePage />

                <div className="row">
                    <div className="col-6">
                        {itemList}
                    </div>
                    <div className="col-6">
                        <PersonDetails personId={this.state.selectedPerson}></PersonDetails>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        {itemList}
                    </div>
                    <div className="col-6">
                        <PersonDetails personId={this.state.selectedPerson}></PersonDetails>
                    </div>
                </div>
            </div>

        )
    }

}

