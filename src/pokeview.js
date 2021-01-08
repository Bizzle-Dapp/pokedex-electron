
let {fetchAllPokemon, fetchPokemon} = require('./API/fetchPokemon');

const pokemonImage = document.getElementById('pokemon-image');
const pokemonSelect = document.getElementById('pokemon-select');

const genOneButton = document.getElementById('gen-button-1');
const genTwoButton = document.getElementById('gen-button-2');
const genThreeButton = document.getElementById('gen-button-3');
const genFourButton = document.getElementById('gen-button-4');
const genFiveButton = document.getElementById('gen-button-5');
const genSixButton = document.getElementById('gen-button-6');
const genSevenButton = document.getElementById('gen-button-7');
const genEightButton = document.getElementById('gen-button-8');
const genLabel = document.getElementById('gen-label');

let currentGen = "1";

const init = async () => {
    await populatePokemonSelect();
    pokemonSelect.addEventListener("change", (e) => {
        updatePokemonView(e.target.value);
    })
    
    ///
    /// Event Listener Initialisation
    ///

    genOneButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        genLabel.innerHTML = "Gen 1";
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 1
        populatePokemonSelect(151, 0); // 151 Pokemon in Gen 1
    });
    genTwoButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        genLabel.innerHTML = "Gen 2";
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 2
        populatePokemonSelect(100, 151); // 100 Pokemon in Gen 2
    });
    genThreeButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        genLabel.innerHTML = "Gen 3";
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 3
        populatePokemonSelect(135, 251); // 135 Pokemon in Gen 3
    });
    genFourButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        genLabel.innerHTML = "Gen 4";
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 4
        populatePokemonSelect(107, 386); // 107 Pokemon in Gen 4
    });
    genFiveButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        genLabel.innerHTML = "Gen 5";
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 5
        populatePokemonSelect(156, 493); // 156 Pokemon in Gen 5
    });
    genSixButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        genLabel.innerHTML = "Gen 6";
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 6
        populatePokemonSelect(72, 649); // 72 Pokemon in Gen 6
    });
    genSevenButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        genLabel.innerHTML = "Gen 7";
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 7
        populatePokemonSelect(88, 721); // 88 Pokemon in Gen 7
    });
    genEightButton.addEventListener("click", () => {
        // Clear contexts of pokemonSelect
        let array = pokemonSelect.getElementsByClassName('pokemon-option');
        genLabel.innerHTML = "Gen 8";
        let len = array.length;
        for(let i = 0; i < len; i++)
        {
            pokemonSelect.remove(array.item(i))
        }
        // Add Gen 7
        populatePokemonSelect(88, 809); // 88 Pokemon in Gen 8
    });
    
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


