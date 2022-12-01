export const scenesLucas = [
  {
    id: 'didacticiel',

    story:
      'Lucas arrive à la soirée avec ses potes, il repère très vite Noémie et lui propose un verre. Quel verre proposer à Noémie ?',

    choice: [
      {
        text: 'Jack Coca',
        target: 'start',
        explaination: 'Vous avez choisi de lui offrir un verre de Jack Coca',
      },
      {
        text: 'Coca Cola',
        target: 'start',
        explaination: 'Vous avez choisi de lui offrir un verre de Coca Cola',
      },
    ],
  },
  // ============================================================================
  {
    id: 'start',
    story:
      "Noémie accepte le verre avec plaisir, ils commencent à discuter, à faire connaissance. Ils dansent enssemble, la tension monte. L'ambiguité ne manque pas. Ils décident donc de s'isoler pour continuer la soirée. Ils rentrent dans la chambre, commencent à se caliner, se déshabiller. Noémie est de plus en plus tactile et lui met la main au paquet.",

    choice: [
      {
        text: "J'accepte les avances",
        target: 'go',
        explaination: "Vous avez choisi d'accepter",
      },
      {
        text: 'Je me sens réticent et stop net Noémie',
        target: 'stop',
        explaination: "Vous avez choisi d'arrêter là",
      },
    ],
  },
  // ============================================================================
  {
    id: 'go',

    story: 'Lorem ispume blabla salle de bain',

    choice: [
      {
        text: 'Aller dans la maison',
        target: 'maison',
        explaination: 'Vous avez cliqué sur maison',
      },
    ],
  },
  {
    id: 'stop',

    story:
      "Noémie est compréhensive. Ils se rhabillent et retournent tranquillement profiter de la fête. Plus tard dans la soirée, il décide d'appeler sa meilleure amie Aurélie afin qu'elle le dépose chez lui en voiture.",
  },
];
