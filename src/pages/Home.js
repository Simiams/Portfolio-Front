import React, {useState, useEffect} from 'react';
// import React, {Component} from 'react';
import Card from "../components/home/Card";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";
import TitleLine from "../components/all/TitleLine";
import ProjectCard from "../components/home/ProjectCard";
import {getProfil} from "../services/User_SRV";
import {useParams} from "react-router-dom";
import {matches} from "@testing-library/jest-dom/dist/utils";

const   Home = () => {
    let {uri} = useParams();
    const [profil, setProfil] = useState(null);


    useEffect(() => {
        getProfil(uri).then((p) => {
            console.log(p)
            setProfil(p);
        });
    }, [uri]);


    if (profil == null) {
        setProfil({"id":1,"name":"John","lastName":"Doe","pdp":"https://example.com/pdp1","ddn":"1990-01-01T00:00:00","mail":"john.doe@example.com","phone":"0123456789","city":"Paris","job":"Developer","currentSchool":null,"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","lookingFor":null,"uri":"caca","competences":[{"id":2,"name":"valeur_Name","description":"valeur_Description","icon":"valeur_Icon","startPractice":"2023-02-12T00:00:00","url":"valeur_url"}],"experiences":[{"id":4,"job":"poste","startPeriod":"2001-01-18T00:00:00","endPeriod":"2023-04-12T00:00:00","description":null,"url":"rl","company":"companu","competences":[{"id":2,"name":"valeur_Name","description":"valeur_Description","icon":"valeur_Icon","startPractice":"2023-02-12T00:00:00","url":"valeur_url"}]},{"id":5,"job":"poste","startPeriod":"2001-01-18T00:00:00","endPeriod":"2023-04-12T00:00:00","description":null,"url":"rl","company":"companu","competences":[]},{"id":6,"job":"poste","startPeriod":"2001-01-18T00:00:00","endPeriod":"2023-04-12T00:00:00","description":null,"url":"rl","company":"companu","competences":[{"id":2,"name":"valeur_Name","description":"valeur_Description","icon":"valeur_Icon","startPractice":"2023-02-12T00:00:00","url":"valeur_url"}]}],"projects":[{"id":1,"name":"BICE","uri":"BICE","icon":"\"caca\"","date":"2023-04-12T00:00:00","description":null,"pageHTML":null,"pageMarkDown":null,"idProfil":1,"competences":[{"id":2,"name":"valeur_Name","description":"valeur_Description","icon":"valeur_Icon","startPractice":"2023-02-12T00:00:00","url":"valeur_url"}]}]})
        return (<div>Chargement...</div>)
    }

    return (
        <div className={"home"}>
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
                        {profil.projects.map((project) => {
                            return (<ProjectCard key={project.id} project={project}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


// class Home extends Component {
//
//     state = {profil: null};
//
//     getParser() {
//         alert(this.props.match.params)
//     }
//
//     componentDidMount() {
//
//         // getProfil(this.props).then(profil => {
//         //     console.log(profil[0]);
//         //     this.setState({profil: profil[0]});
//         // });
//
//     }
//
//
//     render() {
//         // const { questionNumber } = useQuestionNumber();
//         let profil = this.state.profil;
//
//         //TODO: To do in the back of application
//
//
//         if (profil == null) {
//             //TODO: Add loading component
//             return <div>Loading...</div>;
//         }
//
//
//         let projects = [{
//             "id": 1,
//             "uri": "short_uri_for_project1",
//             "name": "infrastructure reeau",
//             "icon": "/logo192.png",
//         }, {
//             "id": 1,
//             "uri": "short_uri_for_project2",
//             "name": "infrastructure reeau",
//             "icon": "/logo192.png",
//         }, {
//             "id": 1,
//             "uri": "short_uri_for_project3",
//             "name": "infrastructure reeau",
//             "icon": "/logo192.png",
//         }, {
//             "id": 1,
//             "uri": "short_uri_for_project4",
//             "name": "infrastructure reeau",
//             "icon": "/logo192.png",
//         }]
//
//         return (
//             <div className={"home"}>
//
//                 <div>
//                     <div className="top">
//                         <div className="left">
//                             <Card profil={profil}/>
//                             <Contact profil={profil}/>
//                         </div>
//                         <div className="right">
//                             <div className="homeContent">
//                                 <div className="content">
//                                     <h1>{profil.name} {profil.lastName}</h1>
//                                     <h2>{profil.job}</h2>
//
//                                     <h3 className={"subtitle"}>Cherche</h3>
//
//                                     LOOKING FOR
//                                     {/*TODO: Add user looking for in API and BDD*/}
//
//                                     <h3 className={"subtitle"}>Profil</h3>
//
//
//                                     <p>{profil.description}</p>
//
//                                     <h3 className={"subtitle"}>Experiences</h3>
//                                     <div className="experiences">
//
//                                         {profil.experiences.map((exp) => {
//                                             return (<Experience key={exp.id} experience={exp}/>)
//                                         })}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container">
//                         <TitleLine title={"Portfolio"}/>
//                         <div className="contain">
//                             {projects.map((project) => {
//                                 return (<ProjectCard key={project.id} project={project}/>)
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>);
//     }
// }
//
// export default Home;
