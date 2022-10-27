function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
    </li>
    `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  // const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon));  // simplificando fica a linha de baixo
  // const newList = pokemons.map(convertPokemonToLi);  // para cada item pokemon, vai invocar esta função, sendo desnecessário informar o parâmetro porque seria redundante.
  // const newHtml = newList.join("");  // unindo a função map com a join para simplificar mais ainda
  // const newList = pokemons.map(convertPokemonToLi).join('');
  // pokemonList.innerHTML += newHtml;

  // O resultado do código acima simplificado e não verboso:
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');

});
