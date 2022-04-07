/* ***********************
        POKEDEX        
*********************** */

//VARIABLES
const LISTA_POKEMONES = []; //Lista que contendrá los objetos/pokemones
let busqueda, entrada, objeto; //Variables a utilizar en la búsqueda

//DOM
let entradaUsuario = document.getElementById("busquedaUsuario");
let boton = document.getElementById("btnBusqueda");
let descripcion = document.getElementById("descripcion");
let nombreSalida = document.getElementById("nombrePokemon");
let idSalida = document.getElementById("idPokemon");
let tipoSalida = document.getElementById("tipoPokemon");
let evolucionSalida = document.getElementById("evolucionPokemon");
let generacionSalida = document.getElementById("generacionPokemon");

//Creacion de elemento img y adición al documento
let pokeImagen = document.createElement("img");
    document.getElementById("imagenPokemon").appendChild(pokeImagen);


//CLASS
class pokemon { //Clase para el objeto Pokémon
    constructor(nombre, id, tipo, evolucion, generacion, imagen) {
        this.nombre = nombre;
        this.id =id;
        this.tipo = tipo;
        this.evolucion = evolucion;
        this.generacion = generacion;
        this.imagen = imagen;
    }
}

//Se instancian los objetos y se agregan al arreglo

LISTA_POKEMONES.push( new pokemon("Bulbasaur", "001", ["Planta", " Veneno"], "Sí", "Primera", "./images/pokemones/001.png"));
LISTA_POKEMONES.push( new pokemon("Ivysaur", "002", ["Planta", " Veneno"], "Sí", "Primera", "./images/pokemones/002.png"));
LISTA_POKEMONES.push( new pokemon("Venusaur", "003", ["Planta", " Veneno"], "No", "Primera", "./images/pokemones/003.png"));
LISTA_POKEMONES.push( new pokemon("Charmander", "004", "Fuego ", "Sí", "Primera", "./images/pokemones/004.png"));
LISTA_POKEMONES.push( new pokemon("Charmeleon", "005", "Fuego ", "Sí", "Primera", "./images/pokemones/005.png"));
LISTA_POKEMONES.push( new pokemon("Charizard", "006", ["Fuego", " Volador"], "No", "Primera", "./images/pokemones/006.png"));
LISTA_POKEMONES.push( new pokemon("Squirtle", "007", "Agua", "Sí", "Primera", "./images/pokemones/007.png"));
LISTA_POKEMONES.push( new pokemon("Wartortle", "008", "Agua", "Sí", "Primera", "./images/pokemones/008.png"));
LISTA_POKEMONES.push( new pokemon("Blastoise", "009", "Agua", "No", "Primera", "./images/pokemones/009.png"));
LISTA_POKEMONES.push( new pokemon("Caterpie", "010", "Bicho", "Sí", "Primera", "./images/pokemones/010.png"));
LISTA_POKEMONES.push( new pokemon("Metapod", "011", "Bicho", "Sí", "Primera", "./images/pokemones/011.png"));
LISTA_POKEMONES.push( new pokemon("Butterfree", "012", ["Bicho", " Volador"], "No", "Primera", "./images/pokemones/012.png"));
LISTA_POKEMONES.push( new pokemon("Weedle", "013", ["Bicho", " Veneno"], "Sí", "Primera", "./images/pokemones/013.png"));
LISTA_POKEMONES.push( new pokemon("Kakuna", "014", ["Bicho", " Veneno"], "Sí", "Primera", "./images/pokemones/014.png"));
LISTA_POKEMONES.push( new pokemon("Beedrill", "015", ["Bicho", " Veneno"], "No", "Primera", "./images/pokemones/015.png"));
LISTA_POKEMONES.push( new pokemon("Pidgey", "016", ["Normal", " Volador"], "Sí", "Primera", "./images/pokemones/016.png"));
LISTA_POKEMONES.push( new pokemon("Pidgeot", "018", ["Normal", " Volador"], "No", "Primera", "./images/pokemones/018.png"));
LISTA_POKEMONES.push( new pokemon("Pidgeotto", "017", ["Normal", " Volador"], "Sí", "Primera", "./images/pokemones/017.png"));
LISTA_POKEMONES.push( new pokemon("Rattata", "019", "Normal", "Sí", "Primera", "./images/pokemones/019.png"));
LISTA_POKEMONES.push( new pokemon("Raticate", "020", "Normal", "No", "Primera", "./images/pokemones/020.png"));

//EVENTO
boton.onclick = verificarEntrada;//activará la búsqueda del Pokémon cuando el usuario haga click en el botón BUSCAR
entradaUsuario.addEventListener("keypress", function(key) {
    if (key.keyCode === 13) {
        key.preventDefault();
        verificarEntrada();
    }
})

//FUNCIONES
function verificarEntrada() { //Función que verifica los datos que ingrese el usuario
    
    entrada = LISTA_POKEMONES.find((el) => el.nombre.toUpperCase() === entradaUsuario.value.toUpperCase());
    if(entrada != undefined) {
        const resultado = LISTA_POKEMONES.filter((el) => el.nombre.toUpperCase().includes(entradaUsuario.value.toUpperCase()));

        //Se asigna a una variable el elemento en la posición cero del array devuelto por filter
        objeto = resultado[0];

        //Se agregan los valores de las propiedades del objeto a cada <p> del HTML
        nombreSalida.innerHTML = objeto.nombre;
        idSalida.innerHTML = objeto.id;
        tipoSalida.innerHTML = objeto.tipo;
        evolucionSalida.innerHTML = objeto.evolucion;
        generacionSalida.innerHTML = objeto.generacion;

        //Se agrega el atributo src al elemento img con la imagen del Pokémon
        pokeImagen.src = objeto.imagen;

        /* document.getElementById("imagen").src = objeto.imagen; */
        

        //Se cambia a visible el cuadro con las caracteristicas de cada Pokémon, es decir, los valores del objeto
        descripcion.style.display = "flex";
    } else {
        alert("Dato no incorrecto");
    }
}

