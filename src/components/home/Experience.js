import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Experience extends Component {
    render() {
        // const history = null;
        let {experience} = this.props;

        experience.competences = [{"id":2,"name":"valeur_Name","description":"valeur_Description","icon":"/logo192.png","startPractice":"2023-02-12T00:00:00","url":"valeur_url"}, {"id":2,"name":"valeur_Name","description":"valeur_Description","icon":"/logo192.png","startPractice":"2023-02-12T00:00:00","url":"valeur_url"}, {"id":2,"name":"valeur_Name","description":"valeur_Description","icon":"/logo192.png","startPractice":"2023-02-12T00:00:00","url":"valeur_url"}, {"id":2,"name":"valeur_Name","description":"valeur_Description","icon":"/logo192.png","startPractice":"2023-02-12T00:00:00","url":"valeur_url"}]

        return (
            <NavLink exact to={"Experience/" + experience.uri} className={"experience"}>
                    <div className="head">
                        <h3>{experience.job}</h3>
                        <h3>{experience.startPeriod}</h3>
                    </div>

                    <span className={"content"}>{experience.description}</span>
                    <div className="competencesExperience">
                    {
                        experience.competences.map((competence, index) => {
                            return (
                                <img className={"iconCompetenceExperience"} src={competence.icon} alt=""/>
                            )
                        })
                    }
                    </div>
            </NavLink>
        );
    }
}

export default Experience;