import React, {Component} from 'react';
import Card from "../components/home/Card";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";
import TitleLine from "../components/all/TitleLine";
import ProjectCard from "../components/home/ProjectCard";
import {getProfil} from "../services/User_SRV";

class Home extends Component {

    state = {profil: null};

    componentDidMount() {
        getProfil().then(profil => {
            console.log(profil[0]);
            this.setState({profil: profil[0]});
        });
    }

    render() {

        let profil = this.state.profil;

        //TODO: To do in the back of application


        if (profil == null) {
            //TODO: Add loading component
            return <div>Loading...</div>;
        }

        profil.competences = [{
            "name": "caca", "startPractice": "pipi"
        }, {
            "name": "caca", "startPractice": "pipi"
        }, {
            "name": "caca", "startPractice": "pipi"
        }, {
            "name": "caca", "startPractice": "pipi"
        }, {
            "name": "caca", "startPractice": "pipi"
        }, {
            "name": "caca", "startPractice": "pipi"
        }];

        profil.experiences = [{
            "id": 4,
            "job": "poste",
            "startPeriod": "2001-01-18T00:00:00",
            "endPeriod": "2023-04-12T00:00:00",
            "description": "escription",
            "url": "rl",
            "company": "companu"
        }]

        let projects = [{
            "id": 1,
            "uri": "short_uri_for_project1",
            "name": "infrastructure reeau",
            "icon": "/logo192.png",
        }, {
            "id": 1,
            "uri": "short_uri_for_project2",
            "name": "infrastructure reeau",
            "icon": "/logo192.png",
        }, {
            "id": 1,
            "uri": "short_uri_for_project3",
            "name": "infrastructure reeau",
            "icon": "/logo192.png",
        }, {
            "id": 1,
            "uri": "short_uri_for_project4",
            "name": "infrastructure reeau",
            "icon": "/logo192.png",
        }]

        return (<div className={"home"}>
            <div>
                <div className="top">
                    <div className="left">
                        <Card profil={profil}/>
                        <Contact profil={profil}/>
                    </div>
                    <div className="right">
                        <div className="homeContent">
                            <div className="content">
                                <h1>{profil.name} {profil.lastName}</h1>
                                <h2>{profil.job}</h2>

                                <h3 className={"subtitle"}>Cherche</h3>

                                LOOKING FOR
                                {/*TODO: Add user looking for in API and BDD*/}

                                <h3 className={"subtitle"}>Profil</h3>


                                <p>{profil.description}</p>

                                <h3 className={"subtitle"}>Experiences</h3>
                                <div className="experiences">

                                    {profil.experiences.map((exp) => {
                                        return (<Experience key={exp.id} experience={exp}/>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <TitleLine title={"Portfolio"}/>
                    <div className="contain">
                        {projects.map((project) => {
                            return (<ProjectCard key={project.id} project={project}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Home;
