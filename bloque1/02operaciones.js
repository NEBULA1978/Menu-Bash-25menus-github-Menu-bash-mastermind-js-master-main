// // assignacion
// var a = 1;
// var b = 2;

// //suma
// var suma = a + b;
// // resta
// var resta = a - b;
// // multiplicacion
// var mult = a * b;
// // division
// var divi = a / b;
// // modulo o resto
// var resto = a % b;
// // exponenciacion
// var expo = a ** b;

// a = a + 2;
// a = 2;

// console.log(a);

// // texto
// var nombre = 'Martin';
// var apellido = 'Cristobal';

// nombre += ' ';
// nombre += apellido;
// console.log(nombre);

// // combinar operaciones con diferentes tipos
// var numero = 2;
// var texto = 'Hola';
// var sumaCombinada = texto + numero;
// console.log(sumaCombinada);

//Ejercicio: Programa que nos diga los buenos dias
// Resultado: 'Buenos dias NOMBRE'


// Asignamos los valores 1 y 2 a las variables 'a' y 'b', respectivamente
var a = 1;
var b = 2;

// Realizamos diferentes operaciones aritméticas con las variables 'a' y 'b'
var suma = a + b;  // suma = 3
var resta = a - b;  // resta = -1
var mult = a * b;  // mult = 2
var divi = a / b;  // divi = 0.5
var resto = a % b;  // resto = 1
var expo = a ** b;  // expo = 1

// Asignamos nuevos valores a la variable 'a' y mostramos por consola su valor
a = a + 2;  // a = 3
a = 2;  // a = 2
console.log('Valor de la variable a:', a);

// Concatenamos los valores de las variables 'nombre' y 'apellido' en una nueva variable 'nombreCompleto' y mostramos su valor por consola
var nombre = 'Martin';
var apellido = 'Cristobal';
var nombreCompleto = nombre + ' ' + apellido;
console.log('Nombre completo:', nombreCompleto);

// Combinamos una operación aritmética con una cadena de texto en una nueva variable 'sumaCombinada' y mostramos su valor por consola
var numero = 2;
var texto = 'Hola';
var sumaCombinada = texto + ' ' + numero;
console.log('Suma combinada:', sumaCombinada);

// Resolvemos el ejercicio que nos pide mostrar un mensaje de 'Buenos días' seguido del nombre ingresado por el usuario

// var nombreUsuario = prompt('Ingresa tu nombre');
// console.log('Buenos días', nombreUsuario);


// En este código, definimos las variables a y b con los valores 1 y 2, respectivamente, y luego realizamos diferentes operaciones aritméticas con ellas.También concatenamos dos cadenas de texto en una nueva variable nombreCompleto y combinamos una operación aritmética con una cadena de texto en la variable sumaCombinada.

//   Luego, resolvemos el ejercicio que nos pide mostrar un mensaje de 'Buenos días' seguido del nombre ingresado por el usuario.Utilizamos la función prompt() para pedir al usuario que ingrese su nombre, guardamos el valor ingresado en la variable nombreUsuario, y mostramos el mensaje completo por consola con la función console.log().

var nombre = prompt('Introduce tu nombre:');
var esNumero = false;

while (esNumero === false) {
  var respuesta = prompt('Introduce una palabra o letra:');

  if (isNaN(respuesta) === true) {
    esNumero = true;
    console.log('Buenos días ' + nombre);
  } else {
    console.log('Por favor, introduce una letra o palabra.');
  }
}
