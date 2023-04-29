import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom';

class Experience extends Component {
    render() {
        const history = useHistory;
        let {id, post, period, desc, competences, link} = this.props.exp;

        function handleSubmit() {
            window.location.href = '/Experience/' + post
            fetch('/Experience/' + post, {
                method: 'POST',
                body: this.props.exp,
            });
        }


        return (
            <div className={"experience"} onClick={handleSubmit}>
                    <div className="head">
                        <h3>{post}</h3>
                        <h3>{period}</h3>
                    </div>
                    <span className={"content"}>{desc}</span>
                    <br/>
                    <br/>
                    <span className={"cac"}>Compétences travaillées: </span>
                    {
                        competences.map((competence, index) => {
                            let str;
                           if (index < competences.length - 1) {
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