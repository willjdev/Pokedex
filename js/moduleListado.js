import { capitalizeFirstLetter } from "./data.js";


export const cuadrillaPoke = async (inicio, total) => {//Función que obtendrá de la PokeApi los datos de 890 pokemones

    for (let i = inicio; i <= total; i++) {//Ciclo para obtener los datos de cada pokemon inividualmente
        const resp = await 
        fetch (`https://pokeapi.co/api/v2/pokemon/${i}/`)
        const data = await resp.json();

            const div = document.createElement('div');
            div.className = "pokeCard";
            div.innerHTML = `
                <div class="imgPeque"><img src="${data.sprites.other["official-artwork"].front_default}" alt="imagen pokemon"></div>
                <p class="nombrePeque">${capitalizeFirstLetter(data.name)}</p>
            `
            document.getElementById("listaPoke").appendChild(div);//Se agrega al DOM los datos tomados de la api organiazdos en elementos
    }
};


