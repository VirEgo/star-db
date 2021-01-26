import React, { Component } from 'react';
import Header from '../header/header';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.scss';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

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

        return (
            <SwapiServiceProvider value={this.swapiService}>
                <div className="container">
                    <Header></Header>
                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />

                    <PersonList />
                    <PlanetList />
                    <StarshipList />
                </div>
            </SwapiServiceProvider>
        );
    };

};

