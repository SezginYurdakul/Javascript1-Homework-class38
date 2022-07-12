/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Something unexpected happened. Please try again later.');
}

async function fetchAndPopulatePokemons() {
  const pokemonSelectElement = webElementCreate(
    'select',
    '.container',
    'pokemon-select-list'
  );
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50';
  const getDataFromPokemon = await fetchData(apiUrl);

  getDataFromPokemon.results.forEach((getData) => {
    const pokemonOptionElement = document.createElement('option');
    pokemonOptionElement.textContent = getData.name;
    pokemonSelectElement.appendChild(pokemonOptionElement);
  });
  pokemonSelectElement.addEventListener('change', fetchImage);
}

async function fetchImage(image) {
  if (document.querySelector('img')) {
    document.querySelector('img').remove();
  }

  const imagePath = image.target.value;
  const imageApiUrl = `https://pokeapi.co/api/v2/pokemon/${imagePath}`;
  let data;
  try {
    data = await fetchData(imageApiUrl);
  } catch (error) {
    handleError(error);
  }

  const imgElement = webElementCreate('img', '.container', 'pokemon-img');
  imgElement.src = data.sprites.other['official-artwork'].front_default;
  imgElement.alt = 'pokemon-img';
}

function main() {
  initialPageLoad();
  document
    .querySelector('.get-pokemon-button')
    .addEventListener('click', async () => {
      if (document.querySelector('.pokemon-select-list')) {
        document.querySelector('.pokemon-select-list').remove();
      }
      if (document.querySelector('.pokemon-img')) {
        document.querySelector('.pokemon-img').remove();
      }
      try {
        await fetchAndPopulatePokemons();
      } catch (error) {
        handleError(error);
      }
    });
}

function initialPageLoad() {
  webElementCreate('div', 'body', 'container');
  const btnGetPokemon = webElementCreate(
    'button',
    '.container',
    'get-pokemon-button'
  );
  btnGetPokemon.type = 'button';
  btnGetPokemon.textContent = 'Get Pokemon!';
}
function webElementCreate(tagName, parentName, className) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  document.querySelector(parentName).appendChild(element);
  return element;
}

function handleError(err) {
  const errorMessage = webElementCreate('div', '.container', 'error-message');
  errorMessage.textContent = `Error: ${err.message}`;
}

window.addEventListener('load', main);
