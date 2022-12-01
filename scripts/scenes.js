export const scenes = [
  {
    id: "maison",

    personnages: [
      { image: "perso1.jpg", nom: "Michel", texte: "Salut Lucie" },
      { image: "perso2.jpg", nom: "Lucie", texte: "Salut Michel" },
    ],

    choix: [
        { buttonText: "Aller dans la cuisine", target: "cuisine" },
        { buttonText: "Aller dans la maison", target: "maison" },
        { buttonText: "Aller dans la salle dfe bin", target: "sdb" }
    ],

    
  },

  {
    id: "cuisine",

    personnages: [
      { image: "perso1.jpg", nom: "Michel", texte: "Salut Aurélien" },
      { image: "perso3.jpg", nom: "Aurélien", texte: "Salut Michel" },
    ],

    choix: [{ buttonText: "Aller dans la maison", target: "maison" }],
  },
  
  {
    id: "sdb",

    personnages: [
      { image: "perso1.jpg", nom: "Michel", texte: "Salut SALLE DE BAIN" },
    ],

    choix: [{ buttonText: "Aller dans la maison", target: "maison" }],
  },
];
