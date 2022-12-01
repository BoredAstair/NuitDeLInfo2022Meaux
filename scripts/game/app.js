import { scenes } from './scenes.js';
import { delegateEventListener } from '../utils/functions.js';

function renderScreen(screen) {
  const html = `
  <section>

    <div class="question">
      Écran : #${screen.id}
      <p>${screen.story}</p>
    </div>

    <div class="characters">
      ${screen.characters.map((character) => `Perso : ${character.name}<br>`).join('')}
    </div>

    ${screen.choice
      .map(
        (choice) =>
          `<button class="button-story" data-explaination="${choice.explaination}" data-target="${choice.target}">${choice.text}</button>`
      )
      .join('')}

    <div id="explaination"></div>
    
  <section>`;

  document.querySelector('#game').innerHTML = html;
}

// Quand on clique sur un bouton de réponse …
delegateEventListener('click', '.button-story', (event) => {
  const element = event.target;

  // Récupère les informations "data-target" et "data-explaination" de l'élément cliqué
  const target = element.dataset.target;
  const explaination = element.dataset.explaination;

  // Affiche l'explication
  showExplaination(explaination, target);

  // Désactive les réponses
  document.querySelectorAll('.button-story').forEach((button) => (button.disabled = true));
});

// Quand on clique sur le bouton continuer …
delegateEventListener('click', '#continue', (event) => {
  const element = event.target;

  // Récupère les informations "data-target" de l'élément cliqué
  const target = element.dataset.target;

  // Récupère l'index de la scene correspondant à la target
  const idScene = scenes.findIndex((s) => s.id === target);
  // Re-affiche l'écran correspondant à la scène cliquée
  renderScreen(scenes[idScene]);
});

// Pour afficher une explication après avoir choisi une réponse
function showExplaination(explaination, target) {
  const explainationElement = document.querySelector('#explaination');

  explainationElement.innerHTML = `
        <p>${explaination}</p>
        <button id="continue" data-target="${target}">Continuer</button>
    `;
}

// Par défaut, scene n°1
renderScreen(scenes[0]);
