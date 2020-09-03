// async function get3Pokemon() {
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
// }

async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const results = await Promise.all([prom1, prom2, prom3]);
    //below will run when all the promises are resolved
    printPokemon(results);
}

function printPokemon(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name);
    }
}

get3Pokemon();
