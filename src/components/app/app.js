import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: null
    }

    toggleRandomPlanet = () => {

    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        return (
            <div className="container">
                <Header></Header>
                <RandomPlanet></RandomPlanet>
                <div className="row">
                    <div className="col-6">
                        <ItemList onItemSelected={this.onItemSelected}></ItemList>
                    </div>
                    <div className="col-6">
                        <PersonDetails personId={this.state.selectedPerson}></PersonDetails>
                    </div>
                </div>
            </div>

        )
    }

}

