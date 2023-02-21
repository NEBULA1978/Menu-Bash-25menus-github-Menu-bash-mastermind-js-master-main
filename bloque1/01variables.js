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

// Pedimos al usuario que introduzca el valor de la variable "primerNumero"
var valorPrimerNumero = prompt("Introduce el primer número:");

// Verificamos si el valor es un número
while (isNaN(valorPrimerNumero)) {
  // Si el valor no es un número, pedimos al usuario que lo introduzca de nuevo
  valorPrimerNumero = prompt("Introduce un valor numérico para el primer número:");
}

// Convertimos el valor del primer número a un número
var primerNumero = parseFloat(valorPrimerNumero);

// Pedimos al usuario que introduzca el valor de la variable "segundoNumero"
var valorSegundoNumero = prompt("Introduce el segundo número:");

// Verificamos si el valor es un número
while (isNaN(valorSegundoNumero)) {
  // Si el valor no es un número, pedimos al usuario que lo introduzca de nuevo
  valorSegundoNumero = prompt("Introduce un valor numérico para el segundo número:");
}

// Convertimos el valor del segundo número a un número
var segundoNumero = parseFloat(valorSegundoNumero);

// Intercambiamos los valores de las variables
var temporal = segundoNumero;
segundoNumero = primerNumero;
primerNumero = temporal;

// Mostramos los valores de las variables por consola
console.log(`Después del intercambio: primerNumero = ${primerNumero}, segundoNumero = ${segundoNumero}`);


// deestructuring

// El destructuring en JavaScript es una técnica que nos permite extraer valores de un objeto o de un array en variables individuales.Se utiliza una sintaxis especial que nos permite especificar qué valores queremos extraer y en qué variables queremos almacenarlos.

// Por ejemplo, supongamos que tenemos un objeto que representa un usuario con su nombre, su email y su edad:

const usuario = {
  nombre: 'Juan',
  email: 'juan@gmail.com',
  edad: 30
};

// Si queremos extraer los valores de las propiedades nombre y email en dos variables separadas, podemos utilizar la sintaxis de destructuring de esta manera:

const { nombre, email } = usuario;
console.log(nombre); // 'Juan'
console.log(email); // 'juan@gmail.com'

// En este ejemplo, utilizamos las llaves { } para indicar que queremos extraer los valores de las propiedades nombre y email del objeto usuario.Luego, los almacenamos en dos variables separadas: nombre y email.Ahora, podemos usar estas variables en nuestro código.

// En el ejemplo que nos proporcionaste, se utiliza la sintaxis de destructuring para intercambiar los valores de dos variables x e y utilizando una sintaxis compacta y legible:
// [x, y] = [y, x]

[x, y] = [y, x];
console.log('Resultado ejercicio: x es', x, 'y es', y);

// Aquí, utilizamos una sintaxis especial para crear un array[y, x] que contiene los valores de y y x, respectivamente, y luego utilizamos la sintaxis de destructuring[x, y] para extraer estos valores en las variables x e y.Como resultado, los valores de x e y se intercambian.Luego, se muestra por consola los nuevos valores de x e y.


// En este ejemplo, definimos un objeto punto que representa un punto en el plano cartesiano, con las propiedades x e y que contienen las coordenadas del punto.

//   Luego, utilizamos la sintaxis de destructuring para extraer los valores de las propiedades x e y del objeto punto en dos variables separadas, que llamamos coordenadaX y coordenadaY, respectivamente.Al utilizar x: coordenadaX y y: coordenadaY, estamos renombrando las variables que creamos con los nombres más descriptivos.

//     Finalmente, mostramos por consola los valores de las variables coordenadaX y coordenadaY, que corresponden a las coordenadas x e y del punto que definimos en el objeto punto.

// Definimos un objeto que representa un punto en el plano cartesiano
const punto = { x: 1, y: 2 };

// Utilizamos la sintaxis de destructuring para extraer los valores de las propiedades 'x' y 'y' en dos variables
const { x: coordenadaX, y: coordenadaY } = punto;

// Mostramos por consola los valores de las variables 'coordenadaX' y 'coordenadaY'
console.log('Coordenadas del punto:', coordenadaX, coordenadaY);

