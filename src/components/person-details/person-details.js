import React, { Component } from 'react';
import './person-details.scss';
import SwapiService from '../../services/swapi-service';


export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        name: null,
        gender: null,
        birthYear: null,
        eyeColor: null

    }

    constructor() {
        super();
        this.getPerson();
    }

    getPerson() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPerson(id)
            .then((person) => {
                this.setState({
                    id,
                    name: person.name,
                    gender: person.gender,
                    birthYear: person.birthYear,
                    eyeColor: person.eyeColor
                })
            })
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
                        Gender male
                </div>
                    <div className="person-birth person-desc-item">
                        Birth Year 43
                </div>
                    <div className="person-eye-color person-desc-item">
                        Eye Color red
                </div>
                </div>
            </div>
        );
    }
}
