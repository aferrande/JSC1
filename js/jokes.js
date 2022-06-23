const dataGET = { 
    method: "GET",
    headers: { "Accept": "application/json" }
}

getNewJoke = () => {
fetch("https://icanhazdadjoke.com/").then(dod => {
    dod.json().then(dataGET => {
        getById("jokeText").innerText = dataGET.joke;
    })
}).catch(err => console.log(err))
}
getNewJoke()