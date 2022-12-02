const events = new EventSource('//meauxlotov.alwaysdata.net/events');

const discordMessages = document.querySelector('#discord-messages');

events.onmessage = (event) => {
  const { userName, userMessage } = JSON.parse(event.data);

  const li = document.createDocumentFragment();
  li.innerHTML = `<li>
    Message de : <strong>${userName}</strong>
    <q>${userMessage}</q>
  </li>`;

  discordMessages.appendChild(li);
};
