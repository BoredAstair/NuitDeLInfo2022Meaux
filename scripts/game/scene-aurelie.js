export const scenesAurelie = [{
  id: 'start',

  story: [
    'Le lendemain d’une soirée, Aurélie se retrouve avec son amie Pauline dans son salon pour discuter de la veille.',
    'Pauline : Ça a été pour ramener Lucas hier ?',
    'Aurélie : Haha il était dans un sale état, va savoir ce qu’il a fait pendant la soirée lui, et toi alors ?',
  ],

  question: 'Que lui pose comme question Aurélie ?',

  perso1: '../img/aurelie_story_aurelie.png',
  perso2: '../img/pauline_story.png',

  background: 'salon',

  choice: [{
    text: 'Lui demander comment était la soirée',
    target: 'discuss',
    explaination: 'Aurélie : Comment s\'est passée ta soirée d\'hier?',
  },
  {
    text: 'Lui demander des nouvelles de sa relation avec son copain',
    target: 'discuss',
    explaination: 'Aurélie : Comment ça va avec Mathieu ?',
  },
  ],
},
// ============================================================================
{
  id: 'discuss',

  story: [
    'Pauline : Ecoute j’ai eu un rapport sexuel avec Mathieu hier soir mais la capote a craqué…',
    'Et j’ai peur des conséquences mais il m’a assuré qu’il s’était retiré avant d’avoir éjaculé.',
    'Je ne sais pas quoi faire Aurélie…'
  ],

  question: 'Que répond Aurélie ?',

  perso1: '../img/aurelie_story_aurelie.png',
  perso2: '../img/pauline_story.png',

  background: 'salon',

  choice: [{
    text: 'Lui conseille de prendre rendez-vous avec un professionnel',
    target: 'pro',
    explaination: 'Aurélie : Tu devrais aller voir un gynécologue',
  },
  {
    text: 'Lui conseille de prendre la pilule',
    target: 'pills',
    explaination: 'Pauline : Je sais pas, ça me fait un peu peur ces médicaments',
  },
  ],
},
// ============================================================================
{
  id: 'pro',

  story: [
    'Aurélie : Tu devrais aller voir un gynécologue.',
    'Pauline : Je suis pas à l’aise qu’un inconnu me voit nue...',
    'Aurélie : C’est important, vraiment, c’est pour des raisons médicales ne t’en fais pas je t’accompagnerais.',
    'Pauline appelle un gynécologue mais il n’y a pas de rendez-vous possible pour aujourd’hui. Elle en prend un la semaine suivante. Il est désormais trop tard pour une pilule du lendemain, qui aurait permis de retarder l’ovulation pour éviter une grossesse.',
    'Après des tests, le gynécologue annonce à Pauline qu’elle est enceinte.',
    'Pauline : Aurélie dis moi ce que je devrais faire ?'
  ],

  question: 'Que répond Aurélie ?',

  perso1: '../img/aurelie_story_aurelie.png',
  perso2: '../img/pauline_story.png',

  background: 'salon',

  choice: [{
    text: 'Lui conseille l’avortement',
    target: 'update',
    explaination: 'Aurélie : Je pense que tu devrais avorter, garder un enfant à notre âge implique de grandes responsabilités.',
  },
  {
    text: 'Lui dis qu’elle se sent prête pour qu’on l’appelle “maman”',
    target: 'update',
    explaination: 'Aurélie : Je pense que tu es assez responsable pour t’occuper d’un enfant',
  },
  ],
},
// ============================================================================
{
  id: 'update',

  story: [
    'Il n’y a pas de bonne réponse.',
    'La décision ne nous appartient pas, elle appartient à Pauline.',
    'Il faut savoir qu’en France le délai légal pour avorter est de 14 semaines et que cet acte médicale est remboursé à 100% par la Sécurité Sociale.',
    'Mais ce qui est le plus important est que la décision n’appartient et ne regarde que la personne concernée.'
  ],

  question: '',

  perso1: '../img/aurelie_story_aurelie.png',
  perso2: '../img/pauline_story.png',

  background: 'salon',

  choice: [{
    text: 'Retour au menu jeu',
    target: 'JEU',
    explaination: '',
  }],
},


// ============================================================================
{
  id: 'pills',

  story: [
    'Aurélie et Pauline continuent de discuter. Aurélie se rend compte qu’il y a un problème entre Pauline et son copain.',
    'Aurélie : Pauline dis moi ce qu’il se passe ?',
    'Pauline : Je te jure, c’est rien! ',
    'Aurélie regarde son amie de manière insistante.',
    'Pauline : Bon hier j’avais pas tellement envie de le faire mais on avait déjà commencé et puis ça reste mon copain donc il me fera pas de mal.'
  ],

  question: 'Que répond Aurélie ?',

  perso1: '../img/aurelie_story_aurelie.png',
  perso2: '../img/pauline_story.png',

  background: 'salon',

  choice: [{
    text: 'Lui demande son état actuel',
    target: 'call',
    explaination: 'Aurélie : Et toi comment tu te sens ?',
  },
  {
    text: 'Lui explique la situation de son point de vue',
    target: 'call',
    explaination: 'Lui explique la situation de son point de vue',
  },
  ],
},

// ============================================================================
{
  id: 'call',

  story: [
    'Aurélie : Ce n’est pas normal Pauline, c’est puni par la loi ce genre d’acte. Si tu as d’autres problèmes de ce genre, n’hésites pas à appeler le 3919, ils sauront t’aider',
    'Pauline : Je te remercie vraiment de m’avoir aidée.'
  ],

  question: '',

  perso1: '../img/aurelie_story_aurelie.png',
  perso2: '../img/pauline_story.png',

  background: 'salon',

  choice: [{
    text: 'Retour au menu jeu',
    target: 'JEU',
    explaination: '',
  }],
},
];