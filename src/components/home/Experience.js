import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Experience extends Component {
    render() {
        // const history = null;
        let {experience} = this.props;

        experience.competences = [
            //TODO: Do in back
            "caca", "pipi"
            ];

        // function handleSubmit() {
        //     window.location.href = '/Experience/' + post
        //     fetch('/Experience/' + post, {
        //         method: 'POST',
        //         body: this.props.exp,
        //     });
        // }


        return (
            <div className={"experience"}>
                    <div className="head">
                        <h3>{experience.job}</h3>
                        <h3>{experience.startPeriod}</h3>
                    </div>
                    <span className={"content"}>{experience.description}</span>
                    <br/>
                    <br/>
                    <span className={"cac"}>Compétences travaillées: </span>
                    {
                        experience.competences.map((competence, index) => {
                            //TODO: faire en logique prcq la c'est de la merde
                            let str;
                           if (index < experience.competences.length - 1) {
                               str = competence + ", ";
                           }else{
                               str = competence + ".";
                           }
                            return (
                                <span key={index}>{str}</span>
                            )
                        })
                    }
            </div>
        );
    }
}

export default Experience;