// Abonnement à l'Event source du serveur Node qui envoie les messages (via le bot Discord)
const events = new EventSource('//meauxlotov.alwaysdata.net/events');

const discordMessages = document.createElement('ul');
discordMessages.id = 'discord-messages';

document.body.appendChild(discordMessages);

// À chaque message du serveur …
events.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (!data) return;

  const { userName, userMessage } = data;

  discordMessages.innerHTML += `
  <li>
    <p>
      Question de <strong>${userName}</strong> sur Discord :
      <q>${userMessage}</q>
    </p>
    <a href="https://discord.gg/mxgCGHpKmG" class="join-discord">
      <img src="img/discord-icon.svg" width="32">
      Rejoins le serveur et pose ta question
    </a>
  </li>`;

  // Supprime la notification du DOM lorsque l'animation est terminée
  document.querySelectorAll('#discord-messages li').forEach((li) => {
    li.onanimationend = (event) => li.parentNode.removeChild(li);
  });
};
