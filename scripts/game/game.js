import { scenesLucas } from './scene-lucas.js';
import { scenesAurelie } from './scene-aurelie.js';

import { delegateEventListener } from '../utils/functions.js';

function renderScreen(screen) {
  const html = `
  <section class="persos">
    <img class="perso1" src="${screen.perso1}">
    <img class="perso2" src="${screen.perso2}">
  </section>

  <section class="bubble">

    <div class="question">
      <p>${screen.story}</p>
      <h4>${screen.question}</h4>
    </div>

    <div class="buttons">
    ${screen.choice
      .map((choice) => `<button class="button-story" data-target="${choice.target}">${choice.text}</button>`)
      .join('')}
    </div>
    
  <section>`;

  document.querySelector('#game').innerHTML = html;
}

// Quand on clique sur un bouton de réponse …
delegateEventListener('click', '.button-story', (event) => {
  const element = event.target;

  // Récupère les informations "data-target" de l'élément cliqué
  const target = element.dataset.target;

  // Récupère l'index de la scene correspondant à la target
  const idScene = scenes.findIndex((s) => s.id === target);
  // Re-affiche l'écran correspondant à la scène cliquée
  renderScreen(scenes[idScene]);
});

let scenes = null;

delegateEventListener('click', '.character-story', (event) => {
  const character = event.target.dataset.character; // Récupère l'attribut "data-character"

  switch (character) {
    case 'lucas':
      scenes = scenesLucas;
      break;
    case 'aurelie':
      scenes = scenesAurelie;
      break;
  }

  if (scenes) {
    renderScreen(scenes[0]);
  }
});
