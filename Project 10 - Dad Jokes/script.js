const jokeEl = document.getElementById('.joke');
const jokeBtn = document.getElementById('.jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

/*function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
    .then(response => response.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke;
    })
}*/

async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }


    const jokePromise = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}