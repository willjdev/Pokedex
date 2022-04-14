/* ***********************
        POKEDEX        
*********************** */

//VARIABLES
const LISTA_POKEMONES = []; //Lista que contendrá los objetos/pokemones
const LISTA_POKEMONES_ENG = [];
let entrada, objeto; //Variables a utilizar en la búsqueda

//DOM
let entradaUsuario = document.getElementById("busquedaUsuario");
let boton = document.getElementById("btnBusqueda");
let descripcion = document.getElementById("descripcion");
let nombreSalida = document.getElementById("nombrePokemon");
let idSalida = document.getElementById("idPokemon");
let tipoSalida = document.getElementById("tipoPokemon");
let evolucionSalida = document.getElementById("evolucionPokemon");
let generacionSalida = document.getElementById("generacionPokemon");
let idioma = document.getElementById("seleccionIdioma");


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

//EVENTOS
window.onload = cargaPag;
idioma.onchange = idiomaPag;//Cambiará el idioma de la pagina de acuerdo al interés del usuario
if (localStorage.getItem("idioma") == "ingles") {
    boton.onclick = verifyEntry;
} else if (localStorage.getItem("idioma") == "español"){
    boton.onclick = verificarEntrada;
}
//boton.onclick = verificarEntrada;//activará la búsqueda del Pokémon cuando el usuario haga click en el botón BUSCAR
entradaUsuario.addEventListener("keypress", function(key) {//activará la búsqueda cuando el usuario presione ENTER
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
    
            //Se modifica el atributo src al elemento img con la imagen del Pokémon buscado
            document.getElementById("imagen").src = objeto.imagen;
            
            //Se cambia a visible el cuadro con las caracteristicas de cada Pokémon, es decir, los valores del objeto
            document.getElementById("descripcionEng").style.display = "none";

            descripcion.style.display = "flex";
    
            //Se deja en blanco el input para las siguientes búsquedas
            entradaUsuario.value = "";
        } else {
            alert("Dato incorrecto");
        }
} 

function verifyEntry() { //Función que verifica los datos que ingrese el usuario

        entrada = LISTA_POKEMONES_ENG.find((el) => el.nombre.toUpperCase() === entradaUsuario.value.toUpperCase());
        if(entrada != undefined) {
            const resultado = LISTA_POKEMONES_ENG.filter((el) => el.nombre.toUpperCase().includes(entradaUsuario.value.toUpperCase()));
    
            //Se asigna a una variable el elemento en la posición cero del array devuelto por filter
            objeto = resultado[0];
    
            //Se agregan los valores de las propiedades del objeto a cada <p> del HTML
            document.getElementById("nombrePokemonEng").innerHTML = objeto.nombre;
            document.getElementById("idPokemonEng").innerHTML = objeto.id;
            document.getElementById("tipoPokemonEng").innerHTML = objeto.tipo;
            document.getElementById("evolucionPokemonEng").innerHTML = objeto.evolucion;
            document.getElementById("generacionPokemonEng").innerHTML = objeto.generacion;
    
            //Se modifica el atributo src al elemento img con la imagen del Pokémon buscado
            document.getElementById("imagenEng").src = objeto.imagen;
            
            //Se cambia a visible el cuadro con las caracteristicas de cada Pokémon, es decir, los valores del objeto
            descripcion.style.display = "none";

            document.getElementById("descripcionEng").style.display = "flex";
    
            //Se deja en blanco el input para las siguientes búsquedas
            entradaUsuario.value = "";
        } else {
            alert("Dato incorrecto");
        }
} 


function cargaPag() {
    if (localStorage.getItem("idioma") == "ingles") {
        cambioIdiomaIngles();
    } else {
        cambioIdiomaEspañol();
    }
}

function idiomaPag() {
    if (idioma.value == 1) {
        localStorage.setItem("idioma", "ingles");
        cambioIdiomaIngles();
        window.location.reload();
    } else {
        localStorage.setItem("idioma", "español");
        cambioIdiomaEspañol();
        window.location.reload();

    }
}

function cambioIdiomaIngles() {
    document.querySelector(".enunIdioma").innerHTML = "Language";
    document.getElementById("formLabel").innerHTML = "Which Pokémon do you want to search ?"
    /* document.getElementById("liID").innerHTML = "ID: " + '<p id="idPokemon"></p>';
    document.getElementById("liNombre").innerHTML = 'Name: <p id="nombrePokemon"></p>';
    document.getElementById("liTipo").innerHTML = 'Type: <p id="tipoPokemon"></p>';
    document.getElementById("liEvol").innerHTML = 'Evolution: <p id="evolucionPokemon"></p>';
    document.getElementById("liGen").innerHTML = 'Generation: <p id="generacionPokemon"></p>'; */
    boton.value = "SEARCH";
}

function cambioIdiomaEspañol() {
    document.querySelector(".enunIdioma").innerHTML = "Lenguaje";
    document.getElementById("formLabel").innerHTML = "¿Cuál Pokémon quieres buscar?"
    /* document.getElementById("liID").innerHTML = 'ID: <p id="idPokemon"></p>';
    document.getElementById("liNombre").innerHTML = 'Nombre: <p id="nombrePokemon"></p>';
    document.getElementById("liTipo").innerHTML = 'Tipo: <p id="tipoPokemon"></p>';
    document.getElementById("liEvol").innerHTML = 'Evolución: <p id="evolucionPokemon"></p>';
    document.getElementById("liGen").innerHTML = 'Generación: <p id="generacionPokemon"></p>'; */
    boton.value = "BUSCAR";
}



LISTA_POKEMONES_ENG.push( new pokemon("Bulbasaur", "001", ["Grass", " Poison"], "Yes", "First", "./images/pokemones/001.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Ivysaur", "002", ["Grass", " Poison"], "Yes", "First", "./images/pokemones/002.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Venusaur", "003", ["Grass", " Posion"], "No", "First", "./images/pokemones/003.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Charmander", "004", "Fire ", "Yes", "First", "./images/pokemones/004.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Charmeleon", "005", "Fire ", "Yes", "First", "./images/pokemones/005.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Charizard", "006", ["Fire", " Flying"], "No", "First", "./images/pokemones/006.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Squirtle", "007", "Water", "Yes", "First", "./images/pokemones/007.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Wartortle", "008", "Water", "Yes", "First", "./images/pokemones/008.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Blastoise", "009", "Water", "No", "First", "./images/pokemones/009.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Caterpie", "010", "Bug", "Yes", "First", "./images/pokemones/010.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Metapod", "011", "Bug", "Yes", "First", "./images/pokemones/011.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Butterfree", "012", ["Bug", " Flying"], "No", "First", "./images/pokemones/012.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Weedle", "013", ["Bug", " Poison"], "Yes", "First", "./images/pokemones/013.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Kakuna", "014", ["Bug", " Poison"], "Yes", "First", "./images/pokemones/014.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Beedrill", "015", ["Bug", " Poison"], "No", "First", "./images/pokemones/015.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Pidgey", "016", ["Normal", " Flying"], "Yes", "First", "./images/pokemones/016.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Pidgeot", "018", ["Normal", " Flying"], "No", "First", "./images/pokemones/018.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Pidgeotto", "017", ["Normal", " Flying"], "Yes", "First", "./images/pokemones/017.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Rattata", "019", "Normal", "Yes", "First", "./images/pokemones/019.png"));
LISTA_POKEMONES_ENG.push( new pokemon("Raticate", "020", "Normal", "No", "First", "./images/pokemones/020.png"));

