import React from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

const App = () => {
    return (
        <div className="container">
            <Header></Header>
            <RandomPlanet></RandomPlanet>
            <ItemList></ItemList>
            <PersonDetails></PersonDetails>
        </div>

    )
}

export default App;
