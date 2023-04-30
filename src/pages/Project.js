import React from 'react';
import Line from "../components/all/Line";
import TitleLine from "../components/all/TitleLine";

const Project = () => {

    let projectMarDown = {
        "text": "# BICE\n" +
            "### La Brigade d'Intervention en Condition Extrem \n" +
            "\n" +
            "## Problématique\n" +
            "La difficulté principale pour notre brigade est la gestion du matériel. Nous utilisons beaucoup de\n" +
            "matériel spécifique, avec des règles d’usage strictes permettant de garantir la sécurité de nos\n" +
            "pompiers et des personnes secourues.\n" +
            "\n" +
            "## Objectif\n" +
            "> Réaliser une application de bureau en **WPF** ainsi qu'application web en **PHP Symfony** capable de traiter du fichier CSV obtenu en scannant le matériel, qu'il soit dans le stock principal ou dans le véhicule. Être capable de gérer les véhicules, aussi bien leurs ajouts, leur modification et les suppressions. L'application doit aussi permettre de garder une historique des interventions, savoir quel matériel a été utilisé, quel véhicule et que s'est-il passé...\n" +
            "\n" +
            "## Organisation du projet\n" +
            "> Une base de donnée en mssql-server manipuler avec l'outil **azure data studio** Une API en C# suivant le modèle de couches DAL \"*Data Access Layer*\", BLL \"*Bisness Logic Layer*\", SRV \"*Service*\", DTO \"*Data Transfer Object*\" et API pour définir notre route et les fonctions associées. Nos applications WPF et PHP Symfony se connectent via les routes de notre API\n" +
            "\n" +
            "## Organisation du travail\n" +
            "> Le travail se faisait par équipe de deux. Avec mon camarade Guillaume, nous avons utilisé l'outil azure devops pour syndé otre projet en \"fonctionnalite\" tel que \"gestion des vehicule\", \"insertion d'une lite de materiel\", etc... Chaque fonctinnalité correspond à une branche de notre repo github et chaque merge sur notre branche master à une fonctonnalité finis.\n" +
            "\n" +
            "## Le projet\n" +
            "\n" +
            "### La base de donnée\n" +
            "cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac \n" +
            "\n" +
            "### L'API\n" +
            "cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca\n" +
            "\n" +
            "### Le WPF\n" +
            "cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca\n" +
            "\n" +
            "### Le PHP Symfony\n" +
            "cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca\n" +
            "\n" +
            "## Demos du project\n" +
            "[bears]: https://placebear.com/300/300\n"
    }
    let project = {
        "id": 1,
        "uri": "short_uri_for_project2",
        "name": "BICE",
        "date": "2020-01-01",
        "icon": "/logo192.png",
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
        },{
            "id": 2,
            "name": "valeur_Name",
            "description": "valeur_Description",
            "icon": "/logo192.png",
            "startPractice": "2023-02-12T00:00:00",
            "url": "valeur_url"
        }],
        "desccription": "La brigade d'intervention en condition extrem",
        "text": "<h2 id=\"probl-matique\">Problématique</h2>\n" +
            "<p>La difficulté principale pour notre brigade est la gestion du matériel. Nous utilisons beaucoup de\n" +
            "matériel spécifique, avec des règles d’usage strictes permettant de garantir la sécurité de nos\n" +
            "pompiers et des personnes secourues.</p>\n" +
            "<h2 id=\"objectif\">Objectif</h2>\n" +
            "<blockquote>\n" +
            "<p>Réaliser une application de bureau en <strong>WPF</strong> ainsi qu&#39;application web en <strong>PHP Symfony</strong> capable de traiter du fichier CSV obtenu en scannant le matériel, qu&#39;il soit dans le stock principal ou dans le véhicule. Être capable de gérer les véhicules, aussi bien leurs ajouts, leur modification et les suppressions. L&#39;application doit aussi permettre de garder une historique des interventions, savoir quel matériel a été utilisé, quel véhicule et que s&#39;est-il passé...</p>\n" +
            "</blockquote>\n" +
            "<h2 id=\"organisation-du-projet\">Organisation du projet</h2>\n" +
            "<blockquote>\n" +
            "<p>Une base de donnée en mssql-server manipuler avec l&#39;outil <strong>azure data studio</strong> Une API en C# suivant le modèle de couches DAL &quot;<em>Data Access Layer</em>&quot;, BLL &quot;<em>Bisness Logic Layer</em>&quot;, SRV &quot;<em>Service</em>&quot;, DTO &quot;<em>Data Transfer Object</em>&quot; et API pour définir notre route et les fonctions associées. Nos applications WPF et PHP Symfony se connectent via les routes de notre API</p>\n" +
            "</blockquote>\n" +
            "<h2 id=\"organisation-du-travail\">Organisation du travail</h2>\n" +
            "<blockquote>\n" +
            "<p>Le travail se faisait par équipe de deux. Avec mon camarade Guillaume, nous avons utilisé l&#39;outil azure devops pour syndé otre projet en &quot;fonctionnalite&quot; tel que &quot;gestion des vehicule&quot;, &quot;insertion d&#39;une lite de materiel&quot;, etc... Chaque fonctinnalité correspond à une branche de notre repo github et chaque merge sur notre branche master à une fonctonnalité finis.</p>\n" +
            "</blockquote>\n" +
            "<h2 id=\"le-projet\">Le projet</h2>\n" +
            "<h3 id=\"la-base-de-donn-e\">La base de donnée</h3>\n" +
            "<p>cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacac acacacacacacacacacacacacacacaca cacacacacacacacacac acacacacacacacacacacacac cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac </p>\n" +
            "<h3 id=\"l-api\">L&#39;API</h3>\n" +
            "<p>cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacaca</p>\n" +
            "<h3 id=\"le-wpf\">Le WPF</h3>\n" +
            "<p>cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacaca</p>\n" +
            "<h3 id=\"le-php-symfony\">Le PHP Symfony</h3>\n" +
            "<p>cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacacaca</p>\n" +
            "<h2 id=\"demos-du-project\">Demos du project</h2>\n"
    }


    return (
        <div className={"project"}>

            <TitleLine title={project.name}/>

            <div className="cardProject">
                <img className={"iconProject"} src={project.icon} alt=""/>
                <div className={"description"}>
                    <h3>{project.desccription}</h3>
                    <p>{project.date}</p>
                    <Line height={"5px"}/>
                    <div className={"cardSkillProject"}>
                        <ul>
                            {
                                project.competences.map((competence, index) => {
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
            <div className="container" dangerouslySetInnerHTML={{__html: project.text}}/>
        </div>
    );
};

export default Project;
