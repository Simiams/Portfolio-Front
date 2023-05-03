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

const Home = () => {
    let {uri} = useParams();
    const [profil, setProfil] = useState(null);


    useEffect(() => {
        getProfil(uri).then((p) => {
            console.log(p)
            setProfil(p);
        });
    }, [uri]);


    if (profil == null) {
        setProfil({
            "id": 1,
            "name": "Simon",
            "lastName": "Convert",
            "pdp": "pokemon.png",
            "ddn": "26/11/2003",
            "mail": "Simon.Convert@gmail.com",
            "phone": "0763329647",
            "city": "Nantes",
            "job": "Developeur Web",
            "currentSchool": "EPSI",
            "description": "Bonjour, je m'appelle Simon. Je suis actuelemnt en 2eme années de bachelor à l'EPSI (Ecole Privée des Science Informatique) en double cursus BTS SIO (Service Informatique aux organisations) sur Nantes.\n" +
                "Ce n'est que ma deuxiéme années et pourtant je commence a acquérir de solides bases dans le monde du numérique. Aussi bien en; Devellopement Web avec php, NodeJS, JS, et \"html\", qu'en Programmation Python, C# et C++ mais aussi en Infrastructure réseau. Passionné, je me forme de mon côté à la cybersécurité et les differents outils que nous offre Kali-Linux.\n" +
                "Ayant effectué mon précédent stage en tant que développeur C#, je vise, cette année, l'univers du web et de la cybersécurité. ",
            "lookingFor": "Alternance dés septembre 2021",
            "uri": "SimonConvert",
            "competences": [{
                "id": 1,
                "name": "nodeJs",
                "description": "NodeJs",
                "icon": "nodejs.png",
                "startPractice": "2021",
                "url": null
            },{
                "id": 2,
                "name": "React",
                "description": "React",
                "icon": "react.png",
                "startPractice": "2021",
                "url": null
            },{
                "id": 3,
                "name": "C#",
                "description": "C",
                "icon": "c-sharp.png",
                "startPractice": "2020",
                "url": null
            },{
                "id": 4,
                "name": "JS",
                "description": "JS",
                "icon": "js.png",
                "startPractice": "2020",
                "url": null
            },{
                "id": 5,
                "name": "Python",
                "description": "Python",
                "icon": "python.png",
                "startPractice": "2019",
                "url": null
            },{
                "id": 6,
                "name": "Cybersécurité",
                "description": "Cybersécurité",
                "icon": "cyber-attack.png",
                "startPractice": "2022",
                "url": null
            }],
            "experiences": [{
                "id": 1,
                "job": "Developpeur C#",
                "startPeriod": "05/2022",
                "endPeriod": "06/2022",
                "description": "Développement d'un convertisseur de fichier XAML",
                "url": "rl",
                "company": "STRAMATEL",
                "uri": "DeveloppeurCSharp_Stramatel",
                "competences": [{
                    "id": 3,
                    "name": "C#",
                    "description": "C",
                    "icon": "c-sharp.png",
                    "startPractice": "2020",
                    "url": null
                },]
            }, {
                "id": 2,
                "job": "Deeloppeur Web",
                "startPeriod": "01/2022",
                "endPeriod": "2023-04-12T00:00:00",
                "description": "Développement d'un site web de e-commerce",
                "url": null,
                "company": "Trou Blanc",
                "uri": "DeveloppeurWeb_Troublanc",
                "competences": [{
                    "id": 1,
                    "name": "JS",
                    "description": "C",
                    "icon": "js.png",
                    "startPractice": "2020",
                    "url": null
                },{
                    "id": 2,
                    "name": "JS",
                    "description": "C",
                    "icon": "php.png",
                    "startPractice": "2020",
                    "url": null
                },{
                    "id": 3,
                    "name": "JS",
                    "description": "C",
                    "icon": "web.png",
                    "startPractice": "2020",
                    "url": null
                },]
            }, {
                "id": 3,
                "job": "Ramasseur de sel",
                "startPeriod": "4ans",
                "endPeriod": "2023-04-12T00:00:00",
                "description": "Saisonnier dans une saline",
                "url": "rl",
                "company": "companu",
                "uri": "RamasseurSel_Guerande",
                "competences": [{
                    "id": 2,
                    "name": "valeur_Name",
                    "description": "valeur_Description",
                    "icon": "autonomie.png",
                    "startPractice": "2023-02-12T00:00:00",
                    "url": "valeur_url"
                },{
                    "id": 2,
                    "name": "valeur_Name",
                    "description": "valeur_Description",
                    "icon": "evolution.png",
                    "startPractice": "2023-02-12T00:00:00",
                    "url": "valeur_url"
                }, {
                    "id": 2,
                    "name": "valeur_Name",
                    "description": "valeur_Description",
                    "icon": "adaptabilité.png",
                    "startPractice": "2023-02-12T00:00:00",
                    "url": "valeur_url"
                }]
            }],
            "projects": [{
                "id": 1,
                "name": "BICE",
                "uri": "BICE",
                "icon": "BICE.png",
                "date": "2023-04-12T00:00:00",
                "description": null,
                "pageHTML": null,
                "pageMarkDown": null,
                "idProfil": 1,
                "competences": []
            }, {
                "id": 2,
                "name": "Admin Sys",
                "uri": "Admin_Sys",
                "icon": "reseau.png",
                "date": "2023-04-12T00:00:00",
                "description": null,
                "pageHTML": null,
                "pageMarkDown": null,
                "idProfil": 1,
                "competences": []
            }, {
                "id": 3,
                "name": "Portfolio",
                "uri": "Portfolio",
                "icon": "portfolio.png",
                "date": "2023-04-12T00:00:00",
                "description": null,
                "pageHTML": null,
                "pageMarkDown": null,
                "idProfil": 1,
                "competences": []
            }]
        })
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
                                <br/>
                                <h3>{profil.lookingFor}</h3>

                                <br/>

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
