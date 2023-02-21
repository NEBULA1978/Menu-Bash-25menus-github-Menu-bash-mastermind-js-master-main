var array = ["aa", "bb", 3, [1, 2], { nombre: 'Nombre', apellido: 'Apellido' }];
var objeto = {
    nombre: 'Martin',
    apellido: 'Cristobal',
    edad: 26,
    coches: ['Ferrari', 'Lamborghini'],
    direccion: {
        calle: 'texto de la calle',
        numero: 4
    }
}

// Acceso a elementos de un array
var item0 = array[0];
var item1 = array[1];

var indice = 4;
var item4 = array[indice].nombre; // Acceso a un objeto anidado dentro del array

// Acceso a elementos de un objeto
var nombreObjeto = objeto.nombre;
var textoCalle = objeto.coches[0]; // Acceso a un elemento de un array dentro del objeto

// Acceso a posiciones no definidas
var item50 = array[50]; // Devolverá undefined, ya que el array no tiene tantos elementos
console.log(item50);

var piso = objeto.piso[1]; // Devolverá undefined, ya que el objeto no tiene una propiedad 'piso'
console.log(piso);

// Obtener la longitud de un array
var longitud = array.length;

// Verificar si una posición dada está dentro de los límites del array
var isValidPosition = 50 >= 0 && 50 < array.length;
