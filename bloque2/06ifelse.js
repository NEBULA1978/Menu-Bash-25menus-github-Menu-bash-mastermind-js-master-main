// control de flujo

// condicionales
var condicion = false;
var condicion2 = true;
if (condicion && condicion2) {
    // hago esto si se cumple condicion
    console.log('Estoy en el if');
} else {
    // hago esto otro si no se cumple condicion
    console.log('Estoy en el else');
}
// continuo ejecutando

// Aquí te muestro un ejemplo de cómo podrías calcular la derivada de una función utilizando JavaScript:
// En este ejemplo, primero definimos la función f(x), en este caso, la función es x ^ 2. Luego definimos un valor para x en el punto donde queremos calcular la derivada, en este caso, x = 2. A continuación, definimos una pequeña cantidad h para calcular la aproximación de la derivada utilizando la fórmula del cálculo diferencial.

//     Finalmente, calculamos la aproximación de la derivada y la almacenamos en la variable "derivada", luego imprimimos el valor de la derivada en la consola utilizando el método "console.log()".

// Ten en cuenta que este es solo un ejemplo básico, y que para calcular la derivada de funciones más complejas, puede que necesites utilizar técnicas más avanzadas de cálculo diferencial.

// Definimos la función
function f(x) {
    return x * x;
}

// Definimos un valor para x en el punto donde queremos calcular la derivada
var x = 2;

// Definimos una pequeña cantidad para calcular la aproximación de la derivada
var h = 0.0001;

// Calculamos la aproximación de la derivada utilizando la fórmula del cálculo diferencial
var derivada = (f(x + h) - f(x)) / h;

// Imprimimos el valor de la derivada en la consola
console.log("La derivada de la función en x = " + x + " es " + derivada);




// Se pueden encadenar
if (condicion1) {
    // Entro aqui si cumplo la primera condicion
} else if (condicion2) {
    // Entro aqui si cumplo la segunda
} else if (condicion3) {
    // Entro aqui si cumplo la tercera
} else {
    // Entro aqui si no cumplo ninguna
}


var lado1 = 3;
var lado2 = 3;
var lado3 = 3;

if (lado1 === lado2 && lado1 === lado3) {
    // Entro aqui si los tres lados son iguales
    console.log('El triángulo es equilátero');
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    // Entro aqui si al menos dos lados son iguales
    console.log('El triángulo es isósceles');
} else {
    // Entro aqui si los tres lados son distintos
    console.log('El triángulo es escaleno');
}






// Se pueden anidar
if (condicion1) {
    if (condicion2) {
        // Hago algo
    }
    // Luego hago otra cosa
} else {
    // Hago otra cosa distinta
}

if (condicion1) {
    if (condicion2) {
        // Hago algo si ambas condiciones son verdaderas
        console.log('Ambas condiciones son verdaderas');
    } else {
        // Hago otra cosa si la condicion2 es falsa
        console.log('La condicion2 es falsa');
    }
} else {
    // Hago otra cosa si la condicion1 es falsa
    console.log('La condicion1 es falsa');
}