const url = 'https://icanhazdadjoke.com/'

const dataGET = { 
    method: 'GET',
    headers: { 'Accept': 'application/json' }
}

const getNewJoke = () => {
fetch(url, dataGET).then(resp => {
    resp.json().then(dataGET => {
        getById("jokeText").innerText = dataGET.joke;
    })
}).catch(err => console.log(err))
}
getNewJoke()