export const scenes = [
  {
    id: 'maison',

    story: 'Lorem ispume blabla maison',

    characters: [
      { image: 'perso1.jpg', name: 'Michel', text: 'Salut Lucie' },
      { image: 'perso2.jpg', name: 'Lucie', text: 'Salut Michel' },
    ],

    choice: [
      {
        text: 'Aller dans la cuisine',
        target: 'cuisine',
        explaination: 'Vous avez cliqué sur cuisine',
      },
      {
        text: 'Aller dans la maison',
        target: 'maison',
        explaination: 'Vous avez cliqué sur maison',
      },
      {
        text: 'Aller dans la salle dfe bin',
        target: 'sdb',
        explaination: 'Vous avez cliqué sur salle de bain',
      },
    ],
  },
  // ============================================================================
  {
    id: 'cuisine',

    story: 'Lorem ispume blabla cuisine',

    characters: [
      { image: 'perso1.jpg', name: 'Michel', text: 'Salut Aurélien' },
      { image: 'perso3.jpg', name: 'Aurélien', text: 'Salut Michel' },
    ],

    choice: [
      {
        text: 'Aller dans la maison',
        target: 'maison',
        explaination: 'Vous avez cliqué sur maison',
      },
    ],
  },
  // ============================================================================
  {
    id: 'sdb',

    story: 'Lorem ispume blabla salle de bain',

    characters: [{ image: 'perso1.jpg', name: 'Michel', text: 'Salut SALLE DE BAIN' }],

    choice: [
      {
        text: 'Aller dans la maison',
        target: 'maison',
        explaination: 'Vous avez cliqué sur maison',
      },
    ],
  },
];
