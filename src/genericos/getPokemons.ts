import axios from "axios"




export const getPokemons = async (pokemonId: number) => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    console.log(resp.data);
    return 1
}