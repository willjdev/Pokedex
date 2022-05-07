/* ***********************
        POKEDEX        
*********************** */
//IMPORTS
import {listado, LISTA_POKEMONES} from "./data.js";//Se importan las funciones y arreglos del modulo data.js
import {cuadrillaPoke} from "./moduleListado.js";//Se importa la función que crea la cuadrilla de pokemones

cuadrillaPoke(1,20);//Se ejecuta la función 
listado();//Se ejecuta la función que utiliza la PokeApi
esperaListado();//Se ejecuta la función que activa el evento en los pokemones en cuadrilla

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
let botonCarga = document.getElementById("cargaMas");

//EVENTOS

boton.onclick = verificarEntrada; //Mostrará los resultados de la busqueda 

entradaUsuario.addEventListener("keypress", function(key) {//activará la búsqueda cuando el usuario presione ENTER
    if (key.keyCode === 13) {
        key.preventDefault();
        verificarEntrada();
        }
})

botonCarga.addEventListener("click", () => {//Evento que carga mas pokemones en la cuadrilla al presionar el boton de LOAD MORE
    let pokeCards = document.querySelectorAll(".pokeCard");
    //Se toma el conteo de los pokemones que ya están para cargar los 20 siguientes en el JSON de la api
    let conteo = pokeCards.length;
    var sumaConteo = 20;
    if (conteo == 880) {//Cuando el conteo llegue a 880 solo sumará 10 para evitar conflictos con la api
        sumaConteo = 10;
    }
    cuadrillaPoke(conteo+1, conteo+sumaConteo);
    esperaListado();
    
})



//FUNCIONES
function verificarEntrada() { //Función que verifica los datos que ingrese el usuario mostrando los resultados

        entrada = LISTA_POKEMONES.find((el) => el.nombre.toUpperCase() === entradaUsuario.value.toUpperCase());
        if(entrada != undefined) {
            columnas();
            const resultado = LISTA_POKEMONES.filter((el) => el.nombre.toUpperCase().includes(entradaUsuario.value.toUpperCase()));
    
            //Se asigna a una variable el elemento en la posición cero del array devuelto por filter
            objeto = resultado[0];
            
            document.querySelector(".form").style.width = "50%";//Cambia el tamaño del cuadro de búsqueda cuando el de descripción sea visible

    
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

/* Función que hace esperar a que la pagina termine de cargar la cuadrilla de pokemones para agregarles el evento
que hará que aparezca el pokemon clickeado en el cuadro de descripciones */
function esperaListado () {
    setTimeout(() => {
        botonCarga.style.display = "inline";//Volvemos el boton de carga de mas contenido visible
        let pokeCards = document.querySelectorAll(".pokeCard");
        //Evaluamos la cantidad de pokemones en cuadrilla para desaparecer el boton en caso de que hayan 890
        pokeCards.length === 890 ? botonCarga.style.display = "none" : botonCarga.style.display = "inline";
        /* Se asigna el evento a cada pokemon de la cuadrilla que aplica el metodo de busqueda para
        obtener su información y mostarla en el cuadro de descripción cuando uno sea clickeado */
        pokeCards.forEach(function(element) {
            let pokeCardNombre = element.innerText;
            element.addEventListener("click", function() {
                columnas();
                const resultado = LISTA_POKEMONES.filter((el) => el.nombre.toUpperCase().includes(pokeCardNombre.toUpperCase()));
                objeto = resultado[0];
                document.querySelector(".form").style.width = "50%";
                nombreSalida.innerHTML = objeto.nombre;
                idSalida.innerHTML = objeto.id;
                tipoSalida.innerHTML = objeto.tipo;
                habilidadSalida.innerHTML = objeto.habilidad;
                pesoSalida.innerHTML = objeto.peso;
                document.getElementById("imagen").src = objeto.imagen;
                descripcion.style.display = "flex";
                entradaUsuario.value = "";
                scroll(0,0);//Cuando el usuario presione algun pokemon de la cuadrilla se dirige al top de la pagina
            })
        })
    }, 2000);
};






