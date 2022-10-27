const pokeApi = {};

// Função que abstrai o consumo do http e retorna o result devidamente consumível
pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error));
};
