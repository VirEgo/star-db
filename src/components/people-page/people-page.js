import React, { Component } from 'react';
import './people-page.scss';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <div className="row">
                <div className="col-6">
                    <ItemList onItemSelected={this.onItemSelected}></ItemList>
                </div>
                <div className="col-6">
                    <PersonDetails personId={this.state.selectedPerson}></PersonDetails>
                </div>
            </div>
        );
    }
}