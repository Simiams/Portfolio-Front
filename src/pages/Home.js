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
            }, {
                "id": 2,
                "name": "React",
                "description": "React",
                "icon": "react.png",
                "startPractice": "2021",
                "url": null
            }, {
                "id": 3,
                "name": "C#",
                "description": "C",
                "icon": "c-sharp.png",
                "startPractice": "2020",
                "url": null
            }, {
                "id": 4,
                "name": "JS",
                "description": "JS",
                "icon": "js.png",
                "startPractice": "2020",
                "url": null
            }, {
                "id": 5,
                "name": "Python",
                "description": "Python",
                "icon": "python.png",
                "startPractice": "2019",
                "url": null
            }, {
                "id": 6,
                "name": "Linux",
                "description": "Linux",
                "icon": "linux.png",
                "startPractice": "2021",
                "url": null
            }, {
                "id": 7,
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
                }, {
                    "id": 2,
                    "name": "XAML",
                    "description": "valeur_Description",
                    "icon": "/xaml.png",
                    "startPractice": "2022",
                    "url": "valeur_url"
                }, {
                    "id": 2,
                    "name": "Presentation De Livrable",
                    "description": "valeur_Description",
                    "icon": "/presentation.png",
                    "startPractice": "2019",
                    "url": "valeur_url"
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
                }, {
                    "id": 2,
                    "name": "JS",
                    "description": "C",
                    "icon": "php.png",
                    "startPractice": "2020",
                    "url": null
                }, {
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
                }, {
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


                <div className="container">
                    {/*TODO: del this shit*/}
                    <TitleLine title={"BTS SIO/SLAM"}/>
                    <div className="pageHTML" style={{padding: "100px"}}>
                        <p>Le BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et
                            Applications Métiers) est un diplôme de l&#39;enseignement supérieur en France. Il forme des
                            professionnels de l&#39;informatique capables de concevoir, développer et maintenir des
                            solutions logicielles adaptées aux besoins des organisations.</p>
                        <p>Le BTS SIO option SLAM met l&#39;accent sur les aspects liés au développement et à la
                            programmation informatique. Les étudiants acquièrent des compétences dans les langages de
                            programmation, les technologies web, les bases de données, la gestion de projet et la
                            conception de solutions logicielles.</p>
                        <ul>
                            <li><p>Programmation : Les étudiants apprennent les principes de base de la programmation et
                                maîtrisent plusieurs langages de programmation tels que Java, C#, HTML, CSS, JavaScript,
                                SQL, etc. Ils développent des compétences en algorithmique, en résolution de problèmes
                                et en développement d&#39;applications.</p>
                            </li>
                            <li><p>Technologies web : Les étudiants acquièrent des connaissances sur les technologies
                                web et les frameworks utilisés pour le développement d&#39;applications web. Ils
                                apprennent à créer des sites web dynamiques, à gérer les interactions côté client et
                                côté serveur, et à utiliser des outils de développement web.</p>
                            </li>
                            <li><p>Bases de données : Les étudiants sont formés à la conception, à la création et à la
                                gestion de bases de données. Ils apprennent à utiliser des systèmes de gestion de bases
                                de données (SGBD) tels que MySQL, Oracle, ou SQL Server, et à manipuler les données à
                                travers des requêtes SQL.</p>
                            </li>
                            <li><p>Gestion de projet : Les étudiants développent des compétences en gestion de projet
                                informatique. Ils apprennent à analyser les besoins des utilisateurs, à spécifier les
                                fonctionnalités attendues d&#39;un logiciel, à planifier et à coordonner les différentes
                                phases d&#39;un projet.</p>
                            </li>
                            <li><p>Développement d&#39;applications métiers : Les étudiants se familiarisent avec le
                                développement d&#39;applications métiers, c&#39;est-à-dire des solutions logicielles
                                adaptées aux besoins spécifiques d&#39;une entreprise ou d&#39;une organisation. Ils
                                apprennent à concevoir, développer et déployer des applications capables de gérer des
                                processus métiers complexes.</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="container">
                    {/*TODO: del this shit*/}
                    <TitleLine title={"Veille"}/>
                    <div className="pageHTML" style={{padding: " 0 300px"}}>
                        <h2>L'IA</h2>
                        <p>L&#39;IA est une discipline de l&#39;informatique qui vise à développer des systèmes capables
                            de simuler l&#39;intelligence humaine. Elle englobe des domaines tels que
                            l&#39;apprentissage automatique (machine learning), le traitement du langage naturel, la
                            vision par ordinateur, les réseaux neuronaux, etc.</p>
                        <h3 id="applications-de-l-ia">Applications de l&#39;IA</h3>
                        <p>L&#39;IA est utilisée dans de nombreux domaines, tels que la santé, la finance, les
                            transports, la robotique, la sécurité, le marketing, etc. Elle permet d&#39;améliorer les
                            performances des systèmes, de prendre des décisions plus éclairées, d&#39;automatiser des
                            tâches complexes, etc.</p>
                        <h3 id="apprentissage-automatique-machine-learning-">Apprentissage automatique (Machine
                            Learning) :</h3>
                        <p>L&#39;apprentissage automatique est un sous-domaine de l&#39;IA qui concerne les méthodes
                            permettant aux systèmes de s&#39;améliorer automatiquement grâce à l&#39;expérience et aux
                            données. Cela inclut l&#39;apprentissage supervisé, non supervisé et par renforcement.</p>
                        <h3 id="r-seaux-neuronaux-et-deep-learning-">Réseaux neuronaux et Deep Learning :</h3>
                        <p>Les réseaux neuronaux artificiels, inspirés du fonctionnement du cerveau humain, sont devenus
                            une technique clé du domaine de l&#39;IA. Le Deep Learning est une approche qui utilise des
                            réseaux neuronaux profonds pour résoudre des problèmes complexes tels que la reconnaissance
                            d&#39;images, la traduction automatique, etc.</p>
                        <h3 id="traitement-du-langage-naturel-nlp-">Traitement du langage naturel (NLP) :</h3>
                        <p>Le NLP est une branche de l&#39;IA axée sur l&#39;interaction entre les ordinateurs et le
                            langage humain. Il permet aux machines de comprendre, d&#39;interpréter et de générer du
                            langage humain. Les chatbots, les assistants vocaux et la traduction automatique sont des
                            exemples d&#39;applications du NLP.</p>
                        <h3 id="-thique-de-l-ia-">Éthique de l&#39;IA :</h3>
                        <p>Avec l&#39;avancement rapide de l&#39;IA, des questions éthiques et juridiques se posent. La
                            responsabilité des systèmes autonomes, la confidentialité des données, l&#39;impact sur
                            l&#39;emploi et la discrimination algorithmique sont autant de sujets importants à prendre
                            en considération.</p>
                        <h3 id="ia-et-robotique-">IA et robotique :</h3>
                        <p>L&#39;IA joue un rôle crucial dans le domaine de la robotique. Les robots autonomes et les
                            systèmes de contrôle robotiques utilisent des techniques d&#39;IA pour naviguer dans leur
                            environnement, effectuer des tâches complexes et interagir avec les humains de manière plus
                            naturelle.</p>
                        <h3 id="ia-et-internet-des-objets-iot-">IA et Internet des Objets (IoT) :</h3>
                        <p>L&#39;intégration de l&#39;IA avec l&#39;IoT permet de collecter et d&#39;analyser des
                            quantités massives de données provenant d&#39;objets connectés. Cela ouvre de nouvelles
                            possibilités d&#39;automatisation, de prédiction et d&#39;optimisation dans divers domaines,
                            tels que la domotique, l&#39;industrie, l&#39;agriculture, etc.</p>
                        <h3 id="ia-et-v-hicules-autonomes-">IA et véhicules autonomes :</h3>
                        <p>Les véhicules autonomes, tels que les voitures sans conducteur, utilisent des systèmes
                            d&#39;IA avancés pour la perception de l&#39;environnement, la prise de décision et la
                            planification des trajets. L&#39;objectif est d&#39;améliorer la sécurité routière,
                            d&#39;optimiser la consommation d&#39;énergie et de réduire les congestions.</p>
                        <h3 id="d-veloppement-et-outils-de-l-ia-">Développement et outils de l&#39;IA :</h3>
                        <p>Il existe de nombreux frameworks, bibliothèques et langages de programmation dédiés à
                            l&#39;IA. TensorFlow, PyTorch, scikit-learn, Python sont quelques-uns des outils populaires
                            utilisés par les chercheurs et les développeurs pour concevoir et déployer des modèles
                            d&#39;IA.</p>
                        <h3 id="tendances-et-d-fis-de-l-ia-">Tendances et défis de l&#39;IA :</h3>
                        <p>L&#39;IA est en constante évolution, avec de nouvelles techniques, recherches et applications
                            émergentes. Cependant, des défis subsistent, tels que l&#39;interprétabilité des modèles, la
                            disponibilité de données de qualité, l&#39;éthique de l&#39;IA, la sécurité des systèmes
                            d&#39;IA, etc.</p>
                        <p>En conclusion, l&#39;IA est un domaine en plein essor qui offre de nombreuses opportunités et
                            défis. Cette veille technologique vous a permis d&#39;explorer différents aspects de
                            l&#39;IA, de ses applications à ses implications éthiques. En continuant à suivre les
                            avancées dans ce domaine, vous serez en mesure de rester à jour avec les dernières tendances
                            et opportunités dans le domaine de l&#39;IA.</p>
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
