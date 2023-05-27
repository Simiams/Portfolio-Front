import React, {useEffect, useState} from 'react';
import Line from "../components/all/Line";
import TitleLine from "../components/all/TitleLine";
import {useParams} from "react-router-dom";
import {getExperienceByUriProfilAndUriProject} from "../services/Project_SRV";

const Project = () => {
    const {uri, project_uri} = useParams();
    let project = {}

    // useEffect(() => {
    //     getExperienceByUriProfilAndUriProject(uri, project_uri).then((p) => {
    //         console.log(p)
    //     });
    // }, [uri]);

    if (project_uri.includes("Admin_Sys")) {
        project.name = "Admin Sys"
        project.icon = "/reseau.png"
        project.date = "2023";
        project.description = "Mise en place d'une infrastructure pour une application C#, un serveur symfony et une base de donnée sous SQL Server"
        project.competences = [{
            "id": 2,
            "name": "Travail en Autonomie",
            "description": "valeur_Description",
            "icon": "/autonomie.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
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
        project.pageMardown = "## Besoin du client\n" + "La société COGIP (COopérative de Gestion Informatique des Procédures) a décidé de\n" + "refondre son site intranet. Pour cela, votre équipe a été mandatée pour mettre en place:\n" + "* DNS interne de l'entreprise pour la zone cogip.fr, qui devra contenir les\n" + "enregistrements suivants:\n" + " * SOA (of course)\n" + " * NS\n" + " * enregistrements A pour le serveur DNS (ex: ns.cogip.fr), le serveur Web (ex:\n" + "www.cogip.fr), la VM Windows, le serveur de base de données (ex:\n" + "sqlserver.cogip.fr), On devra aussi mettre en place un enregistrement CNAME\n" + "intranet.cogip.fr pointant vers www.cogip.fr.\n" + "* DHCP interne\n" + "* Une fois DNS et DHCP fonctionnels, ajoutez une VM DNS/DHCP secondaires.\n" + "* Réseaux internes:\n" + " * Un réseau \"Intranet\" où votre VM Web doit s'exécuter (classique apache+php\n" + "Symfo)\n" + " * Un réseau \"DSI\" où vos serveurs DNS, DHCP doivent s'exécuter.\n" + " * Un réseau \"BDD/Applicatif Windows\" ayant accès à l'ensemble du parc (serveur\n" + "linux SQL server + VM Windows pour applicatif C#)\n" + "\n" + "Bien évidemment, il serait bon de réfléchir à la supervision et au monitoring de tout ce petit\n" + "monde. Il faudra donc décrire (bonus : et mettre en place si les capacités de votre\n" + "laptop/desktop le permettent) quel(s) logiciel(s) vous utiliseriez, quelles métriques vous\n" + "remonteriez des postes clients, du routeur, du(des) serveurs DNS/DHCP, du sql server, etc...\n" + "Dans tous les cas, il vous est aussi demandé de mettre en place les mesures de sécurité\n" + "habituelles (SSH configuré proprement, etc)\n" + "## Requis\n" + "### Réseau\n" + "Il vous faudra trois réseaux différents. Il est recommandé de prendre un bloc quelconque en\n" + "/24 (ex: 10.0.42.0/24) et de le découper en 3 ou 4 sous-réseaux.\n" + "Vous simulerez ces sous réseaux en utilisant des VMnet ou LAN Segments VMWare. Il vous\n" + "faudra bien évidemment un routeur pour interconnecter tout ce beau monde :)\n" + "Toutes les VMs du parc sauf le routeur et la VM DNS/DHCP doivent obtenir leurs\n" + "informations de connexion via DHCP (pensez aux baux statiques pour les VMs sqlserver,\n" + "Web, BDD). Le serveur DNS/DHCP écoutera, lui, sur tous les VMnet/LAN Segments.\n" + "### VMs\n" + "* Réseau DSI: Une VM DNS/DHCP/routeur 1 coeur/512Mo RAM avec une interface\n" + "réseau sur chaque VMNet/LANSegment, Debian, alpine, pfsense, etc\n" + "* Réseau Intranet: VM Windows (applicatif C#, 2Go RAM, 2 coeurs) et BDD Linux +\n" + "SQLServer (Docker, 1.5 à 2Go RAM)\n" + "* Réseau Intranet: Une VM Web 1 coeur/512Mo RAM\n" + "* Réseau DSI bonus: Une VM DNS/DHCP secondaire et/ou supervision\n" + "## Choix des logiciels utilisés.\n" + "### Linux\n" + "* DNS: Bind9, ou unbound (résolveur) + NSD (autoritaire), ou si vous vous sentez,\n" + "powerDNS recursor (récursif) + PowerDNS (autoritaire)\n" + "* DHCP: isc-dhcp-server. \"Hint\" pour le DHCP secondaire: c'est juste un serveur DHCP\n" + "qui répond plus lentement (1000ms de \"delay\" par exemple)\n" + "* SQL Server: Docker :)\n" + "### Windows\n" + "* De quoi faire tourner votre applicatif C# :)\n";
        project.pageHTML = "<h2 id=\"besoin-du-client\">Besoin du client</h2>\n" + "<p>La société COGIP (COopérative de Gestion Informatique des Procédures) a décidé de\n" + "refondre son site intranet. Pour cela, votre équipe a été mandatée pour mettre en place:</p>\n" + "<ul>\n" + "<li>DNS interne de l&#39;entreprise pour la zone cogip.fr, qui devra contenir les\n" + "enregistrements suivants:<ul>\n" + "<li>SOA (of course)</li>\n" + "<li>NS</li>\n" + "<li>enregistrements A pour le serveur DNS (ex: ns.cogip.fr), le serveur Web (ex:\n" + "www.cogip.fr), la VM Windows, le serveur de base de données (ex:\n" + "sqlserver.cogip.fr), On devra aussi mettre en place un enregistrement CNAME\n" + "intranet.cogip.fr pointant vers www.cogip.fr.</li>\n" + "</ul>\n" + "</li>\n" + "<li>DHCP interne</li>\n" + "<li>Une fois DNS et DHCP fonctionnels, ajoutez une VM DNS/DHCP secondaires.</li>\n" + "<li>Réseaux internes:<ul>\n" + "<li>Un réseau &quot;Intranet&quot; où votre VM Web doit s&#39;exécuter (classique apache+php\n" + "Symfo)</li>\n" + "<li>Un réseau &quot;DSI&quot; où vos serveurs DNS, DHCP doivent s&#39;exécuter.</li>\n" + "<li>Un réseau &quot;BDD/Applicatif Windows&quot; ayant accès à l&#39;ensemble du parc (serveur\n" + "linux SQL server + VM Windows pour applicatif C#)</li>\n" + "</ul>\n" + "</li>\n" + "</ul>\n" + "<p>Bien évidemment, il serait bon de réfléchir à la supervision et au monitoring de tout ce petit\n" + "monde. Il faudra donc décrire (bonus : et mettre en place si les capacités de votre\n" + "laptop/desktop le permettent) quel(s) logiciel(s) vous utiliseriez, quelles métriques vous\n" + "remonteriez des postes clients, du routeur, du(des) serveurs DNS/DHCP, du sql server, etc...\n" + "Dans tous les cas, il vous est aussi demandé de mettre en place les mesures de sécurité\n" + "habituelles (SSH configuré proprement, etc)</p>\n" + "<h2 id=\"requis\">Requis</h2>\n" + "<h3 id=\"r-seau\">Réseau</h3>\n" + "<p>Il vous faudra trois réseaux différents. Il est recommandé de prendre un bloc quelconque en\n" + "/24 (ex: 10.0.42.0/24) et de le découper en 3 ou 4 sous-réseaux.\n" + "Vous simulerez ces sous réseaux en utilisant des VMnet ou LAN Segments VMWare. Il vous\n" + "faudra bien évidemment un routeur pour interconnecter tout ce beau monde :)\n" + "Toutes les VMs du parc sauf le routeur et la VM DNS/DHCP doivent obtenir leurs\n" + "informations de connexion via DHCP (pensez aux baux statiques pour les VMs sqlserver,\n" + "Web, BDD). Le serveur DNS/DHCP écoutera, lui, sur tous les VMnet/LAN Segments.</p>\n" + "<h3 id=\"vms\">VMs</h3>\n" + "<ul>\n" + "<li>Réseau DSI: Une VM DNS/DHCP/routeur 1 coeur/512Mo RAM avec une interface\n" + "réseau sur chaque VMNet/LANSegment, Debian, alpine, pfsense, etc</li>\n" + "<li>Réseau Intranet: VM Windows (applicatif C#, 2Go RAM, 2 coeurs) et BDD Linux +\n" + "SQLServer (Docker, 1.5 à 2Go RAM)</li>\n" + "<li>Réseau Intranet: Une VM Web 1 coeur/512Mo RAM</li>\n" + "<li>Réseau DSI bonus: Une VM DNS/DHCP secondaire et/ou supervision</li>" + "</ul> <h2 id=\"choix-des-logiciels-utilis-s-\">Choix des logiciels utilisés.</h2>\n" + "<h3 id=\"linux\">Linux</h3>\n" + "<li>DNS: Bind9, ou unbound (résolveur) + NSD (autoritaire), ou si vous vous sentez,\n" + "powerDNS recursor (récursif) + PowerDNS (autoritaire)</li>\n" + "<li>DHCP: isc-dhcp-server. &quot;Hint&quot; pour le DHCP secondaire: c&#39;est juste un serveur DHCP\n" + "qui répond plus lentement (1000ms de &quot;delay&quot; par exemple)</li>\n" + "<li>SQL Server: Docker :)<h3 id=\"windows\">Windows</h3>\n" + "</li>\n" + "<li>De quoi faire tourner votre applicatif C# :)</li>\n"
    }
    if (project_uri.includes("BICE")) {
        project.name = "BICE";
        project.icon = "/BICE.png";
        project.date = "2023";
        project.description = "Mise en place d'un application lourde et web pour la gestion de materiel, de vehicule et d'intervention de la Brigade d'Intervention en Condition Extreme";
        project.competences = [{
            "id": 2,
            "name": "Travail en Groupe",
            "description": "valeur_Description",
            "icon": "/travail_groupe.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "C#",
            "description": "valeur_Description",
            "icon": "/c-sharp.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "PHP Symfony",
            "description": "valeur_Description",
            "icon": "/symfony.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "WPF",
            "description": "valeur_Description",
            "icon": "/WPF.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "Azure data studio",
            "description": "valeur_Description",
            "icon": "/azure_devops.webp",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "Git",
            "description": "valeur_Description",
            "icon": "/git.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }]
        project.pageMardown = "## Cahier des Charges\n" + "La BICE est une brigade expérimentale des pompiers polyvalents, chargée d’intervenir en conditions\n" + "extrêmes.\n" + "Aujourd’hui, plusieurs brigades existent déjà, spécialisées aux conditions de montagnes, aux\n" + "interventions en milieu aquatique, etc... Mais Aucune brigade polyvalente pouvant être déployée\n" + "rapidement n’existe.\n" + "La B.I.C.E. doit répondre à ce besoin. Elle est testée actuellement dans notre S.D.I.S. (Service\n" + "Départemental d’Incendie et de Secours)\n" + "\n" + "### Problématique\n" + "La difficulté principale pour notre brigade est la gestion du matériel. Nous utilisons beaucoup de\n" + "matériel spécifique, avec des règles d’usage strictes permettant de garantir la sécurité de nos\n" + "pompiers et des personnes secourues.\n" + "Contexte d’utilisation\n" + "Aujourd’hui, le stock de matériel et sa gestion est gérée manuellement dans des fichiers excel. C’est\n" + "long et fastidieux et mobilise un de nos pompiers à temps plein.\n" + "\n" + "### Matériel\n" + "Chaque matériel (corde, mousqueton, casque, détendeur,....) est identifié de façon unique par un\n" + "code barre collé ou gravé sur l’objet.\n" + "En fonction du matériel, il peut y avoir des règles d’utilisation (aucune, une, deux ou les 3) :\n" + "* Un nombre maximum d’utilisations\n" + "* Une date d’expiration au-delà de laquelle le matériel ne doit plus être utilisé\n" + "* Une date de contrôle obligatoire (si la date est dépassée, l’objet doit être contrôlé. Il sera\n" + "jeté ou aura une nouvelle date de contrôle attribuée)\n" + "\n" + "### Véhicules\n" + "La brigade dispose de plusieurs véhicules\n" + "On enregistre pour eux une dénomination, un numéro (interne) et son immatriculation.\n" + "\n" + "### Stock matériel\n" + "A un instant T on doit savoir où est un matériel donné. Il peut être :\n" + "* Non stocké (matériel jeté ou perdu)\n" + "* Stocké. Il peut alors être dans le stock général ou déjà préparé dans un des véhicules.\n" + "\n" + "### Historique des interventions\n" + "Nous enregistrons les interventions (date, dénomination et descriptif éventuel). Pour chaque\n" + "intervention, plusieurs véhicules peuvent partir.\n" + "Au retour d’intervention, une partie de leur matériel a été utilisé. Il faut enregistrer cette historique\n" + "d’utilisation. Le matériel non utilisé reste dans le véhicule.Le matériel utilisé peut :\n" + "* être remis en stock général (hors véhicule)\n" + "* être jeté (nombre d’utilisation atteint, date limite dépassée...)\n" + "* être considéré comme perdu s’il était dans le véhicule qui est parti mais n’est pas trouvé au\n" + "retour\n" + "\n" + "## Procédure actuelle\n" + "Le gestionnaire de stock dispose d’une douchette (un lecteur de code barre) lui permettant d’obtenir\n" + "rapidement des fichiers CSV en scannant des étiquettes de matériels.\n" + "Il gère ensuite dans Excel une liste globale du matériel et une liste du matériel rangé dans chaque\n" + "véhicule.\n" + "A chaque retour d’intervention, il scanne, pour chaque véhicule, le matériel qui a été utilisé d’un\n" + "côté, et le matériel non utilisé d’un autre pour obtenir 2 fichiers. La comparaison des deux listes et de\n" + "la liste de ce qui était dans le véhicule à l’origine permet d’identifier le matériel perdu.\n" + "Ces fichiers sont rangés dans un dossier créé manuellement pour l’intervention sur le serveur pour\n" + "conserver l’historique.\n" + "Il gère ensuite manuellement la remise en stock et les règles d’expirations éventuelles.\n" + "## Applications demandés\n" + "### Application de bureau\n" + "Pour l’ordinateur du gestionnaire de stock, vous devez développer une application permettant de\n" + "faciliter les traitements des fichiers CSV obtenus en scannant.\n" + "\n" + "#### Gestion des véhicules\n" + "L’application doit permettre d’ajouter, de modifier et de supprimer des véhicules. Les véhicules qui\n" + "ont été utilisés au moins une fois ne peuvent pas être supprimés pour des raisons d’historique, mais\n" + "juste désactivés.\n" + "\n" + "#### Actualisation du stock matériel\n" + "Cette actualisation permet de mettre à jour le stock de matériel existant pour ajouter du matériel en\n" + "fournissant un fichier CSV.\n" + "Le fichier CVS est plus complexe, il contient toutes les informations suivante :\n" + "* Numéro du matériel (code barre EAN 8 la plupart du temps)\n" + "* La dénomination (ex : Mousqueton VIS 135Kg)\n" + "* La catégorie (ex : GRIMPE)\n" + "* Nombre d’utilisations\n" + "* Nombre d’utilisation limite\n" + "* Date expiration\n" + "* Date prochain contrôle\n" + "Cette mise à jour fonctionne par ajout ou mise à jour (on ne supprime pas ce qui était déjà\n" + "enregistré).\n" + "\n" + "#### Stock véhicule\n" + "En fournissant un fichier CSV de numéros, on doit pouvoir mettre à jour la liste du matériel rangé\n" + "dans un des véhicules. Cette mise à jour fonctionne par remplacement : les matériels du fichier\n" + "remplacent ceux qui étaient dans le véhicule avant (qui sont le cas échéant réaffectés au stock\n" + "général)\n" + "\n" + "#### Retour d’intervention\n" + "L’opérateur génère deux fichiers par véhicule :\n" + "* Un fichier du matériel non utilisé\n" + "* Un fichier du matériel utilisé\n" + "Pour le matériel non utilisé, il est simplement remis en stock dans la voiture (même chose qu’au\n" + "point 3)\n" + "Pour le matériel utilisé, on doit évaluer les règles de gestion du retour :\n" + "* On ajoute une utilisation au matériel\n" + "* Si la date d’utilisation ou le nombre d’utilisation maximum est dépassé, on indique que ce\n" + "matériel doit être jeté.\n" + "* On met à jour l’information de stock (en stock ou pas, dans le stock général)\n" + "* Les articles qui étaient dans le véhicule et qui ne sont présents dans aucun fichiers sont\n" + "considérés comme perdus.\n" + "\n" + "#### Export\n" + "L’application doit permettre d’exporter en CVS la liste du matériel stocké, au format du point 2. Actualisation du stock matériel, en ajoutant une colonne spécifiant éventuellement le véhicule\n" + "dans lequel il est rangé.\n" + "L’application doit également permettre d’exporter la liste du matériel devant être enlevé du stock\n" + "(périmé, nombre d’utilisations dépassé) et la liste du matériel devant être controlé.\n" + "\n" + "## Application web Symfony \n" + "L’application web doit permettre de mieux gérer la saisie et la consultation des interventions en\n" + "cours et de l’historique des interventions.\n" + "\n" + "Le but est que l’opérateur saisisse plus vite une intervention, dès qu’elle commence, et pas\n" + "uniquement à son retour.\n" + "\n" + "Idéalement, l’application sera protégée par un système de login/mot de passe.\n" + "Le premier écran doit permettre de lister les interventions, par ordre inverse de date (les plus\n" + "récentes, potentiellement en cours, en premier).\n" + "On soit ensuite pouvoir accéder au détail qui liste\n" + "les véhicules partis pour cette intervention, et le matériel présent dans chaque véhicule. \n" + "\n" + "Pour une intervention terminée, un indicateur visuel montre si chaque matériel a été utilisé/non utilisé/perdu\n" + "ou cassé pendant cette intervention ou non.\n" + "\n" + "L’application doit ensuite permettre de créer une intervention en saisissant les infos nécessaire et en\n" + "sélectionnant les véhicules qui partent.\n" + "\n" + "L’application doit permettre ensuite de gérer le retour d’intervention, avec la même logique qu’au\n" + "point 4. Retour d’intervention";
        project.pageHTML = "<h2 id=\"cahier-des-charges\">Cahier des Charges</h2>\n" + "<p>La BICE est une brigade expérimentale des pompiers polyvalents, chargée d’intervenir en conditions\n" + "extrêmes.\n" + "Aujourd’hui, plusieurs brigades existent déjà, spécialisées aux conditions de montagnes, aux\n" + "interventions en milieu aquatique, etc... Mais Aucune brigade polyvalente pouvant être déployée\n" + "rapidement n’existe.\n" + "La B.I.C.E. doit répondre à ce besoin. Elle est testée actuellement dans notre S.D.I.S. (Service\n" + "Départemental d’Incendie et de Secours)</p>\n" + "<h3 id=\"probl-matique\">Problématique</h3>\n" + "<p>La difficulté principale pour notre brigade est la gestion du matériel. Nous utilisons beaucoup de\n" + "matériel spécifique, avec des règles d’usage strictes permettant de garantir la sécurité de nos\n" + "pompiers et des personnes secourues.\n" + "Contexte d’utilisation\n" + "Aujourd’hui, le stock de matériel et sa gestion est gérée manuellement dans des fichiers excel. C’est\n" + "long et fastidieux et mobilise un de nos pompiers à temps plein.</p>\n" + "<h3 id=\"mat-riel\">Matériel</h3>\n" + "<p>Chaque matériel (corde, mousqueton, casque, détendeur,....) est identifié de façon unique par un\n" + "code barre collé ou gravé sur l’objet.\n" + "En fonction du matériel, il peut y avoir des règles d’utilisation (aucune, une, deux ou les 3) :</p>\n" + "<ul>\n" + "<li>Un nombre maximum d’utilisations</li>\n" + "<li>Une date d’expiration au-delà de laquelle le matériel ne doit plus être utilisé</li>\n" + "<li>Une date de contrôle obligatoire (si la date est dépassée, l’objet doit être contrôlé. Il sera\n" + "jeté ou aura une nouvelle date de contrôle attribuée)</li>\n" + "</ul>\n" + "<h3 id=\"v-hicules\">Véhicules</h3>\n" + "<p>La brigade dispose de plusieurs véhicules\n" + "On enregistre pour eux une dénomination, un numéro (interne) et son immatriculation.</p>\n" + "<h3 id=\"stock-mat-riel\">Stock matériel</h3>\n" + "<p>A un instant T on doit savoir où est un matériel donné. Il peut être :</p>\n" + "<ul>\n" + "<li>Non stocké (matériel jeté ou perdu)</li>\n" + "<li>Stocké. Il peut alors être dans le stock général ou déjà préparé dans un des véhicules.</li>\n" + "</ul>\n" + "<h3 id=\"historique-des-interventions\">Historique des interventions</h3>\n" + "<p>Nous enregistrons les interventions (date, dénomination et descriptif éventuel). Pour chaque\n" + "intervention, plusieurs véhicules peuvent partir.\n" + "Au retour d’intervention, une partie de leur matériel a été utilisé. Il faut enregistrer cette historique\n" + "d’utilisation. Le matériel non utilisé reste dans le véhicule.Le matériel utilisé peut :</p>\n" + "<ul>\n" + "<li>être remis en stock général (hors véhicule)</li>\n" + "<li>être jeté (nombre d’utilisation atteint, date limite dépassée...)</li>\n" + "<li>être considéré comme perdu s’il était dans le véhicule qui est parti mais n’est pas trouvé au\n" + "retour</li>\n" + "</ul>\n" + "<h2 id=\"proc-dure-actuelle\">Procédure actuelle</h2>\n" + "<p>Le gestionnaire de stock dispose d’une douchette (un lecteur de code barre) lui permettant d’obtenir\n" + "rapidement des fichiers CSV en scannant des étiquettes de matériels.\n" + "Il gère ensuite dans Excel une liste globale du matériel et une liste du matériel rangé dans chaque\n" + "véhicule.\n" + "A chaque retour d’intervention, il scanne, pour chaque véhicule, le matériel qui a été utilisé d’un\n" + "côté, et le matériel non utilisé d’un autre pour obtenir 2 fichiers. La comparaison des deux listes et de\n" + "la liste de ce qui était dans le véhicule à l’origine permet d’identifier le matériel perdu.\n" + "Ces fichiers sont rangés dans un dossier créé manuellement pour l’intervention sur le serveur pour\n" + "conserver l’historique.\n" + "Il gère ensuite manuellement la remise en stock et les règles d’expirations éventuelles.</p>\n" + "<h2 id=\"applications-demand-s\">Applications demandés</h2>\n" + "<h3 id=\"application-de-bureau\">Application de bureau</h3>\n" + "<p>Pour l’ordinateur du gestionnaire de stock, vous devez développer une application permettant de\n" + "faciliter les traitements des fichiers CSV obtenus en scannant.</p>\n" + "<h4 id=\"gestion-des-v-hicules\">Gestion des véhicules</h4>\n" + "<p>L’application doit permettre d’ajouter, de modifier et de supprimer des véhicules. Les véhicules qui\n" + "ont été utilisés au moins une fois ne peuvent pas être supprimés pour des raisons d’historique, mais\n" + "juste désactivés.</p>\n" + "<h4 id=\"actualisation-du-stock-mat-riel\">Actualisation du stock matériel</h4>\n" + "<p>Cette actualisation permet de mettre à jour le stock de matériel existant pour ajouter du matériel en\n" + "fournissant un fichier CSV.\n" + "Le fichier CVS est plus complexe, il contient toutes les informations suivante :</p>\n" + "<ul>\n" + "<li>Numéro du matériel (code barre EAN 8 la plupart du temps)</li>\n" + "<li>La dénomination (ex : Mousqueton VIS 135Kg)</li>\n" + "<li>La catégorie (ex : GRIMPE)</li>\n" + "<li>Nombre d’utilisations</li>\n" + "<li>Nombre d’utilisation limite</li>\n" + "<li>Date expiration</li>\n" + "<li>Date prochain contrôle\n" + "Cette mise à jour fonctionne par ajout ou mise à jour (on ne supprime pas ce qui était déjà\n" + "enregistré).</li>\n" + "</ul>\n" + "<h4 id=\"stock-v-hicule\">Stock véhicule</h4>\n" + "<p>En fournissant un fichier CSV de numéros, on doit pouvoir mettre à jour la liste du matériel rangé\n" + "dans un des véhicules. Cette mise à jour fonctionne par remplacement : les matériels du fichier\n" + "remplacent ceux qui étaient dans le véhicule avant (qui sont le cas échéant réaffectés au stock\n" + "général)</p>\n" + "<h4 id=\"retour-d-intervention\">Retour d’intervention</h4>\n" + "<p>L’opérateur génère deux fichiers par véhicule :</p>\n" + "<ul>\n" + "<li>Un fichier du matériel non utilisé</li>\n" + "<li>Un fichier du matériel utilisé\n" + "Pour le matériel non utilisé, il est simplement remis en stock dans la voiture (même chose qu’au\n" + "point 3)\n" + "Pour le matériel utilisé, on doit évaluer les règles de gestion du retour :</li>\n" + "<li>On ajoute une utilisation au matériel</li>\n" + "<li>Si la date d’utilisation ou le nombre d’utilisation maximum est dépassé, on indique que ce\n" + "matériel doit être jeté.</li>\n" + "<li>On met à jour l’information de stock (en stock ou pas, dans le stock général)</li>\n" + "<li>Les articles qui étaient dans le véhicule et qui ne sont présents dans aucun fichiers sont\n" + "considérés comme perdus.</li>\n" + "</ul>\n" + "<h4 id=\"export\">Export</h4>\n" + "<p>L’application doit permettre d’exporter en CVS la liste du matériel stocké, au format du point 2. Actualisation du stock matériel, en ajoutant une colonne spécifiant éventuellement le véhicule\n" + "dans lequel il est rangé.\n" + "L’application doit également permettre d’exporter la liste du matériel devant être enlevé du stock\n" + "(périmé, nombre d’utilisations dépassé) et la liste du matériel devant être controlé.</p>\n" + "<h2 id=\"application-web-symfony\">Application web Symfony</h2>\n" + "<p>L’application web doit permettre de mieux gérer la saisie et la consultation des interventions en\n" + "cours et de l’historique des interventions.</p>\n" + "<p>Le but est que l’opérateur saisisse plus vite une intervention, dès qu’elle commence, et pas\n" + "uniquement à son retour.</p>\n" + "<p>Idéalement, l’application sera protégée par un système de login/mot de passe.\n" + "Le premier écran doit permettre de lister les interventions, par ordre inverse de date (les plus\n" + "récentes, potentiellement en cours, en premier).\n" + "On soit ensuite pouvoir accéder au détail qui liste\n" + "les véhicules partis pour cette intervention, et le matériel présent dans chaque véhicule. </p>\n" + "<p>Pour une intervention terminée, un indicateur visuel montre si chaque matériel a été utilisé/non utilisé/perdu\n" + "ou cassé pendant cette intervention ou non.</p>\n" + "<p>L’application doit ensuite permettre de créer une intervention en saisissant les infos nécessaire et en\n" + "sélectionnant les véhicules qui partent.</p>\n" + "<p>L’application doit permettre ensuite de gérer le retour d’intervention, avec la même logique qu’au\n" + "point 4. Retour d’intervention</p>\n"
    }
    if (project_uri.includes("Portfolio")) {
        project.name = "Portfolio";
        project.icon = "/pokemon.png";
        project.date = "2023";
        project.description = "Creation de ma vitrine en ligne";
        project.competences = [{
            "id": 2,
            "name": "Travail en Autonomie",
            "description": "valeur_Description",
            "icon": "/autonomie.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "C#",
            "description": "valeur_Description",
            "icon": "/c-sharp.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "ReactJS",
            "description": "valeur_Description",
            "icon": "/react.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "HTML",
            "description": "valeur_Description",
            "icon": "/html.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "Github",
            "description": "valeur_Description",
            "icon": "/github.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }, {
            "id": 2,
            "name": "Créativité",
            "description": "valeur_Description",
            "icon": "/creativite.png",
            "startPractice": "2020",
            "url": "valeur_url"
        }]
        project.pageMardown = "";
        project.pageHTML = ""
    }

    return (<div className={"project"}>

        <TitleLine title={project.name}/>

        <div className="cardProject">
            <img className={"iconProject"} src={project.icon} alt=""/>
            <div className={"description"}>
                <h3>{project.description}</h3>
                <p>{project.date}</p>
                <Line height={"5px"}/>
                <div className={"cardSkillProject"}>
                    <ul>
                        {project.competences.map((competence, index) => {
                            return (<li>
                                <div className={"cardSkill"}>
                                    <img src={competence.icon} alt={competence.name + " logo"}/>
                                    <span>{competence.name}</span>
                                    <span>{competence.startPractice}</span>
                                </div>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
        <div className="pageHTML" dangerouslySetInnerHTML={{__html: project.pageHTML}}/>
    </div>);
};

export default Project;


// let projectMarDown = {
//     "text": "# BICE\n" +
//         "### La Brigade d'Intervention en Condition Extrem \n" +
//         "\n" +
//         "## Problématique\n" +
//         "La difficulté principale pour notre brigade est la gestion du matériel. Nous utilisons beaucoup de\n" +
//         "matériel spécifique, avec des règles d’usage strictes permettant de garantir la sécurité de nos\n" +
//         "pompiers et des personnes secourues.\n" +
//         "\n" +
//         "## Objectif\n" +
//         "> Réaliser une application de bureau en **WPF** ainsi qu'application web en **PHP Symfony** capable de traiter du fichier CSV obtenu en scannant le matériel, qu'il soit dans le stock principal ou dans le véhicule. Être capable de gérer les véhicules, aussi bien leurs ajouts, leur modification et les suppressions. L'application doit aussi permettre de garder une historique des interventions, savoir quel matériel a été utilisé, quel véhicule et que s'est-il passé...\n" +
//         "\n" +
//         "## Organisation du projet\n" +
//         "> Une base de donnée en mssql-server manipuler avec l'outil **azure data studio** Une API en C# suivant le modèle de couches DAL \"*Data Access Layer*\", BLL \"*Bisness Logic Layer*\", SRV \"*Service*\", DTO \"*Data Transfer Object*\" et API pour définir notre route et les fonctions associées. Nos applications WPF et PHP Symfony se connectent via les routes de notre API\n" +
//         "\n" +
//         "## Organisation du travail\n" +
//         "> Le travail se faisait par équipe de deux. Avec mon camarade Guillaume, nous avons utilisé l'outil azure devops pour syndé otre projet en \"fonctionnalite\" tel que \"gestion des vehicule\", \"insertion d'une lite de materiel\", etc... Chaque fonctinnalité correspond à une branche de notre repo github et chaque merge sur notre branche master à une fonctonnalité finis.\n" +
//         "\n" +
//         "## Le projet\n" +
//         "\n" +
//         "### La base de donnée\n" +
//         "cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac \n" +
//         "\n" +
//         "### L'API\n" +
//         "cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca\n" +
//         "\n" +
//         "### Le WPF\n" +
//         "cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca\n" +
//         "\n" +
//         "### Le PHP Symfony\n" +
//         "cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca\n" +
//         "\n" +
//         "## Demos du project\n" +
//         "[bears]: https://placebear.com/300/300\n"
// }
// let project = {
//     "id": 1,
//     "uri": "short_uri_for_project2",
//     "name": "BICE",
//     "date": "2020-01-01",
//     "icon": "/logo192.png",
//     "competences": [{
//         "id": 2,
//         "name": "valeur_Name",
//         "description": "valeur_Description",
//         "icon": "/logo192.png",
//         "startPractice": "2023-02-12T00:00:00",
//         "url": "valeur_url"
//     }, {
//         "id": 2,
//         "name": "valeur_Name",
//         "description": "valeur_Description",
//         "icon": "/logo192.png",
//         "startPractice": "2023-02-12T00:00:00",
//         "url": "valeur_url"
//     }, {
//         "id": 2,
//         "name": "valeur_Name",
//         "description": "valeur_Description",
//         "icon": "/logo192.png",
//         "startPractice": "2023-02-12T00:00:00",
//         "url": "valeur_url"
//     },{
//         "id": 2,
//         "name": "valeur_Name",
//         "description": "valeur_Description",
//         "icon": "/logo192.png",
//         "startPractice": "2023-02-12T00:00:00",
//         "url": "valeur_url"
//     }],
//     "desccription": "La brigade d'intervention en condition extrem",
//     "text": "<h2 id=\"probl-matique\">Problématique</h2>\n" +
//         "<p>La difficulté principale pour notre brigade est la gestion du matériel. Nous utilisons beaucoup de\n" +
//         "matériel spécifique, avec des règles d’usage strictes permettant de garantir la sécurité de nos\n" +
//         "pompiers et des personnes secourues.</p>\n" +
//         "<h2 id=\"objectif\">Objectif</h2>\n" +
//         "<blockquote>\n" +
//         "<p>Réaliser une application de bureau en <strong>WPF</strong> ainsi qu&#39;application web en <strong>PHP Symfony</strong> capable de traiter du fichier CSV obtenu en scannant le matériel, qu&#39;il soit dans le stock principal ou dans le véhicule. Être capable de gérer les véhicules, aussi bien leurs ajouts, leur modification et les suppressions. L&#39;application doit aussi permettre de garder une historique des interventions, savoir quel matériel a été utilisé, quel véhicule et que s&#39;est-il passé...</p>\n" +
//         "</blockquote>\n" +
//         "<h2 id=\"organisation-du-projet\">Organisation du projet</h2>\n" +
//         "<blockquote>\n" +
//         "<p>Une base de donnée en mssql-server manipuler avec l&#39;outil <strong>azure data studio</strong> Une API en C# suivant le modèle de couches DAL &quot;<em>Data Access Layer</em>&quot;, BLL &quot;<em>Bisness Logic Layer</em>&quot;, SRV &quot;<em>Service</em>&quot;, DTO &quot;<em>Data Transfer Object</em>&quot; et API pour définir notre route et les fonctions associées. Nos applications WPF et PHP Symfony se connectent via les routes de notre API</p>\n" +
//         "</blockquote>\n" +
//         "<h2 id=\"organisation-du-travail\">Organisation du travail</h2>\n" +
//         "<blockquote>\n" +
//         "<p>Le travail se faisait par équipe de deux. Avec mon camarade Guillaume, nous avons utilisé l&#39;outil azure devops pour syndé otre projet en &quot;fonctionnalite&quot; tel que &quot;gestion des vehicule&quot;, &quot;insertion d&#39;une lite de materiel&quot;, etc... Chaque fonctinnalité correspond à une branche de notre repo github et chaque merge sur notre branche master à une fonctonnalité finis.</p>\n" +
//         "</blockquote>\n" +
//         "<h2 id=\"le-projet\">Le projet</h2>\n" +
//         "<h3 id=\"la-base-de-donn-e\">La base de donnée</h3>\n" +
//         "<p>cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacac acacacacacacacacacacacacacacaca cacacacacacacacacac acacacacacacacacacacacac cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac </p>\n" +
//         "<h3 id=\"l-api\">L&#39;API</h3>\n" +
//         "<p>cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacaca</p>\n" +
//         "<h3 id=\"le-wpf\">Le WPF</h3>\n" +
//         "<p>cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacaca</p>\n" +
//         "<h3 id=\"le-php-symfony\">Le PHP Symfony</h3>\n" +
//         "<p>cacacacacacacacaca cacacacacacacacacacacacacaca cacacacaca cacacacaca cacacacacacacacacaca cacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacac acacacacacacacacacacacacacacacacacacacacacacacacacacacaca cacacacacacacacacacacacacacacacacacacacacacaca</p>\n" +
//         "<h2 id=\"demos-du-project\">Demos du project</h2>\n"
// }