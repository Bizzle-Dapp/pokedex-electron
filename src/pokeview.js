
let {fetchAllPokemon, fetchPokemon} = require('./API/fetchPokemon');

const pokemonImage = document.getElementById('pokemon-image');
const pokemonSelect = document.getElementById('pokemon-select');

const genOneButton = document.getElementById('gen-button-1');
const genTwoButton = document.getElementById('gen-button-2');


const init = async () => {
    await populatePokemonSelect();
    pokemonSelect.addEventListener("change", (e) => {
        updatePokemonView(e.target.value);
    })
    genOneButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 1
        populatePokemonSelect(151, 0); // 151 Pokemon in Gen 1
    })
    genTwoButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 2
        populatePokemonSelect(100, 151); // 151 Pokemon in Gen 1
    })
}

const populatePokemonSelect = async (limit, offset) => {
    let result = await fetchAllPokemon(limit, offset);
    // console.log(result.toString());
    let pokemon = JSON.parse(result).results;
    // Create blank entry
    let placeholderOption = document.createElement("option");
    placeholderOption.textContent = 'Select...';    
    placeholderOption.value = undefined;
    placeholderOption.className = "pokemon-option";
    pokemonSelect.appendChild(placeholderOption)
    pokemon.map((poke) => {
        let el = document.createElement("option");
        el.textContent = poke.name.toUpperCase();
        el.value = JSON.stringify(poke);
        el.className = "pokemon-option";
        pokemonSelect.appendChild(el);
    });
}

const updatePokemonView = async (selectedPokemon) => {
    if(selectedPokemon === 'undefined') return;
    selectedPokemon = JSON.parse(selectedPokemon)
    let response = await fetchPokemon(selectedPokemon.url)
    // console.log(JSON.parse(response));
    let pokemon = JSON.parse(response); 

    pokemonImage.src = pokemon.sprites.front_default;
}

init();


