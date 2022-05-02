/* ***********************
        POKEDEX        
*********************** */
//IMPORTS
import {listado, LISTA_POKEMONES} from "./data.js";//Se obtienen las funciones y arreglos del modulo data.js

listado();//Se ejecuta la función que utiliza la PokeApi

//VARIABLES
let entrada, objeto; //Variables a utilizar en la búsqueda

//DOM
let entradaUsuario = document.getElementById("busquedaUsuario");
let boton = document.getElementById("btnBusqueda");
let descripcion = document.getElementById("descripcion");
let nombreSalida = document.getElementById("nombrePokemon");
let idSalida = document.getElementById("idPokemon");
let tipoSalida = document.getElementById("tipoPokemon");
let habilidadSalida = document.getElementById("habilidadPokemon");
let pesoSalida = document.getElementById("pesoPokemon");

//EVENTOS

boton.onclick = verificarEntrada; //Mostrará los resultados de la busqueda 

entradaUsuario.addEventListener("keypress", function(key) {//activará la búsqueda cuando el usuario presione ENTER
    if (key.keyCode === 13) {
        key.preventDefault();
        verificarEntrada();
        }
})



//FUNCIONES
function verificarEntrada() { //Función que verifica los datos que ingrese el usuario mostrando los resultados

        entrada = LISTA_POKEMONES.find((el) => el.nombre.toUpperCase() === entradaUsuario.value.toUpperCase());
        if(entrada != undefined) {
            columnas();
            const resultado = LISTA_POKEMONES.filter((el) => el.nombre.toUpperCase().includes(entradaUsuario.value.toUpperCase()));
    
            //Se asigna a una variable el elemento en la posición cero del array devuelto por filter
            objeto = resultado[0];

    
            //Se agregan los valores de las propiedades del objeto a cada <p> del HTML
            nombreSalida.innerHTML = objeto.nombre;
            idSalida.innerHTML = objeto.id;
            tipoSalida.innerHTML = objeto.tipo;
            habilidadSalida.innerHTML = objeto.habilidad;
            pesoSalida.innerHTML = objeto.peso;
    
            //Se modifica el atributo src al elemento img con la imagen del Pokémon buscado
            document.getElementById("imagen").src = objeto.imagen;
            
            //Se cambia a invisible el cuadro con las caracteristicas de cada Pokémon, es decir, los valores del objeto
            descripcion.style.display = "flex";
    
            //Se deja en blanco el input para las siguientes búsquedas
            entradaUsuario.value = "";
        } else {
            alertify.error('Dato no encontrado');//Alerta de la librería Alertifyjs cuando el input sea erróneo

        }
}

function columnas() { //Función que cambia la forma en la que se organiza la caja de búsqueda y la caja de resultados
    document.querySelector(".mainBusqueda").style.gridTemplateColumns = "50% 50%";
}



