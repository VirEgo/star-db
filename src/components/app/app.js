import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import Row from '../row';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';

import './app.scss';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="stardb-app">
            <Header />
            {planet}
            <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />
            <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />
            <Row left={<StarshipList />} right={<StarshipDetails itemId={9} />} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
