let jokeSetup = document.getElementById('joke-setup');
let jokePunchline = document.getElementById('joke-punchline');

function getRandomJoke() {
  fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(res => res.json())
    .then(res => {
      jokeSetup.innerHTML = res.setup;
      jokePunchline.innerHTML = res.punchline;
    });
}
