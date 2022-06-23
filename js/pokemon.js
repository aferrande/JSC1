// const pokemon = { 
//     method: "GET",
//     // headers: { "Accept": "application/json" }
// }

const Reset = () => {
    let pokemonName = getById("pokemonSearch").value;
    if(pokemonName.length === 0){
            getById("pokemon").removeAttribute("style");
            getById("pokemonId").innerText = "";
            getById("pokemonName").innerText = "";
            getById("pokemonHeight").innerText = "";
            getById("pokemonWeight").innerText = "";
            getById("pokemonHp").innerText = "";
            getById("pokemonType").innerText = "";
            getById("pokemonAtk").innerText = "";
            getById("pokemonDef").innerText = "";
            getById("noresult").innerText = "Encontre outros pokemons aqui.";}
}

const getPokemonInfo = () => {
    let pokemonName = getById("pokemonSearch").value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`).then(d => {
            d.json().then(pokemon => 
        {
                getById("pokemon").style.backgroundImage = `url(${pokemon.sprites.other.dream_world.front_default})`;
                getById("pokemonId").innerText = pokemon.id;
                getById("pokemonName").innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                getById("pokemonHeight").innerText = pokemon.height;
                getById("pokemonWeight").innerText = pokemon.weight;
                getById("pokemonHp").innerText = pokemon.stats[0].base_stat;
                getById("pokemonType").innerText = pokemon.types[0].type.name;
                getById("pokemonAtk").innerText = pokemon.stats[1].base_stat;
                getById("pokemonDef").innerText = pokemon.stats[2].base_stat;
                getById("noresult").setAttribute("href", 'https://pokemondb.net/pokedex/national');
                getById("noresult").innerText = "Encontre outros pokemons aqui.";   
                })
            if (pokemonName.length > 0 && getById("pokemon").style.backgroundImage === "") {getById("noresult").innerText = "Pokemon não encontrado. Busque aqui"};
                
            }).catch(err => {console.log(err); })
    Reset()  
}
