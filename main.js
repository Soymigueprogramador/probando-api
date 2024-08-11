// Contantes para la api y la cantidad de personajes que vamos a mostrar.
const num = 3; 
const api = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`;

// Funcion asincronica para traer los resultados de la api.
async function fetchCharacters() {
    try {
        const res = await fetch(api);
        const characters = await res.json();
        characters.forEach(character => mostrar(character)); 
    } catch (error) {
        console.error(error);
    }
}

// Funcion que muestra los resultados por pantalla. 
function mostrar(character) {
    // Creamos el contenedor donde se van a mostrar los resultados.
    const cardContainer = document.createElement('div'); 
    cardContainer.classList.add('card-container'); 

    // Definimos las caracteristicas de los resultados que vamos a mostrar por pantalla.
    const quote = document.createElement('p');
    quote.textContent = character.quote;
    const characterName = document.createElement('h2');
    characterName.textContent = character.character;
    const characterImage = document.createElement('img');
    characterImage.src = character.image;
    characterImage.alt = `${character.character} image`;

    // Agregamos los resultados al contenedor
    cardContainer.appendChild(characterName);
    cardContainer.appendChild(characterImage);
    cardContainer.appendChild(quote);

    // Agregamos el contenedor con los resultados y lo mostramos por pantalla.
    document.body.appendChild(cardContainer); 
}

// Llamamos a la funcion
fetchCharacters();