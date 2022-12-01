export const scenes = [
  {
    id: "maison",

    characters: [
      { image: "perso1.jpg", name: "Michel", text: "Salut Lucie" },
      { image: "perso2.jpg", name: "Lucie", text: "Salut Michel" },
    ],

    choice: [
      { text: "Aller dans la cuisine", target: "cuisine",  },
      { text: "Aller dans la maison", target: "maison" },
      { text: "Aller dans la salle dfe bin", target: "sdb" },
    ],
  },

  {
    id: "cuisine",

    characters: [
      { image: "perso1.jpg", name: "Michel", text: "Salut Aurélien" },
      { image: "perso3.jpg", name: "Aurélien", text: "Salut Michel" },
    ],

    choice: [{ text: "Aller dans la maison", target: "maison" }],
  },

  {
    id: "sdb",

    characters: [
      { image: "perso1.jpg", name: "Michel", text: "Salut SALLE DE BAIN" },
    ],

    choice: [{ text: "Aller dans la maison", target: "maison" }],
  },
];
