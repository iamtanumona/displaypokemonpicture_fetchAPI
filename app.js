const pokemonEl = document.querySelector("#pokemon");
const imgEl = document.querySelector("#pokemonSprite");

// async function getPokemonData () {
//     try {
//         let response = await fetch(URL);
//         console.log(response);
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         } 
//         let data = await response.json();
//         console.log(data);
//     } 
//     catch(err) {
//         console.log(err);
//     }
// }
// getPokemonData();

const fetchData = async () => {
    try {
        const pokemonVal = pokemonEl.value.toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonVal}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        } 
        let data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        imgEl.src = pokemonSprite;
        imgEl.style.display = "block";
    } 
    catch(err) {
        console.log(err);
    }
    
}