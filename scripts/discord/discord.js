const events = new EventSource('//meauxlotov.alwaysdata.net/events');

const discordMessages = document.querySelector('#discord-messages');

console.log(discordMessages)

events.onmessage = (event) => {
  const { userName, userMessage } = JSON.parse(event.data);

  console.log(userName)

  discordMessages.innerHTML+= `<li>
  Message de : <strong>${userName}</strong>
  <q>${userMessage}</q>
</li>`;
};
