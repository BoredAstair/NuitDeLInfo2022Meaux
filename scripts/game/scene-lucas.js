export const scenesLucas = [{
    id: 'didacticiel',

    story: [
        'Notre histoire débute une chaude soirée d’été, dans un petit pavillon en région parisienne, où on fête la fin des cours.',
        'Au milieu de la foule de corps et d’émotions, Lucas croise le regard d’une fille posée au minibar, et son coeur s’embrase.',
        'Au bout de cinq bonnes minutes d’hésitation, il trouve le courage d’aller faire connaissance.',
        'Noémie : “Et ben, mieux vaut tard que jamais!"',
        'Lucas : “Hein?”',
        'Noémie : “Ça fait des heures que j’ai cramé que tu me fixais, t’es pas discret, tu sais?”',
        'Noémie : “Bon vas-y, fais ton move.”',
    ],

    question: 'Que propose Lucas ?',

    perso1: '../img/lucas_story.png',
    perso2: '../img/noemie.png',

    background: 'party',

    choice: [{
        text: 'Jack Coca',
        target: 'start',
        explaination: 'Il saisit fermement la bouteille de whisky. Lucas : “Cul sec ou rien.” Noémie : “Ça part.” L’alcool glisse comme papa dans maman.',
    },
    {
        text: 'Coca Cola',
        target: 'start',
        explaination: 'Lucas : “Coca bien frais chakal!” Face à cette référence hasardeuse, Noémie reste de marbre, mais accepte néanmoins le verre.',
    },
    ],
},
// ============================================================================
{
    id: 'start',

    story: [
        'Ne perdant pas le nord, Noémie prend Lucas par le poignet et l’emmène enflammer le dancefloor. ',
        'Leur corps respectifs se rapprochent tels des aimants et un jeu sensuel commence.',
        'Noémie : “Dis, tu veux pas qu’on s’isole”',
        'Lucas : “Rien que nous deux ?"',
        'Noémie amène Lucas dans une chambre, elle commence à retirer son haut, puis son pantalon et vient doucement caresser son intimité.',
        'Lucas : “Oh qu’est-ce que tu fais ?”',
        'Noémie : “Tu n’en as pas envie ?”',
    ],

    question: 'Que décide Lucas ?',

    perso1: '../img/lucas_noemie.png',
    perso2: ' ',

    background: 'room',

    choice: [{
        text: 'Il accepte les avances',
        target: 'go',
        explaination: 'Lucas se laisse aller, et déshabille Noémie à son tour.',
    },
    {
        text: 'Il est réticent et rejette gentiment ses avances',
        target: 'back_home',
        explaination: 'Lucas : “Je suis désolé Noémie mais je préfère pas qu’on le fasse tout de suite” Noémie : “Il n’y a pas de problème, ne t’en fais pas”',
    },
    ],
},
// ============================================================================
{
    id: 'go',

    story: [
        "La situation s'emballe et les deux adolescents commencent à se toucher mutuellement.",
        'Noémie : “Est-ce que tu as un préservatif ?”',
        'Lucas commence à chercher dans ses poches mais se rend compte qu’il n’en a pas.',
    ],

    question: 'Que décide de faire Lucas ?',

    perso1: '../img/lucas_blush.png',
    perso2: '../img/noemie.png',

    background: 'room',

    choice: [{
        text: 'Il décide de pratiquer sans',
        target: 'without',
        explaination: 'Lucas : “Non je n’en ai pas sur moi mais ce n’est pas grave, je me retirerais avant” Noémie : “Okay je te fais confiance”',
    },
    {
        text: 'Lucas va demander à un de ses amis de la soirée s’il n’en a pas un à lui donner.',
        target: 'ask',
        explaination: 'Lucas : “Je n’en ai pas sur moi mais je vais aller demander à un ami. Ne bouge pas, je reviens vite”',
    },
    ],
},
// ============================================================================
{
    id: 'back_home',

    story: [
        'Noémie est compréhensive.',
        'Ils se rhabillent et retournent tranquillement profiter de la fête.',
        "Plus tard dans la soirée, Lucas décide d'appeler sa meilleure amie Aurélie afin qu'elle le dépose chez lui en voiture.",
    ],

    question: ' ',

    perso1: '../img/lucas_story.png',
    perso2: '../img/aurelie_story.png',

    background: 'room',

    choice: [{
        text: 'Update',
        target: 'update',
        explaination: ' ',
    },],
},
// ============================================================================
{
    id: 'without',

    story: [
        'Après avoir fini l’acte, les deux adolescents retournent tranquillement à la fête.',
        'Ensuite Lucas, un peu alcoolisé, demande à sa meilleure amie Aurélie de le déposer chez lui en voiture.',
    ],

    question: ' ',

    perso1: '../img/lucas_story.png',
    perso2: '../img/aurelie_story.png',

    background: 'party',

    choice: [{
        text: 'Update',
        target: 'update_vih',
        explaination: ' ',
    },],
},
// ============================================================================
{
    id: 'ask',

    story: [
        "Lucas se rhabille tranquillement et va demander à son ami Romain s’il n'a pas un préservatif à lui dépanner.",
        'Son ami lui en donne un, et Lucas retourne dans la chambre avec Noémie.',
        'Lucas : “Désolé pour l’attente”',
        'Noémie : “Ne t’en fais pas aha”',
        'Le préservatif en main, Lucas essaye de l’enfiler mais ce n’est pas à sa taille.',
    ],

    question: 'Que décide de faire Lucas ?',

    perso1: '../img/lucas_happy.png',
    perso2: '../img/romain.png',

    background: 'party',

    choice: [{
        text: 'Retirer le préservatif et continuer sans',
        target: 'without',
        explaination: 'Lucas : "Le préservatif me serre trop et puis c’est mieux sans" Noémie : "Oui tu as raison"',
    },
    {
        text: 'Retirer le préservatif et ne pas continuer',
        target: 'stop',
        explaination: 'Lucas : “Le préservatif me serre trop, je préfère qu’on remette ça à plus tard ” Noémie : "Oui pas de problème, on aura d’autres occasions de se revoir',
    },
    ],
},
// ============================================================================
{
    id: 'stop',

    story: [
        'Les deux adolescents se rhabillent et retournent tranquillement profiter de la fête.',
        'Plus tard dans la soirée, Lucas décide de demander à sa meilleure amie Aurélie de le déposer chez lui en voiture.',
    ],

    question: ' ',

    perso1: '../img/lucas_story.png',
    perso2: '../img/aurelie_story.png',

    background: 'party',

    choice: [{
        text: 'Update',
        target: 'update',
        explaination: ' ',
    },],
},
// ============================================================================
{
    id: 'update_vih',

    story: [
        "Plusieurs semaines après, Lucas se rend compte qu'il est de plus en plus malade : il ressent des douleurs musculaires, il a de la fièvre, des maux de tête et est extrêmement fatigué.",
        "Lucas se rend chez un médecin qui, après avoir analysé les symptômes, lui conseille d'aller faire un test de dépistage contre le VIH.",
        "Positif, Lucas devra prendre un traitement à vie afin de survivre à la maladie qui n'est malheureusement pas guérissable de nos jours.",
    ],

    perso1: '../img/lucas_sick.png',
    perso2: ' ',

    background: 'room',

    question: ' ',

    choice: [{
        text: 'Retour au menu jeu',
        target: 'JEU',
        explaination: '',
    }],
},
// ============================================================================
{
    id: 'update',

    story: [
        'Lucas rentre chez lui tranquillement, il va passer une nuit paisible.',
        "Ce qu'il ne sait pas, c'est qu'en évitant l'acte sans préservatif, il a évité une contamination au virus du VIH.",
        'En effet le VIH entrave le fonctionnement et affaiblit le système immunitaire du porteur en infectant les lymphocytes.',
        'Le porteur est donc vulnérable aux autres maladies car il n’a plus ou peu de protection immunitaire.',
    ],

    perso1: '../img/lucas_happy.png',
    perso2: '',

    background: 'room',

    question: ' ',

    choice: [{
        text: 'Retour au menu jeu',
        target: 'JEU',
        explaination: '',
    }],
},
];