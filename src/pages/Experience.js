import React from 'react';
import TitleLine from "../components/all/TitleLine";
import Line from "../components/all/Line";
import {useParams} from "react-router-dom";

const Experience = () => {

    let {uri,experience_uri} = useParams();
    let experience = {
        "id": 4,
        "job": "poste",
        "startPeriod": "2001-01-18T00:00:00",
        "endPeriod": "2023-04-12T00:00:00",
        "description": "escription",
        "url": "rl",
        "company": "companu",
        "logo": "/BICE.png",
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

    if (experience_uri.includes("DeveloppeurCSharp_Stramatel")){
        experience.job = "Développeur C#";
        experience.description = "Développement d'une application tierce à un logiciel de gestion de panneaux d'affichage";
        experience.company = "Stramatel";
        experience.url = "https://www.stramatel.com/";
        experience.logo = "/stramatel.png";
        experience.startPeriod = "mai 2022";
        experience.competences = [
            {
                "id": 2,
                "name": "C#",
                "description": "valeur_Description",
                "icon": "/c-sharp.png",
                "startPractice": "2022",
                "url": "valeur_url"
            },
            {
                "id": 2,
                "name": "XAML#",
                "description": "valeur_Description",
                "icon": "/xaml.png",
                "startPractice": "2022",
                "url": "valeur_url"
            },
            {
                "id": 2,
                "name": "Presentation De Livrable",
                "description": "valeur_Description",
                "icon": "/presentation.png",
                "startPractice": "2019",
                "url": "valeur_url"
            },
        ];
        experience.pageHTML = "<h2 id=\"stramatel\">Stramatel</h2>\n" +
            "<p>Depuis 1981, STRAMATEL conçoit, fabrique et distribue des afficheurs\n" +
            "électroniques à LED. C’est dans une entreprise d’une soixantaine d’employés que\n" +
            "STRAMATEL crée ces panneaux de A à Z, de l’impression de circuit sur des cartes\n" +
            "électroniques, à la pose sur site en passant par la fabrication du support, la\n" +
            "soudure des LED et l’implémentation de récepteurs radio.</p>\n" +
            "<h2 id=\"sav-marketing-prod-meca-b-e-comment-s-organise-stramatel-\">SAV, MARKETING,Prod, Meca, B.E.,Comment s’organise STRAMATEL ?</h2>\n" +
            "<p>L’équipe de marketing est chargée de démarcher ou d’accueillir des clients\n" +
            "(Complexe sportif, association, entreprise...), de prendre en compte leurs\n" +
            "demandes et d’élaborer un premier jet de cahier des charges.\n" +
            "Arrivé au Bureau d’études, BE, siège de conception, le cahier des charges est\n" +
            "étudié par les responsables mécaniques, électronique et informatique qui\n" +
            "discutent de la possibilité technique de réalisation du projet et des éventuelles\n" +
            "modifications à faire. Ce n&#39;est également ici que le secteur informatique\n" +
            "personnifier par Jessy, que le logiciel d’édition des fameuses Template a vu le\n" +
            "jour, le SLV.\n" +
            "Une fois que le cahier des charges respecte les conditions de STRAMATEL et les\n" +
            "exigences du client, c’est l’ouverture d’un\n" +
            "« dossier BE » qui, à termes contiendra,\n" +
            "les critères du client, les différents plans de panneau, pupitre, les moyens à\n" +
            "disposer, aussi bien technique, temporel et économique. L’ouverture d’un tel\n" +
            "dossier rend le BE autonome, chaque responsable de secteur s’occupe de son\n" +
            "domaine d’expertise et redistribue les taches à la prod et à la méca.\n" +
            "Coté atelier, la confection d’un panneau commence par la partie mécanique,\n" +
            "création du squelette des panneaux. La production vient ensuite souder les LED\n" +
            "(pour les panneaux &quot;classiques&quot;). En parallèle, le &quot;four&quot;<em> confectionne la partie\n" +
            "électroniques, créations des cartes, des puces, des résistances...\n" +
            "Le panneau teminé, une fois livré chez un client, une première équipe viens\n" +
            "poser le panneau. Néanmoins, la plupart du temp, une seconde équipe assiste à\n" +
            "la première utilisation du panneau et du pupitre pour conseiller le client.\n" +
            "Même une fois la seconde équipe parties, le client ne reste pas seul. Le SAV</em>\n" +
            "reçoit plusieurs fois jour des retours-client sur des problèmes de panneau, de\n" +
            "pupitre ou de logiciel.\n" +
            "Si certain problème persiste, une équipe peut se rendre sur place, évalue voir\n" +
            "règle le problème. Pour ce qui concerne le logiciel, si vrai bug il y a, le secteur\n" +
            "informatique du BE sors une nouvelle version de ce logiciel en réparant ce bug.</p>\n" +
            "<h2 id=\"ma-mission\">Ma mission</h2>\n" +
            "<p>Comme évoqué précédemment, les nouveaux panneaux offrent la\n" +
            "possibilité d’afficher une large gamme de données tout en les stylisant, grâce à\n" +
            "« moules » sont créer grâce à un logiciel, inventé,\n" +
            "codé et vendu par STRAMATEL, le SLV, le StramatelVideo. A la manière de «\n" +
            "WordPress », le logiciel offre un retour d’affichage du\n" +
            "l’édition des Templates. Ces\n" +
            "panneau, sur un écran d’ordinateur classique. C’est à l’utilisateur de venir glisser-\n" +
            "déposer les types d’élément (conteneur de score, de nom d’équipe, etc...) et les\n" +
            "médias qu’il souhaite afficher, l’utilisateur créer et enregistre sa Template. Il peut\n" +
            "maintenant la réutilisé à chaque évènement ou à chaque match.\n" +
            "Le SLV possèdent au moins autant de version que de retour-client, il est en\n" +
            "constante évolution. Mais la véritable différence, est le faussé entre la version\n" +
            "SLV2 et SLV3. Le SLV3 offre un nouveau design, de nouveaux objets à afficher,\n" +
            "une gestion de media plus simple, un affichage responsif.\n" +
            "Le SLV3 n’est pas juste une mise a jour du SLV2, il a été totalement recodé de A\n" +
            "à Z, le fonctionnement technique n’a rien avoir avec l’ancienne version. C’est là\n" +
            "qu’un problème se pose. Les deux versions sont si différentes que les Template\n" +
            "créer à partir du SLV2 ne sont plus compatible avec le SLV3.\n" +
            "C’est l’objet de mon stage, créer un convertisseur de template SLV2 vers SLV3.</p>\n" +
            "<h2 id=\"organisation-du-travail\">Organisation du travail</h2>\n" +
            "<p>Ce logiciel à été uniquement penser et code par un seul développeur, nous travaillons donc en binôme, sur ce projet. Ce logiciel tierce se basait sur des composant de code du SLV3, je suis donc passé par une grande étape de lecture et de compréhension du code, dont la doc n&#39;existait que dans la tête de mon tuteur... Aprés cette etape de lecture, j&#39;ai creer ne petite applicationWPF permettant de selection les fichier a convertir et une sorte de back qui traiterait chaque fichier et le convertissait à la maniére du SLV3</p>\n" +
            "<h2 id=\"conclusion\">Conclusion</h2>\n" +
            "<h3 id=\"notre-convertisseur-de-template-est-termin-qu-en-faire-\">Notre convertisseur de Template est terminé, qu&#39;en faire?</h3>\n" +
            "<p>Notre convertisseur de Template est terminé, il est capable de convertir a la fois\n" +
            "des template extraite du SLV2 comme de faire la mise à niveau de ce dernier.\n" +
            "C’est à mon tour de présenter le projet au directeur technique (TODO insert les\n" +
            "noms ?), directeur marketing et directeur générale accompagné de mon tuteur.\n" +
            "Cette présentation se déroule dans une salle de réunion avec un vidéo\n" +
            "projecteur connecter à un ordinateur de présentation. Je rappelle l’objectif du\n" +
            "projet, une brève présentation technique et générale suivis d’une démonstration,\n" +
            "qui n’a pas été à la hauteur de mes attentes. En effet la conversion et\n" +
            "l’affichage des image n’as pas fonctionner, probablement du a un chemin\n" +
            "d’accès mal renseigner, ce n’était pas l’ordinateur avec lequel j’avais coder\n" +
            "pendant 4 semaines. Néanmoins l’assistance semble convaincue. Nous discutons\n" +
            "des différentes fonctionnalité qu’offre le convertisseur, répondons au différente\n" +
            "inquiétude etc... Ils ne restent plus qu’à décider de quoi faire de ce projet. Laisser\n" +
            "le bouton du convertisseur disponible a tous, dans le SLV3 ? Vendre une\n" +
            "prestation de mise à niveau avec le logiciel ? Augmenter le prix de la licence du\n" +
            "SLV3 avec l’option de conversion ? Vendre une prestation pour convertir les\n" +
            "Template d’un client ?</p>\n" +
            "<h2 id=\"am-lioration-possible\">Amélioration possible</h2>\n" +
            "<p>Pour aller plus loin dans le logiciel, pour facilité son utilisation nous pouvons\n" +
            "ajouter une simple fonction. Lors de l’import d’un zip, le logiciel détecte\n" +
            "automatiquement s’il provient du SLV2, si c’est le cas il applique tout seul les\n" +
            "fonctions de conversion. Cela évitera un choix et une action supplémentaire à\n" +
            "notre client.</p>\n" +
            "<h2 id=\"retour-sur-experience\">Retour sur experience</h2>\n" +
            "<p>Ce stage en entreprise m’a été très riche en compétence. C’était\n" +
            "pour moi, la découverte du C#, entant que langage mais aussi en\n" +
            "tant que raisonnement.\n" +
            "Même si nous avions déjà abordée la programmation orienté objet avec le\n" +
            "python, ce projet m’a permis d’approfondir de nombreuse compétence, et de\n" +
            "largement dépasser le niveau obtenu en cours. Le fait de partir d’une base déjà\n" +
            "solide de code, notamment pour les classes héritant de\n" +
            "« UserObject » , m’a\n" +
            "donnée une autre vision du développement, et m’a permis de découvrir le réel\n" +
            "avantage de la programmation orienté objets.</p>\n" +
            "<h2 id=\"competences-manquantes\">Competences manquantes</h2>\n" +
            "<p>Ce stage ma énormément fais progresser en développement C#,\n" +
            "« malheureusement » il ne m’a fait progresser qu’en\n" +
            "développement C#. Entant que futur DEVOPS, il me manque de\n" +
            "nombreuse compétence dans le « OPS » , toutes les\n" +
            "connaissances relatives à l’infrastructure machine. Ainsi que\n" +
            "certaine compétence dans le web développement, création de\n" +
            "site web, installation de serveur...</p>\n";
        experience.pageMardown = "## Stramatel\n" +
            "Depuis 1981, STRAMATEL conçoit, fabrique et distribue des afficheurs\n" +
            "électroniques à LED. C’est dans une entreprise d’une soixantaine d’employés que\n" +
            "STRAMATEL crée ces panneaux de A à Z, de l’impression de circuit sur des cartes\n" +
            "électroniques, à la pose sur site en passant par la fabrication du support, la\n" +
            "soudure des LED et l’implémentation de récepteurs radio.\n" +
            "\n" +
            "## SAV, MARKETING,Prod, Meca, B.E.,Comment s’organise STRAMATEL ?\n" +
            "\n" +
            "L’équipe de marketing est chargée de démarcher ou d’accueillir des clients\n" +
            "(Complexe sportif, association, entreprise...), de prendre en compte leurs\n" +
            "demandes et d’élaborer un premier jet de cahier des charges.\n" +
            "Arrivé au Bureau d’études, BE, siège de conception, le cahier des charges est\n" +
            "étudié par les responsables mécaniques, électronique et informatique qui\n" +
            "discutent de la possibilité technique de réalisation du projet et des éventuelles\n" +
            "modifications à faire. Ce n'est également ici que le secteur informatique\n" +
            "personnifier par Jessy, que le logiciel d’édition des fameuses Template a vu le\n" +
            "jour, le SLV.\n" +
            "Une fois que le cahier des charges respecte les conditions de STRAMATEL et les\n" +
            "exigences du client, c’est l’ouverture d’un\n" +
            "« dossier BE » qui, à termes contiendra,\n" +
            "les critères du client, les différents plans de panneau, pupitre, les moyens à\n" +
            "disposer, aussi bien technique, temporel et économique. L’ouverture d’un tel\n" +
            "dossier rend le BE autonome, chaque responsable de secteur s’occupe de son\n" +
            "domaine d’expertise et redistribue les taches à la prod et à la méca.\n" +
            "Coté atelier, la confection d’un panneau commence par la partie mécanique,\n" +
            "création du squelette des panneaux. La production vient ensuite souder les LED\n" +
            "(pour les panneaux \"classiques\"). En parallèle, le \"four\"* confectionne la partie\n" +
            "électroniques, créations des cartes, des puces, des résistances...\n" +
            "Le panneau teminé, une fois livré chez un client, une première équipe viens\n" +
            "poser le panneau. Néanmoins, la plupart du temp, une seconde équipe assiste à\n" +
            "la première utilisation du panneau et du pupitre pour conseiller le client.\n" +
            "Même une fois la seconde équipe parties, le client ne reste pas seul. Le SAV*\n" +
            "reçoit plusieurs fois jour des retours-client sur des problèmes de panneau, de\n" +
            "pupitre ou de logiciel.\n" +
            "Si certain problème persiste, une équipe peut se rendre sur place, évalue voir\n" +
            "règle le problème. Pour ce qui concerne le logiciel, si vrai bug il y a, le secteur\n" +
            "informatique du BE sors une nouvelle version de ce logiciel en réparant ce bug.\n" +
            "\n" +
            "## Ma mission\n" +
            "Comme évoqué précédemment, les nouveaux panneaux offrent la\n" +
            "possibilité d’afficher une large gamme de données tout en les stylisant, grâce à\n" +
            "« moules » sont créer grâce à un logiciel, inventé,\n" +
            "codé et vendu par STRAMATEL, le SLV, le StramatelVideo. A la manière de «\n" +
            "WordPress », le logiciel offre un retour d’affichage du\n" +
            "l’édition des Templates. Ces\n" +
            "panneau, sur un écran d’ordinateur classique. C’est à l’utilisateur de venir glisser-\n" +
            "déposer les types d’élément (conteneur de score, de nom d’équipe, etc...) et les\n" +
            "médias qu’il souhaite afficher, l’utilisateur créer et enregistre sa Template. Il peut\n" +
            "maintenant la réutilisé à chaque évènement ou à chaque match.\n" +
            "Le SLV possèdent au moins autant de version que de retour-client, il est en\n" +
            "constante évolution. Mais la véritable différence, est le faussé entre la version\n" +
            "SLV2 et SLV3. Le SLV3 offre un nouveau design, de nouveaux objets à afficher,\n" +
            "une gestion de media plus simple, un affichage responsif.\n" +
            "Le SLV3 n’est pas juste une mise a jour du SLV2, il a été totalement recodé de A\n" +
            "à Z, le fonctionnement technique n’a rien avoir avec l’ancienne version. C’est là\n" +
            "qu’un problème se pose. Les deux versions sont si différentes que les Template\n" +
            "créer à partir du SLV2 ne sont plus compatible avec le SLV3.\n" +
            "C’est l’objet de mon stage, créer un convertisseur de template SLV2 vers SLV3.\n" +
            "\n" +
            "## Organisation du travail\n" +
            "\n" +
            "Ce logiciel à été uniquement penser et code par un seul développeur, nous travaillons donc en binôme, sur ce projet. Ce logiciel tierce se basait sur des composant de code du SLV3, je suis donc passé par une grande étape de lecture et de compréhension du code, dont la doc n'existait que dans la tête de mon tuteur... Aprés cette etape de lecture, j'ai creer ne petite applicationWPF permettant de selection les fichier a convertir et une sorte de back qui traiterait chaque fichier et le convertissait à la maniére du SLV3\n" +
            "\n" +
            "## Conclusion\n" +
            "### Notre convertisseur de Template est terminé, qu'en faire?\n" +
            "Notre convertisseur de Template est terminé, il est capable de convertir a la fois\n" +
            "des template extraite du SLV2 comme de faire la mise à niveau de ce dernier.\n" +
            "C’est à mon tour de présenter le projet au directeur technique (TODO insert les\n" +
            "noms ?), directeur marketing et directeur générale accompagné de mon tuteur.\n" +
            "Cette présentation se déroule dans une salle de réunion avec un vidéo\n" +
            "projecteur connecter à un ordinateur de présentation. Je rappelle l’objectif du\n" +
            "projet, une brève présentation technique et générale suivis d’une démonstration,\n" +
            "qui n’a pas été à la hauteur de mes attentes. En effet la conversion et\n" +
            "l’affichage des image n’as pas fonctionner, probablement du a un chemin\n" +
            "d’accès mal renseigner, ce n’était pas l’ordinateur avec lequel j’avais coder\n" +
            "pendant 4 semaines. Néanmoins l’assistance semble convaincue. Nous discutons\n" +
            "des différentes fonctionnalité qu’offre le convertisseur, répondons au différente\n" +
            "inquiétude etc... Ils ne restent plus qu’à décider de quoi faire de ce projet. Laisser\n" +
            "le bouton du convertisseur disponible a tous, dans le SLV3 ? Vendre une\n" +
            "prestation de mise à niveau avec le logiciel ? Augmenter le prix de la licence du\n" +
            "SLV3 avec l’option de conversion ? Vendre une prestation pour convertir les\n" +
            "Template d’un client ?\n" +
            "\n" +
            "## Amélioration possible\n" +
            "Pour aller plus loin dans le logiciel, pour facilité son utilisation nous pouvons\n" +
            "ajouter une simple fonction. Lors de l’import d’un zip, le logiciel détecte\n" +
            "automatiquement s’il provient du SLV2, si c’est le cas il applique tout seul les\n" +
            "fonctions de conversion. Cela évitera un choix et une action supplémentaire à\n" +
            "notre client.\n" +
            "\n" +
            "## Retour sur experience\n" +
            "Ce stage en entreprise m’a été très riche en compétence. C’était\n" +
            "pour moi, la découverte du C#, entant que langage mais aussi en\n" +
            "tant que raisonnement.\n" +
            "Même si nous avions déjà abordée la programmation orienté objet avec le\n" +
            "python, ce projet m’a permis d’approfondir de nombreuse compétence, et de\n" +
            "largement dépasser le niveau obtenu en cours. Le fait de partir d’une base déjà\n" +
            "solide de code, notamment pour les classes héritant de\n" +
            "« UserObject » , m’a\n" +
            "donnée une autre vision du développement, et m’a permis de découvrir le réel\n" +
            "avantage de la programmation orienté objets.\n" +
            "\n" +
            "## Competences manquantes\n" +
            "Ce stage ma énormément fais progresser en développement C#,\n" +
            "« malheureusement » il ne m’a fait progresser qu’en\n" +
            "développement C#. Entant que futur DEVOPS, il me manque de\n" +
            "nombreuse compétence dans le « OPS » , toutes les\n" +
            "connaissances relatives à l’infrastructure machine. Ainsi que\n" +
            "certaine compétence dans le web développement, création de\n" +
            "site web, installation de serveur...\n";
    }
    if (experience_uri.includes("DeveloppeurWeb_Troublanc")) {
        experience.job = "Développeur Web";
        experience.description = "Développement d'un site de e-commerce navigable sur une borne d'arcade";
        experience.company = "TrouBlanc";
        experience.url = "https://www.troublanc.com/";
        experience.logo = "/troublanc.jpg";
        experience.startPeriod = "janvier 2023";
        experience.competences = [
            {
                "id": 2,
                "name": "html",
                "description": "valeur_Description",
                "icon": "/html.png",
                "startPractice": "2021",
                "url": "valeur_url"
            },
            {
                "id": 2,
                "name": "css",
                "description": "valeur_Description",
                "icon": "/css.png",
                "startPractice": "2021",
                "url": "valeur_url"
            },
            {
                "id": 2,
                "name": "WordPress",
                "description": "valeur_Description",
                "icon": "/wordpress.png",
                "startPractice": "2021",
                "url": "valeur_url"
            },
            {
                "id": 2,
                "name": "BootStrap",
                "description": "valeur_Description",
                "icon": "/bootstrap.png",
                "startPractice": "2021",
                "url": "valeur_url"
            },
            {
                "id": 2,
                "name": "php",
                "description": "valeur_Description",
                "icon": "/php.png",
                "startPractice": "2022",
                "url": "valeur_url"
            },
            {
                "id": 2,
                "name": "JS",
                "description": "valeur_Description",
                "icon": "/js.png",
                "startPractice": "2019",
                "url": "valeur_url"
            },
            {
                "id": 2,
                "name": "Raspberry",
                "description": "valeur_Description",
                "icon": "/raspberry.png",
                "startPractice": "2019",
                "url": "valeur_url"
            }
        ];
        experience.pageMardown = "## TrouBlanc\n" +
            "\"Un trou blanc, que l’on appelle aussi “fontaine blanche”, serait le\n" +
            "contraire d’un trou noir : si un trou noir est un endroit de l’espace où\n" +
            "la matière est attirée et disparaît, un trou blanc, serait, au contraire,\n" +
            "un endroit où la matière “apparaîtrait”, et d’où elle jaillirait, un peu à\n" +
            "la manière d’une fontaine, émettant de la lumière et de la matière\n" +
            "créative.\"\n" +
            "\n" +
            "Troublanc est une entreprise de reproduction d'œuvre d'art,\n" +
            "en tout genre, de la bd à la peinture en passant par le\n" +
            "collage. Elle propose à tout type d'artiste visuel une\n" +
            "exposition gratuite et libre avec rémunération via un site\n" +
            "web, mais pas seulement...\n" +
            "Leur différence: des bornes électroniques installées dans\n" +
            "des lieux publics et de passage permettant à tout le monde\n" +
            "de feuilleter et commander les œuvres proposée.\n" +
            "À la manière d'une borne d'arcade, cette dernière ouvre et\n" +
            "facilite l'accès à l'art pour tout le monde. Chacun peut faire\n" +
            "défiler les créations grâce à un joystick, les sélectionner,\n" +
            "voir les tailles (A4, A3...), les ajouter au panier et les\n" +
            "commander.\n" +
            "\n" +
            "## La Borne\n" +
            "Comme dit précédemment,\n" +
            "le rôle de ces bornes est de\n" +
            "rendre plus accessible l'art.\n" +
            "Elles seront installées dans\n" +
            "des lieux de passage à la vue\n" +
            "de tous, et permettront au\n" +
            "plus curieux de venir jeter un\n" +
            "œil...\n" +
            "Composée d'un écran et d'un\n" +
            "pupitre de 5 boutons et un\n" +
            "joystick, elle affiche une\n" +
            "réplique du site web.\n" +
            "\n" +
            "La borne doit donc être capable\n" +
            "de se connecter à internet pour\n" +
            "afficher un site web, savoir\n" +
            "interpréter les différentes\n" +
            "actions (bouger le joystick,\n" +
            "appuyer sur un bouton...), comme\n" +
            "pourrait le faire un Raspberry\n" +
            "\n" +
            "## Ma premiére mission, Le Raspberry\n" +
            "Les Raspberry Pi, étant dispatchés dans différents lieux\n" +
            "publics, nous n'avons aucun pouvoir sur l'aléa du direct,\n" +
            "une coupure de courant, un bug, un redémarrage, etc...\n" +
            "J'étais donc chargé de gérer le redemarrage automatique de la Raspberry et le lancement un url configurable (l'url du site de la borne, l'object de ma deuxieme mission...) ainsi que les script de mapping des touche.\n" +
            "\n" +
            "## Ma deuxieme mission, Le site web de la borne\n" +
            "Ce fut ma mission principale lors de ce stage, réalisé le\n" +
            "site web de la borne.\n" +
            "Chronologiquement, j'ai réalisé ce site en 3 étapes...\n" +
            "* Créer le site en dur en HTML, CSS et bootstrap\n" +
            "* Réalisé les différentes animations et créer le panier de\n" +
            "l'utilisateur\n" +
            "* Gérer le mapping des boutons de la borne\n" +
            "Le site comprend 4 sections et seulement 2 pages, une\n" +
            "page principale, une \"homepage\" et une seconde page\n" +
            "\"catalogue\" toujours dans une optique de facilité la\n" +
            "navigation. La homepage recense toute les oeuvre disponnible alorsque la page catalogue liste toute les oeuvre d'un categorie spécifique tel que \"peinture\", \"dessin\", etc...\n" +
            "\n" +
            "\n" +
            "## Le parcours type d'un utilisateur:\n" +
            "Il serait de remarquer la\n" +
            "borne, s'en approcher et se tenter à bouger le joystick qui\n" +
            "sélectionnera l'œuvre suivante ou précédente.\n" +
            "Lors de son premier coup de cœur, il peut appuyer sur le\n" +
            "bouton \"sélectionner\", alors l'œuvre s'affiche en grand.\n" +
            "Toujours satisfait de l'œuvre, il presse le bouton \"cabas\",\n" +
            "qui, après le choix de la taille, l'ajoute à son panier.\n" +
            "Il peut alors valider ses \"courses\" en allant dans le panier et\n" +
            "cliquer sur commander.\n" +
            "Un simple QRcode apparait qui le redirige vers une page de\n" +
            "payement\n" +
            "\n" +
            "## Conclusion\n" +
            "### Retour sur expérience\n" +
            "Ce stage m'a été très riche aussi bien en compétence qu'en\n" +
            "découvert du monde professionnel.\n" +
            "Tout d'abords, le projet que me proposait Alan Ferronnière,\n" +
            "une borne permettant d'ouvrir l'art au grand publique, loin des\n" +
            "musées et des galeries, reste innovateur. Bien que mon projet\n" +
            "était fonctionnel, il restait à travailler, à l'améliorer et le\n" +
            "peaufiner.\n" +
            "Malgré tout, il m'a permis d'apporter un œil nouveau et plus\n" +
            "critique sur le développement web, je sais maintenant qu'il ne\n" +
            "se limite pas à des sites vitrine...\n" +
            "La découverte et l'approfondissement du jQuery et du JS m'a\n" +
            "fait prendre conscience de l'infini de possibilité que je\n" +
            "pouvais faire avec le web.\n" +
            "Bien que je n'en aie pas parlé, j'ai également découvert\n" +
            "WordPress. Effectivement, j'ai intégré le site de la borne à un\n" +
            "sous-thème du site troublanc.com. Et même si ça a été la\n" +
            "partie que j'ai le moins aimée, car c'est celle qui m'a pris plus\n" +
            "de temps à comprendre, c'est une compétence\n" +
            "supplémentaire que je n'aurais jamais développée de mon\n" +
            "plein gré.\n" +
            "C'était aussi pour moi la première fois que je vois un\n" +
            "Raspberry de mes yeux. Et je me rends compte encore une\n" +
            "fois de toute la puissance de ces petites cartes.\n" +
            "Au-delà des nombreuses compétences que j'ai acquises, j'ai\n" +
            "découvert un monde de l'entreprise un peu particulier et loin\n" +
            "des grandes GAFA. J'ai passé mon stage au MyDil (laboratoire\n" +
            "informatique de l'epsi) à côté de mes collègues de classe.\n" +
            "Dans une ambiance plus \"start-up\". Avec un rapport direct\n" +
            "avec le directeur, Alan Ferronnière.\n" +
            "Encore un grand merci de m'avoir ouvert les porte de\n" +
            "Troublanc";
        experience.pageHTML = "<h2 id=\"troublanc\">TrouBlanc</h2>\n" +
            "<p>&quot;Un trou blanc, que l’on appelle aussi “fontaine blanche”, serait le\n" +
            "contraire d’un trou noir : si un trou noir est un endroit de l’espace où\n" +
            "la matière est attirée et disparaît, un trou blanc, serait, au contraire,\n" +
            "un endroit où la matière “apparaîtrait”, et d’où elle jaillirait, un peu à\n" +
            "la manière d’une fontaine, émettant de la lumière et de la matière\n" +
            "créative.&quot;</p>\n" +
            "<p>Troublanc est une entreprise de reproduction d&#39;œuvre d&#39;art,\n" +
            "en tout genre, de la bd à la peinture en passant par le\n" +
            "collage. Elle propose à tout type d&#39;artiste visuel une\n" +
            "exposition gratuite et libre avec rémunération via un site\n" +
            "web, mais pas seulement...\n" +
            "Leur différence: des bornes électroniques installées dans\n" +
            "des lieux publics et de passage permettant à tout le monde\n" +
            "de feuilleter et commander les œuvres proposée.\n" +
            "À la manière d&#39;une borne d&#39;arcade, cette dernière ouvre et\n" +
            "facilite l&#39;accès à l&#39;art pour tout le monde. Chacun peut faire\n" +
            "défiler les créations grâce à un joystick, les sélectionner,\n" +
            "voir les tailles (A4, A3...), les ajouter au panier et les\n" +
            "commander.</p>\n" +
            "<h2 id=\"la-borne\">La Borne</h2>\n" +
            "<p>Comme dit précédemment,\n" +
            "le rôle de ces bornes est de\n" +
            "rendre plus accessible l&#39;art.\n" +
            "Elles seront installées dans\n" +
            "des lieux de passage à la vue\n" +
            "de tous, et permettront au\n" +
            "plus curieux de venir jeter un\n" +
            "œil...\n" +
            "Composée d&#39;un écran et d&#39;un\n" +
            "pupitre de 5 boutons et un\n" +
            "joystick, elle affiche une\n" +
            "réplique du site web.</p>\n" +
            "<p>La borne doit donc être capable\n" +
            "de se connecter à internet pour\n" +
            "afficher un site web, savoir\n" +
            "interpréter les différentes\n" +
            "actions (bouger le joystick,\n" +
            "appuyer sur un bouton...), comme\n" +
            "pourrait le faire un Raspberry</p>\n" +
            "<h2 id=\"ma-premi-re-mission-le-raspberry\">Ma premiére mission, Le Raspberry</h2>\n" +
            "<p>Les Raspberry Pi, étant dispatchés dans différents lieux\n" +
            "publics, nous n&#39;avons aucun pouvoir sur l&#39;aléa du direct,\n" +
            "une coupure de courant, un bug, un redémarrage, etc...\n" +
            "J&#39;étais donc chargé de gérer le redemarrage automatique de la Raspberry et le lancement un url configurable (l&#39;url du site de la borne, l&#39;object de ma deuxieme mission...) ainsi que les script de mapping des touche.</p>\n" +
            "<h2 id=\"ma-deuxieme-mission-le-site-web-de-la-borne\">Ma deuxieme mission, Le site web de la borne</h2>\n" +
            "<p>Ce fut ma mission principale lors de ce stage, réalisé le\n" +
            "site web de la borne.\n" +
            "Chronologiquement, j&#39;ai réalisé ce site en 3 étapes...</p>\n" +
            "<ul>\n" +
            "<li>Créer le site en dur en HTML, CSS et bootstrap</li>\n" +
            "<li>Réalisé les différentes animations et créer le panier de\n" +
            "l&#39;utilisateur</li>\n" +
            "<li>Gérer le mapping des boutons de la borne\n" +
            "Le site comprend 4 sections et seulement 2 pages, une\n" +
            "page principale, une &quot;homepage&quot; et une seconde page\n" +
            "&quot;catalogue&quot; toujours dans une optique de facilité la\n" +
            "navigation. La homepage recense toute les oeuvre disponnible alorsque la page catalogue liste toute les oeuvre d&#39;un categorie spécifique tel que &quot;peinture&quot;, &quot;dessin&quot;, etc...</li>\n" +
            "</ul>\n" +
            "<h2 id=\"le-parcours-type-d-un-utilisateur-\">Le parcours type d&#39;un utilisateur:</h2>\n" +
            "<p>Il serait de remarquer la\n" +
            "borne, s&#39;en approcher et se tenter à bouger le joystick qui\n" +
            "sélectionnera l&#39;œuvre suivante ou précédente.\n" +
            "Lors de son premier coup de cœur, il peut appuyer sur le\n" +
            "bouton &quot;sélectionner&quot;, alors l&#39;œuvre s&#39;affiche en grand.\n" +
            "Toujours satisfait de l&#39;œuvre, il presse le bouton &quot;cabas&quot;,\n" +
            "qui, après le choix de la taille, l&#39;ajoute à son panier.\n" +
            "Il peut alors valider ses &quot;courses&quot; en allant dans le panier et\n" +
            "cliquer sur commander.\n" +
            "Un simple QRcode apparait qui le redirige vers une page de\n" +
            "payement</p>\n" +
            "<h2 id=\"conclusion\">Conclusion</h2>\n" +
            "<h3 id=\"retour-sur-exp-rience\">Retour sur expérience</h3>\n" +
            "<p>Ce stage m&#39;a été très riche aussi bien en compétence qu&#39;en\n" +
            "découvert du monde professionnel.\n" +
            "Tout d&#39;abords, le projet que me proposait Alan Ferronnière,\n" +
            "une borne permettant d&#39;ouvrir l&#39;art au grand publique, loin des\n" +
            "musées et des galeries, reste innovateur. Bien que mon projet\n" +
            "était fonctionnel, il restait à travailler, à l&#39;améliorer et le\n" +
            "peaufiner.\n" +
            "Malgré tout, il m&#39;a permis d&#39;apporter un œil nouveau et plus\n" +
            "critique sur le développement web, je sais maintenant qu&#39;il ne\n" +
            "se limite pas à des sites vitrine...\n" +
            "La découverte et l&#39;approfondissement du jQuery et du JS m&#39;a\n" +
            "fait prendre conscience de l&#39;infini de possibilité que je\n" +
            "pouvais faire avec le web.\n" +
            "Bien que je n&#39;en aie pas parlé, j&#39;ai également découvert\n" +
            "WordPress. Effectivement, j&#39;ai intégré le site de la borne à un\n" +
            "sous-thème du site troublanc.com. Et même si ça a été la\n" +
            "partie que j&#39;ai le moins aimée, car c&#39;est celle qui m&#39;a pris plus\n" +
            "de temps à comprendre, c&#39;est une compétence\n" +
            "supplémentaire que je n&#39;aurais jamais développée de mon\n" +
            "plein gré.\n" +
            "C&#39;était aussi pour moi la première fois que je vois un\n" +
            "Raspberry de mes yeux. Et je me rends compte encore une\n" +
            "fois de toute la puissance de ces petites cartes.\n" +
            "Au-delà des nombreuses compétences que j&#39;ai acquises, j&#39;ai\n" +
            "découvert un monde de l&#39;entreprise un peu particulier et loin\n" +
            "des grandes GAFA. J&#39;ai passé mon stage au MyDil (laboratoire\n" +
            "informatique de l&#39;epsi) à côté de mes collègues de classe.\n" +
            "Dans une ambiance plus &quot;start-up&quot;. Avec un rapport direct\n" +
            "avec le directeur, Alan Ferronnière.\n" +
            "Encore un grand merci de m&#39;avoir ouvert les porte de\n" +
            "Troublanc</p>\n";
    }
    if (experience_uri.includes("RamasseurSel_Guerande")) {
        experience.job = "Ramasseur de sel";
        experience.description = "Porteur-ceuilleur dans les marais salants de Guérande";
        experience.company = "GAEC du Grand Grevin";
        experience.url = "https://artisansdusel.fr/histoire-des-marais-salants-de-guerande";
        experience.logo = "/sel.png";
        experience.startPeriod = "2020, 2021, 2022, 2022";
        experience.competences = [{
            "id": 2,
            "name": "Travail en Autonomie",
            "description": "valeur_Description",
            "icon": "/autonomie.png",
            "startPractice": "2020",
            "url": "valeur_url"
        },{
            "id": 2,
            "name": "Progression",
            "description": "valeur_Description",
            "icon": "/evolution.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "Flexibilité, adaptabilité",
            "description": "valeur_Description",
            "icon": "/adaptabilité.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }]
        experience.pageMardown = "## Marais salant de Guerande\n" +
            "\n" +
            "\n" +
            "2000 ans d’histoire sauvés de justesse !\n" +
            "\n" +
            "Aujourd’hui, les marais salants de Guérande s’étendent sur plus de 2600 hectares entre Terre et Mer. \n" +
            "\n" +
            "Plus de 390 Paludiers exploitent et entretiennent ce lieu unique. \n" +
            "\n" +
            "C’est l’incontournable des amoureux de la nature et de la gastronomie.\n" +
            "Les prémices des marais\n" +
            "\n" +
            "Selon les écrits, le sel de Guérande se récolterait depuis plus de 2000 ans sur notre presqu’île Guérandaise, mais les premiers plans des marais salants remontent au Xème siècle, créé par les moines de l’abbaye de Landévennec. \n" +
            "\n" +
            "Ils ont réalisé ces plans en se basant sur les marées, le vent et le soleil et grâce à leur travail acharné, la récolte de ce précieux sel aussi nommé « or blanc » a fait ainsi connaître Guérande qui est devenu une route commerçante majeure durant le Moyen Âge.\n" +
            "L’âge d’or\n" +
            "\n" +
            "## Au XVIème siècle, \n" +
            "l’essor du commerce maritime a accéléré la construction des œillets qui se chiffraient alors à environ 2500.\n" +
            "\n" +
            "Le sel a apporté une grande prospérité non seulement à la région mais aussi à la Bretagne. \n" +
            "\n" +
            "Ses utilisations étaient multiples et aujourd’hui bien connues: tantôt impôt tantôt conservateur le sel a toujours eu grande importance dans le quotidien de nos “ancêtres”.\n" +
            "L’arrivée du sel industriel\n" +
            "\n" +
            "## Moitié du XIXème siècle, \n" +
            "les salines sont progressivement délaissées à cause de la concurrence massive du sel de mine et du sel méditerranéen raffiné. \n" +
            "\n" +
            "### Le sel de Guérande est également détrôné par le frigo!\n" +
            "\n" +
            "À la fin des années 1960, le Sel de Guérande était tombé en désuétude et les quelques Paludiers arrivaient difficilement à vivre de leur travail. C’était une période difficile pour les travailleurs et travailleuses du sel. Les maigres paies ne suffisaient plus à faire vivre les familles qui délaissaient leurs salines.\n" +
            "\n" +
            "Il a fallu un projet d'aménagement touristique pour faire renaître les marais salants de Guérande, les Paludiers et le produit. \n" +
            "Le projet qui a permis une mobilisation pour une renaissance\n" +
            "\n" +
            "Celui-ci prévoyait la destruction des marais salants pour une vaste « marina » (immeubles avec « pieds dans l'eau », pontons, bassin nautique à flot) ainsi que la construction d'une route à deux fois deux voies entre La Baule et Le Croisic où un grand port de plaisance était prévu. \n" +
            "\n" +
            "## La Baule\n" +
            "La station balnéaire de La Baule aurait ainsi doublé sa surface urbanisée au détriment des marais (donc en s'étendant sur la commune de Guérande) et espérait doubler sa population estivale à l'horizon 1985.\n" +
            "\n" +
            "C’était sans compter la détermination d’une poignée d’Hommes pour ce marais délaissé, et une vision d’avenir alliant écologie et production.\n" +
            "\n" +
            "Grâce à une large mobilisation – paludiers, riverains, scientifiques et défenseurs de l’environnement – le projet est tombé à l’eau et les marais salants ont fini par être classés au niveau national et international pour leur intérêt exceptionnel.\n" +
            "\n" +
            "La filière économique s’est structurée et la qualité exceptionnelle du sel marin, 100 % naturel et récolté à la main, a été reconnue tandis qu’une star faisait son entrée sur la scène gastronomique : la délicate fleur de sel, plébiscitée par des chefs renommés. \n" +
            "Une belle filière reconstruite en 40 ans \n" +
            "\n" +
            "## Le combat\n" +
            "La survie des marais salants est un bel exemple de succès d’un combat juste pour un produit de qualité, totalement naturel.\n" +
            "\n" +
            "En quelques décennies, la production guérandaise a retrouvé ses lettres de noblesse et sa notoriété.\n" +
            "\n" +
            "Aujourd’hui, les marais salant de Guérande abritent environ 50.000 œillets en activité. C’est environ 400 paludiers et 10 négociants, dont nous faisons parti, regroupés autour de notre IGP au sein de l’Aprosela.\n" +
            "Les enjeux à venir pour nous\n" +
            "\n" +
            "Désormais  il s’agit de la santé de la Terre avec l’augmentation du niveau des océans, de celle des Hommes par leur alimentation et de la préservation de nos ressources naturelles.\n"
        experience.pageHTML = "<h2 id=\"marais-salant-de-guerande\">Marais salant de Guerande</h2>\n" +
            "<p>2000 ans d’histoire sauvés de justesse !</p>\n" +
            "<p>Aujourd’hui, les marais salants de Guérande s’étendent sur plus de 2600 hectares entre Terre et Mer. </p>\n" +
            "<p>Plus de 390 Paludiers exploitent et entretiennent ce lieu unique. </p>\n" +
            "<p>C’est l’incontournable des amoureux de la nature et de la gastronomie.\n" +
            "Les prémices des marais</p>\n" +
            "<p>Selon les écrits, le sel de Guérande se récolterait depuis plus de 2000 ans sur notre presqu’île Guérandaise, mais les premiers plans des marais salants remontent au Xème siècle, créé par les moines de l’abbaye de Landévennec. </p>\n" +
            "<p>Ils ont réalisé ces plans en se basant sur les marées, le vent et le soleil et grâce à leur travail acharné, la récolte de ce précieux sel aussi nommé « or blanc » a fait ainsi connaître Guérande qui est devenu une route commerçante majeure durant le Moyen Âge.\n" +
            "L’âge d’or</p>\n" +
            "<h2 id=\"au-xvi-me-si-cle-\">Au XVIème siècle,</h2>\n" +
            "<p>l’essor du commerce maritime a accéléré la construction des œillets qui se chiffraient alors à environ 2500.</p>\n" +
            "<p>Le sel a apporté une grande prospérité non seulement à la région mais aussi à la Bretagne. </p>\n" +
            "<p>Ses utilisations étaient multiples et aujourd’hui bien connues: tantôt impôt tantôt conservateur le sel a toujours eu grande importance dans le quotidien de nos “ancêtres”.\n" +
            "L’arrivée du sel industriel</p>\n" +
            "<h2 id=\"moiti-du-xix-me-si-cle-\">Moitié du XIXème siècle,</h2>\n" +
            "<p>les salines sont progressivement délaissées à cause de la concurrence massive du sel de mine et du sel méditerranéen raffiné. </p>\n" +
            "<h3 id=\"le-sel-de-gu-rande-est-galement-d-tr-n-par-le-frigo-\">Le sel de Guérande est également détrôné par le frigo!</h3>\n" +
            "<p>À la fin des années 1960, le Sel de Guérande était tombé en désuétude et les quelques Paludiers arrivaient difficilement à vivre de leur travail. C’était une période difficile pour les travailleurs et travailleuses du sel. Les maigres paies ne suffisaient plus à faire vivre les familles qui délaissaient leurs salines.</p>\n" +
            "<p>Il a fallu un projet d&#39;aménagement touristique pour faire renaître les marais salants de Guérande, les Paludiers et le produit. \n" +
            "Le projet qui a permis une mobilisation pour une renaissance</p>\n" +
            "<p>Celui-ci prévoyait la destruction des marais salants pour une vaste « marina » (immeubles avec « pieds dans l&#39;eau », pontons, bassin nautique à flot) ainsi que la construction d&#39;une route à deux fois deux voies entre La Baule et Le Croisic où un grand port de plaisance était prévu. </p>\n" +
            "<h2 id=\"la-baule\">La Baule</h2>\n" +
            "<p>La station balnéaire de La Baule aurait ainsi doublé sa surface urbanisée au détriment des marais (donc en s&#39;étendant sur la commune de Guérande) et espérait doubler sa population estivale à l&#39;horizon 1985.</p>\n" +
            "<p>C’était sans compter la détermination d’une poignée d’Hommes pour ce marais délaissé, et une vision d’avenir alliant écologie et production.</p>\n" +
            "<p>Grâce à une large mobilisation – paludiers, riverains, scientifiques et défenseurs de l’environnement – le projet est tombé à l’eau et les marais salants ont fini par être classés au niveau national et international pour leur intérêt exceptionnel.</p>\n" +
            "<p>La filière économique s’est structurée et la qualité exceptionnelle du sel marin, 100 % naturel et récolté à la main, a été reconnue tandis qu’une star faisait son entrée sur la scène gastronomique : la délicate fleur de sel, plébiscitée par des chefs renommés. \n" +
            "Une belle filière reconstruite en 40 ans </p>\n" +
            "<h2 id=\"le-combat\">Le combat</h2>\n" +
            "<p>La survie des marais salants est un bel exemple de succès d’un combat juste pour un produit de qualité, totalement naturel.</p>\n" +
            "<p>En quelques décennies, la production guérandaise a retrouvé ses lettres de noblesse et sa notoriété.</p>\n" +
            "<p>Aujourd’hui, les marais salant de Guérande abritent environ 50.000 œillets en activité. C’est environ 400 paludiers et 10 négociants, dont nous faisons parti, regroupés autour de notre IGP au sein de l’Aprosela.\n" +
            "Les enjeux à venir pour nous</p>\n" +
            "<p>Désormais  il s’agit de la santé de la Terre avec l’augmentation du niveau des océans, de celle des Hommes par leur alimentation et de la préservation de nos ressources naturelles.</p>\n"
    }

    return (
        <div className={"experiencePage"}>
            <TitleLine title={experience.job} width={"25%"}/>

            <div className="cardExperience">
                <img className={"iconExperience"} src={experience.logo} alt=""/>
                <div className={"description"}>
                    <a className={"companyNameExperience"} href={experience.url}
                       target={"_blank"}>{experience.company}</a>
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
            <div className="container" dangerouslySetInnerHTML={{__html: experience.pageHTML}}/>
        </div>
    );


}

export default Experience;


// return (
//     <div className={"experiencePage"}>
//         <TitleLine title={experience.job}/>
//
//         <div className="cardExperience">
//             <img className={"iconExperience"} src={experience.logo} alt=""/>
//             <div className={"description"}>
//                 <a className={"companyNameExperience"} href={experience.url} target={"_blank"}>{experience.company}</a>
//                 <h3>{experience.description}</h3>
//                 <p>{experience.startPeriod}</p>
//                 <Line height={"5px"}/>
//                 <div className={"cardSkillExperience"}>
//                     <ul>
//                         {
//                             experience.competences.map((competence, index) => {
//                                 return (
//                                     <li>
//                                         <div className={"cardSkill"}>
//                                             <img src={competence.icon} alt={competence.name + " logo"}/>
//                                             <span>{competence.name}</span>
//                                             <span>{competence.startPractice}</span>
//                                         </div>
//                                     </li>
//                                 )
//                             })
//                         }
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div className="container" dangerouslySetInnerHTML={{__html: experience.text}}/>
//     </div>
// );