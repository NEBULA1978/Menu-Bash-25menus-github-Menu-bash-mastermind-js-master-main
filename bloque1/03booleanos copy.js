// Declaración de variables
var x = 10;
var y = 5;

// Comparación de variables
var xMayorQueY = x > y; // true
var xMenorQueY = x < y; // false
var xIgualAY = x == y; // false
var xDistintoDeY = x != y; // true

// Operadores lógicos
var z = 15;
var xMayorQueYyMenorQueZ = x > y && x < z; // true
var xMayorQueZoMenorQueY = x > z || x < y; // false

// Salida por consola
console.log(xMayorQueY);
console.log(xMenorQueY);
console.log(xIgualAY);
console.log(xDistintoDeY);
console.log(xMayorQueYyMenorQueZ);
console.log(xMayorQueZoMenorQueY);



Claro, aquí tienes un ejemplo con números y comentarios:

javascript

// Declaración de variables
var x = 10;
var y = 5;

// Comparación de variables
var xMayorQueY = x > y; // true
var xMenorQueY = x < y; // false
var xIgualAY = x == y; // false
var xDistintoDeY = x != y; // true

// Operadores lógicos
var z = 15;
var xMayorQueYyMenorQueZ = x > y && x < z; // true
var xMayorQueZoMenorQueY = x > z || x < y; // false

// Salida por consola
console.log(xMayorQueY);
console.log(xMenorQueY);
console.log(xIgualAY);
console.log(xDistintoDeY);
console.log(xMayorQueYyMenorQueZ);
console.log(xMayorQueZoMenorQueY);

// En este ejemplo se declaran dos variables numéricas x e y.Después se comparan estas variables utilizando operadores de comparación como >, <, == y !=.También se utilizan operadores lógicos como && y || para combinar diferentes condiciones.

// Al final se muestran los resultados de las diferentes operaciones por consola.

// En caso de querer introducir los números por teclado se puede utilizar la función prompt() para solicitar la entrada al usuario y luego convertir la entrada de cadena a número mediante la función Number() o el operador unario +.Por ejemplo:

var x = +prompt('Introduce el primer número:');
var y = +prompt('Introduce el segundo número:');

// En este caso, el operador unario + se utiliza para convertir la entrada de cadena a número de forma abreviada.

/* AND (&&) Tabla de verdad
1 && 1 : 1
1 && 0 : 0
0 && 1 : 0
0 && 0 : 0
*/

// si a es mayor que 5 y menor que 10, se cumple la condición
var a = 7;
var condicion = a > 5 && a < 10;

console.log(condicion); // true



/* OR (||) Tabla de verdad
1 || 1 : 1
1 || 0 : 1
0 || 1 : 1
0 || 0 : 0
*/

// si a es igual a 5 o b es igual a 10, se cumple la condición
var a = 5;
var b = 8;
var condicion = a === 5 || b === 10;

console.log(condicion); // true


/* NOT (!) Tabla de verdad
1 : 0
0 : 1
*/

// si a no es igual a 5, se cumple la condición
var a = 7;
var condicion = !(a === 5);

console.log(condicion); // true

// OTRO CODIGO

var haHechoTrabajo = true;
var notaExamenFinal = 10;
var tieneFaltaTécnica = true;
var aprobadoElCurso = (haHechoTrabajo || notaExamenFinal >= 5) && !tieneFaltaTécnica;
console.log(aprobadoElCurso);

// Realizar un programa que, dadas dos lineas en una dimension (dos rangos)
// (a, b), (c, d) comprobar que las lineas se solapan o no se solapan

// var a = 5;
// var b = 20;
// var c = 10;
// var d = 25;
// //------a--------c------b------d---------

// var haySolape = true;

// Se definen dos rangos en una dimensión, representados por las variables a, b y c, d
var a = 5;
var b = 20;
var c = 10;
var d = 25;

// Se asume que hay solape entre los dos rangos, a menos que se demuestre lo contrario
var haySolape = true;

// Si el final del primer rango (b) es menor o igual que el comienzo del segundo rango (c), o si el final del segundo rango (d) es menor o igual que el comienzo del primer rango (a), entonces no hay solape
if (c >= b || a >= d) {
  haySolape = false;
}

// Se imprime en consola el valor de haySolape
console.log(haySolape); // true


// Para determinar si dos líneas en una dimensión se solapan, podemos seguir los siguientes pasos:

//     Comprobar si una de las líneas está completamente a la izquierda de la otra: si el final de una línea es menor que el inicio de la otra, entonces no se solapan.
//     Comprobar si una de las líneas está completamente a la derecha de la otra: si el inicio de una línea es mayor que el final de la otra, entonces no se solapan.
//     Si no se cumple ninguno de los dos casos anteriores, entonces las líneas se solapan.

// definimos las líneas
var linea1Inicio = 2;
var linea1Fin = 5;
var linea2Inicio = 4;
var linea2Fin = 7;

// comprobamos si las líneas se solapan
if (linea1Fin < linea2Inicio || linea1Inicio > linea2Fin) {
  console.log("Las líneas no se solapan");
} else {
  console.log("Las líneas se solapan");
}

// En este ejemplo, las líneas[2, 5] y[4, 7] se solapan, ya que el final de la primera línea(5) es mayor que el inicio de la segunda línea(4) y el inicio de la primera línea(2) es menor que el final de la segunda línea(7).

// Podemos cambiar los valores de linea1Inicio, linea1Fin, linea2Inicio y linea2Fin para probar con diferentes líneas y ver cómo funciona la lógica.