import { getPokemons } from "./genericos/getPokemons";





getPokemons(3)
    .then(resp => console.log(resp))
    .catch(error => console.error(error))
    .finally(() => console.log('fin de getPokemon'))