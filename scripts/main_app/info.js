document.addEventListener("DOMContentLoaded", function () {
      fetch('data.json').then(function (response) {
          response.json().then(function (data) {
              data.forEach(function afficheAnalogie(resultat) {
                  document.querySelector('#cat-list').innerHTML += "";
              })
          })
      });