export function delegateEventListener(eventName, selector, callback) {
  document.addEventListener(eventName, function (event) {
    // Récupère l'élément cliqué
    const element = event.target;

    // Vérifie si l'élément cliqué est bien un bouton pour continuer
    if (!element.matches(selector)) {
      return;
    }

    callback.call(element, event);
  });
}
