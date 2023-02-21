var cajaA = 3;
cajaA = 5;
var cajaB = 5;
var cajaC = cajaA + cajaB;

console.log(cajaA, cajaB, cajaC);

// Pedimos al usuario que introduzca el valor de la variable A
var valorA = prompt("Introduce el valor de la variable A:");

// Verificamos si el valor es un número
while (isNaN(valorA)) {
  // Si el valor no es un número, pedimos al usuario que lo introduzca de nuevo
  valorA = prompt("Introduce un valor numérico para la variable A:");
}

// Convertimos el valor de la variable A a un número
var numeroA = parseFloat(valorA);

// Pedimos al usuario que introduzca el valor de la variable B
var valorB = prompt("Introduce el valor de la variable B:");

// Verificamos si el valor es un número
while (isNaN(valorB)) {
  // Si el valor no es un número, pedimos al usuario que lo introduzca de nuevo
  valorB = prompt("Introduce un valor numérico para la variable B:");
}

// Convertimos el valor de la variable B a un número
var numeroB = parseFloat(valorB);

// Calculamos el valor de la variable C como la suma de las variables A y B
var numeroC = numeroA + numeroB;

// Mostramos los valores de las variables por consola
console.log(numeroA, numeroB, numeroC);

// OTRO CODIGO

var x = 2;
var y = 3;

// intercambiar los valores de x e y
// x: 2, y: 3
// resultado: x: 3, y: 2
// funcion de swap
var z = y;
y = x;
x = z;

// deestructuring
[x, y] = [y, x]

console.log('Resultado ejercicio: x es', x, 'y es', y);