import React from 'react';
import ItemList from '../item-list/item-list';
import { WithData, withSwapiService } from '../hoc-helper';


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>
            {fn}
        </Wrapped>
    };
};
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
}
const PersonList = withSwapiService(
    WithData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetList = withSwapiService(WithData(
    withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);

const StarshipList = withSwapiService(WithData(
    withChildFunction(ItemList, renderModelAndName)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};