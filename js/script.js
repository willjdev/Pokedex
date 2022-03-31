/* ***********************
        POKEDEX        
*********************** */
//VARIABLES

const LISTA_POKEMONES = []; //Lista que contendrá los objetos/pokemones
let busqueda, entrada; //Variables declaradas para solicitar datos al usuario
var verificacion = true; //Variable de control del ciclo do while

//CLASS
class pokemon { //Clase para el objeto Pokémon
    constructor(nombre, id, tipo, evolucion, generacion) {
        this.nombre = nombre;
        this.id =id;
        this.tipo = tipo;
        this.evolucion = evolucion;
        this.generacion = generacion;
    }
}

//Se instancian los objetos y se agregan al arreglo

LISTA_POKEMONES.push( new pokemon("Bulbasaur", 001, ["Planta", "Veneno"], "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Ivysaur", 002, ["Planta", "Veneno"], "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Venusaur", 003, ["Planta", "Veneno"], "No", "Primera"));
LISTA_POKEMONES.push( new pokemon("Charmander", 004, "Fuego", "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Charmeleon", 005, "Fuego", "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Charizard", 006, ["Fuego", "Volador"], "No", "Primera"));
LISTA_POKEMONES.push( new pokemon("Squirtle", 007, "Agua", "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Wartortle", "008", "Agua", "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Blastoise", "009", "Agua", "No", "Primera"));
LISTA_POKEMONES.push( new pokemon("Caterpie", 010, "Bicho", "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Metapod", 011, "Bicho", "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Butterfree", 012, ["Bicho", "Volador"], "No", "Primera"));
LISTA_POKEMONES.push( new pokemon("Weedle", 013, ["Bicho", "Veneno"], "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Kakuna", 014, ["Bicho", "Veneno"], "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Beedrill", 015, ["Bicho", "Veneno", "No", "Primera"]));
LISTA_POKEMONES.push( new pokemon("Pidgey", 016, ["Normal", "Volador"], "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Pidgeot", "018", ["Normal", "Volador"], "No", "Primera"));
LISTA_POKEMONES.push( new pokemon("Pidgeotto", 017, ["Normal", "Volador"], "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Rattata", "019", "Normal", "Sí", "Primera"));
LISTA_POKEMONES.push( new pokemon("Raticate", 020, "Normal", "No", "Primera"));


//Ciclo que mostrará al usuario el/los Pokémon que busque

while (verificacion) {

    verificarEntrada();

    if(entrada != undefined) {
        const resultado = LISTA_POKEMONES.filter((el) => el.nombre.includes(busqueda));
        alert(JSON.stringify(resultado, null, 4));
        do{//Ciclo para verificar si el usuario desea hacer otra búsqueda o no
            let continuacion = prompt("¿Desea buscar otro Pokémmon? Ingrese 1 si lo desea, 2 si no lo desea");

            if (continuacion == 2) {
                verificacion = false;
                alert("Hasta pronto!");
                break
            } else if (continuacion == 1) {
                alert("De acuerdo!")
                break
            } else {
                alert("Entrada incorrecta")
            }
        } while(true);
    } else {
        alert("Dato no incorrecto")
    }

}

//FUNCIONES

function verificarEntrada() { //Función que verifica los datos que ingrese el usuario
    busqueda = prompt("¿Cuál Pokémon quieres buscar?");
    entrada = LISTA_POKEMONES.find((el) => el.nombre === busqueda);
    return entrada, busqueda;
}

