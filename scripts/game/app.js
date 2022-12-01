import { scenes } from './scenes.js';

function renderScreen(screen) {

    const html = `<section>
        <div class="question">
            ID de l'écran : ${screen.id}
        </div>
        <div class="characters">
            ${screen.characters.map(character => (
                `Perso : ${character.name}<br>` 
            )).join('')}
        </div>
        ${screen.choice.map(choice => (
            `<button class="button-story" data-target="${choice.target}">${choice.text}</button>`
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