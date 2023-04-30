import React, {Component} from 'react';
import Section from "../components/experience/Section";
import SubSection from "../components/experience/SubSection";
import TitleLine from "../components/all/TitleLine";
import Line from "../components/all/Line";

class Experience extends Component {

    render() {
        let experience = {
            "id": 4,
            "job": "poste",
            "startPeriod": "2001-01-18T00:00:00",
            "endPeriod": "2023-04-12T00:00:00",
            "description": "escription",
            "url": "rl",
            "company": "companu",
            "logo": "/pokemon.png",
            "competences": [{
                "id": 2,
                "name": "valeur_Name",
                "description": "valeur_Description",
                "icon": "/logo192.png",
                "startPractice": "2023-02-12T00:00:00",
                "url": "valeur_url"
            }, {
                "id": 2,
                "name": "valeur_Name",
                "description": "valeur_Description",
                "icon": "/logo192.png",
                "startPractice": "2023-02-12T00:00:00",
                "url": "valeur_url"
            }, {
                "id": 2,
                "name": "valeur_Name",
                "description": "valeur_Description",
                "icon": "/logo192.png",
                "startPractice": "2023-02-12T00:00:00",
                "url": "valeur_url"
            }],
            "text": '<h2 id="analyse-des-besoins">Analyse des besoins</h2>\n' +
                '<p>Tout à commencé par un échange avec Cédric Menanteau qui était en charge du site ScratchOverflow pour collecter les demandes.</p>\n' +
                '<h3 id="de-cet-change-2-besoins-apparaissaient-">De cet échange, 2 besoins apparaissaient :</h3>\n' +
                '<pre><code><span class="hljs-keyword">la</span> conception <span class="hljs-keyword">d</span>’un espace <span class="hljs-keyword">d</span>’échange par posts pour les é<span class="hljs-keyword">l</span>èves sous <span class="hljs-keyword">la</span> forme <span class="hljs-keyword">d</span>’un forum\n' +
                '<span class="hljs-keyword">l</span>’amélioration <span class="hljs-keyword">des</span> pages <span class="hljs-keyword">de</span> statistiques du site, <span class="hljs-keyword">qui</span> diffèrent selon les comptes et s’assurer du bon fonctionnement <span class="hljs-keyword">des</span> graphiques.\n' +
                '</code></pre><h2 id="organisation-du-travail">OrGanisation du Travail</h2>\n' +
                '<p>Nous étions 2 sur le projet, une autre élève de l’école travaillait avec moi. Nous étions libre dans notre organisation mais Cédric Menanteau souhaitait avoir eu visuel sur nos avancées donc nous avons décidé de créer un Trello afin de pouvoir découper toutes les tâches à effectuer, voir l’avancement de chacune c’est à dire planifier nos activités. Trello est l’application de gestion de projet Agile.</p>\n' +
                '<p>Nous avons utilisé le tableau de pilotage de projet Kanban qui permet d’avoir des colonnes « A faire », « en cours », « Fait » et assigner chaque tâche à l’une d’entre nous.\n' +
                'Capture d’écran du tableau du Trello</p>\n' +
                '<p>Comme nous étions une petite équipe, nous n’avons pas pratiqué de sprint ou de daily. Mais tout les mercredis et vendredis, nous avions une réunion que nous pourrions comparer à une revue d’itération où Cédric Menanteau jouait le Scrum Master. Lors de cette réunion, nous présentions le travail effectué et nos difficultés.</p>\n' +
                '<p>De plus, nous avons utilisé la solution de versionnement Git pour garder une traçabilité de notre travail ainsi que le dépôt de versionnement en ligne Github. Ainsi nous pouvions travailler en collaboration avec Magalie, avoir accès à notre code source accessible depuis n’importe quelle machine reliée à internet, retourner à de montures antérieures au projet et laisser une trace de notre développement.\n' +
                'Capture d’écran des branches du Git Hub\n' +
                'Modifications de la base de données</p>\n' +
                '<p>Pour la conception du forum, la modification de la base de données était nécessaire.</p>\n' +
                '<p>Sur ce modèle conceptuel de base de données, vous trouverez les parties rajoutées et les tables avec lesquels elles sont en relation. Les tables rajoutées étaient « question_forum » et « reponse_forum ». Leur ajout participe à l’évolution de ScratchOverflow en exploitant les données existantes ainsi que de mettre en place et vérifier les niveaux d’habilitation associés à ce service.\n' +
                'Diagramme de classe partiel de la base de donnée\n' +
                'Tâches effectuées</p>\n' +
                '<p>Pour ma part, j’ai effectué la conception des réponses du forum ainsi que la correction de la page de statistiques du site.</p>\n' +
                '<p>Les formulaires de réponse et leur affichage étaient codés en PHP, HTLM et CSS. Pour le design nous utilisions l’outil Metro 4 et pour rendre le site plus dynamique, nous utilisions la bibliothèque jQuery conformément aux normes et référentiels demandé par notre maître de stage.</p>\n' +
                '<p>Pour les graphiques des pages statistiques était utilisé Charts.js, une bibliothèque\n' +
                'Javascript open-source qui offre huit types de graphiques différents responsive et que\n' +
                'l’on peut animer.\n' +
                'Page de réponse\n' +
                'Capture d’écran d’une question ainsi que des réponses correspondantes du point de vue d’un utilisateur</p>\n' +
                '<p>Pour répondre au besoin j’ai donc créé une nouvelle page lorsque l’on cliquait sur l’une des questions pour afficher la question et les réponses correspondantes comme affiché sur la capture précédente.\n' +
                'La plus grosse difficulté fut de permettre d’afficher les réponses par ordre chronologique ou bien par « Like ». Pour cela j’ai donc utilisé de l’Ajax.\n' +
                'Capture d’écran d’une question ainsi que des réponses correspondantes filtrées par « Like »\n' +
                'Page de réponse coté Administrateur\n' +
                'Capture d’écran d’une question ainsi que des réponses correspondantes du point de vue d’un administrateur</p>\n' +
                '<p>Pour le bon fonctionnement du site, j’ai aussi recréé la même page mais pour les administrateurs pour pouvoir modérer le forum. Ainsi les administrateurs peuvent supprimer, clore un sujet pour empêcher de nouvelles personnes de répondre de nouveau à la question ou bien bloquer une question si la question ou les réponses étaient inappropriées.\n' +
                'Page de statistiques\n' +
                'Capture d’écran de la page de statistiques une fois corrigée</p>\n' +
                '<p>La page de statistiques était déjà existante mais n’était plus fonctionnelle dû à des évolutions du site, j’ai donc corrigé les dysfonctionnements de celle-ci.</p>\n',
        };


        return (
            <div className={"experiencePage"}>
                <TitleLine title={experience.job}/>

                <div className="cardExperience">
                    <img className={"iconExperience"} src={experience.logo} alt=""/>
                    <div className={"description"}>
                        <a className={"companyNameExperience"} href={experience.url} target={"_blank"}>{experience.company}</a>
                        <h3>{experience.description}</h3>
                        <p>{experience.startPeriod}</p>
                        <Line height={"5px"}/>
                        <div className={"cardSkillExperience"}>
                            <ul>
                                {
                                    experience.competences.map((competence, index) => {
                                        return (
                                            <li>
                                                <div className={"cardSkill"}>
                                                    <img src={competence.icon} alt={competence.name + " logo"}/>
                                                    <span>{competence.name}</span>
                                                    <span>{competence.startPractice}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container" dangerouslySetInnerHTML={{__html: experience.text}}/>
            </div>
        );
    }
}

export default Experience;