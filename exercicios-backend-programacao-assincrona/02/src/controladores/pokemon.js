const {listarPokemons, detalharPokemon} = require('utils-playground')


const exibirPokemons= async (req, res) => {
    const pokemons = await listarPokemons()
    const arrayPokemons = await pokemons.results

    return res.status(200).json(arrayPokemons)
}

const pokemonDetalhes = async (req, res) => {
    const {identificador} = await req.params
    const pokemon = await detalharPokemon(identificador)
    const { id, name, height, weight, base_experience, abilities, species  } = await pokemon
   
    const resposta =  {
        id,
        name,
        height,
        weight,
        base_experience,
        abilities,
        species

    }
    
    return res.status(200).json(resposta)
}


module.exports = {
    exibirPokemons,
    pokemonDetalhes
}