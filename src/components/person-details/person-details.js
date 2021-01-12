import React, { Component } from 'react';
import './person-details.scss';
import SwapiService from '../../services/swapi-service';


export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person })
            });
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }

        const {
            id, name, gender, birthYear, eyeColor
        } = this.state.person;
        return (
            <div className="person-detail-wrapper">
                <div className="person-image">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="R2-D2" />
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
