/* ***********************
        MODULO DE DATOS - POKEAPI  
*********************** */

export const LISTA_POKEMONES = []; //Se crea el arreglo que contendrá los pokemones obtenidos por medio de la api

export const listado = async () => {//Función que obtendrá de la PokeApi los datos de 890 pokemones

    for (let i = 1; i <= 890; i++) {//Ciclo para obtener los datos de cada pokemon inividualmente
        const resp = await 
        fetch (`https://pokeapi.co/api/v2/pokemon/${i}/`)
        const data = await resp.json();

        //Se instancian los objetos con los resultados y se agregan al arreglo
        LISTA_POKEMONES.push(new pokemon(data.id, capitalizeFirstLetter(data.name), ` ${capitalizeFirstLetter(data.types[0].type.name)} ${data.types[1]?.type.name || ""}`, `${capitalizeFirstLetter(data.abilities[0].ability.name)} ${data.abilities[1]?.ability.name || ""}`, (data.weight)/10+ " kg", data.sprites.other["official-artwork"].front_default))
    }
};

class pokemon { //Clase para el objeto Pokémon
    constructor(id, nombre, tipo, habilidad, peso, imagen) {
        this.id =id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.habilidad = habilidad;
        this.peso = peso;
        this.imagen = imagen;
    }
};

function capitalizeFirstLetter(string) { //Función para volver mayúscula la primera letra de un string
  return string.charAt(0).toUpperCase() + string.slice(1);
}
