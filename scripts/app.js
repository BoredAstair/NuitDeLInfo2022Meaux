import { scenes } from './scenes.js';

function renderScreen(screen) {

    const html = `<section>
        <div class="question">
            ID de l'écran : ${screen.id}
        </div>
        <div class="personnages">
            ${screen.personnages.map(perso => (
        `Perso : ${perso.nom}<br>`
    )).join('')}
        </div>
        ${screen.choix.map(choix => (
        `<button class="button-story" data-target="${choix.target}">${choix.buttonText}</button>`
    )).join('')}
    <section>`;

    document.querySelector('#game').innerHTML = html;
}

document.addEventListener('click', event => {
    const element = event.target;

    if (!element.matches('.button-story')) {
        return;
    }

    const target = element.dataset.target;

    const idScene = scenes.findIndex(s => s.id === target);

    renderScreen(scenes[idScene]);
});

renderScreen(scenes[0]);

// window.renderScreen = renderScreen;
// window.scenes = scenes;