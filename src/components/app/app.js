import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list/item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row-component/row-component';

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

        const { getPerson, getStarShip, getPersonImage, getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
                getData={getStarShip}
                getImageUrl={getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        );
        return (
            <div className="container">
                <Header></Header>
                <RandomPlanet></RandomPlanet>
                <Row leftElem={personDetails} rightElem={starshipDetails} />
            </div>

        )
    }

}

