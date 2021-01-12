import React, { Component } from 'react';
import './person-details.scss';
import SwapiService from '../../services/swapi-service';


export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: {}
    }

    constructor() {
        super();
        this.getPerson();
    }
    onPersonLoaded = (person) => {
        this.setState({ person });
    }

    getPerson() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPerson(id)
            .then(this.onPersonLoaded)
    }
    render() {

        const { name, gender, birthYear, eyeColor } = this.state;
        return (
            <div className="person-detail-wrapper">
                <div className="person-image">
                    <img src="https://www.pngkey.com/png/full/198-1985991_r2d2-600x315-r2-d2-soundboard.png" alt="R2-D2" />
                </div>
                <div className="person-description">
                    <div className="person-name">{name}</div>
                    <div className="person-gender person-desc-item">
                        Gender {gender}
                    </div>
                    <div className="person-birth person-desc-item">
                        Birth Year {birthYear}
                    </div>
                    <div className="person-eye-color person-desc-item">
                        Eye Color {eyeColor}
                    </div>
                </div>
            </div>
        );
    }
}
