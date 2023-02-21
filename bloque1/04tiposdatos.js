// Definición de variables con diferentes tipos de datos
var numero = 2;
var string = 'Soy un texto';
var booleano = true;

// Array y objeto
var array = ["aa", "bb", 3, [1, 2]];
var objeto = {
    nombre: 'Martin',
    apellido: 'Cristobal',
    edad: 26
}

// Definición de una función anónima
var nombreFuncion = function () { }

// null y undefined
var valorNulo = null; // Este valor se utiliza cuando no tengo definido un valor
var valorUndefined; // Este valor se utiliza para declarar una variable sin inicializarla

// Imprime el tipo de la variable (string, number, boolean, etc.)
console.log(typeof booleano); // 'boolean'

// Tipos de datos dinámicos
// En Javascript, el tipo de una variable puede cambiar en tiempo de ejecución:
var suma = 2 + '2'; // El resultado de la suma es '22', que es un string.

// Ejemplo de uso de array
var vector = [];
vector.push(3);
vector.push(4);
vector.pop();
console.log(vector); // El resultado es [3], ya que se eliminó el último elemento (4).

// Ejemplo de uso de objeto
var objetoParaProbar = { nombre: 'Martin' };
objetoParaProbar.apellido = 'Cristobal'; // Agrega un atributo 'apellido' con valor 'Cristobal'
console.log(objetoParaProbar); // El resultado es { nombre: 'Martin', apellido: 'Cristobal' }


// Declaramos un arreglo vacío
var vector = [];

// Agregamos los elementos 3 y 4 al arreglo
vector.push(3);
vector.push(4);

// Eliminamos el último elemento del arreglo (en este caso, 4)
vector.pop();

// Mostramos el arreglo actual
console.log(vector);

// Aquí hay algunos otros métodos útiles que puedes usar con arreglos:

// array.length: devuelve el número de elementos en el arreglo.
//     array.concat(array2): combina dos arreglos en uno solo.
//         array.slice(inicio, fin): devuelve una porción del arreglo, desde el índice "inicio" hasta el índice "fin"(sin incluir "fin").
//             array.splice(indice, cantidad, elementos): elimina o inserta elementos en el arreglo.El parámetro "indice" indica la posición donde comenzar a hacer cambios, "cantidad" indica cuántos elementos eliminar a partir de ese índice, y "elementos" son los elementos que se insertarán en esa posición.
//                 array.reverse(): invierte el orden de los elementos en el arreglo.
//                     array.sort(): ordena los elementos del arreglo de manera ascendente(para ordenar de manera descendente, use array.reverse() después de array.sort()).

// Estos son solo algunos de los métodos más comunes; hay muchos otros que puedes encontrar en la documentación oficial de JavaScript.