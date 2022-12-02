import { scenesLucas } from './scene-lucas.js';
import { scenesAurelie } from './scene-aurelie.js';

import { delegateEventListener } from '../utils/functions.js';

function renderScreen(screen) {
  const html = `
  <section class="persos ${screen.background}">
    <img draggable="false" class="perso1" src="${screen.perso1}">
    <img draggable="false" class="perso2" src="${screen.perso2}">
  </section>

  <section class="bubble">

    <div class="question">
    </div>

    <div class="buttons">
    </div>
    
  <section>`;

  document.querySelector('#game').innerHTML = html;

  stories = screen.story;
  question = screen.question;
  choices = screen.choice;

  document.addEventListener('click', onStoryClick);
  onStoryClick();
}

// Quand on clique sur un bouton de réponse …
delegateEventListener('click', '.button-story', (event) => {
  const element = event.target;

  // Récupère les informations "data-target" de l'élément cliqué
  const target = element.dataset.target;
  if (target == "JEU") {
    window.location.href = "game.html";
    return
  }

  // Récupère l'index de la scene correspondant à la target
  const idScene = scenes.findIndex((s) => s.id === target);
  // Re-affiche l'écran correspondant à la scène cliquée
  renderScreen(scenes[idScene]);
});

let scenes = null;

// Choix d'un personnage de départ pour démarrer le jeu …
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

let stories = [];
let question = null;
let choices = null;

function onStoryClick(event) {
  // Ajout des paragraphe de story au fur et à mesure
  const questionElement = document.querySelector('#game .question');
  const buttonsElement = document.querySelector('#game .buttons');

  if (!questionElement) return;
  if (stories.length === 0) {
    questionElement.innerHTML += `<h4>${question}</h4>`;
    buttonsElement.innerHTML += `${choices
      .map((choice) => `<button class="button-story" data-target="${choice.target}">${choice.text}</button>`)
      .join('')}`;

    document.removeEventListener('click', onStoryClick);

    return;
  }

  const story = stories.shift();

  questionElement.innerHTML += `<p>${story}</p>`;
}