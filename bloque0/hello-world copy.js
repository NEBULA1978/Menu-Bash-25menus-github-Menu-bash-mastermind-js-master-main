//  usando plantillas de cadenas(template strings) y otra forma diferente de salida por consola.

// Plantillas de cadena(template strings) son una característica de JavaScript que te permite incluir expresiones dentro de cadenas, delimitándolas con acentos graves(backticks).Puedes usar ${ } para insertar una expresión dentro de la cadena.

// Con plantillas de cadena (template strings)
console.log(`¡Hola!`);
console.log(`El número es ${42}`);
console.log(`El mensaje es: ${"Hola mundo!"}`);
console.log(`El array es: ${[1, 2, 3, 4, 5]}`);
console.log(`El objeto es: ${JSON.stringify({ nombre: "Juan", edad: 25 })}`);
console.log(`El valor booleano es: ${true}`);
console.log(`El valor nulo es: ${null}`);
console.log(`El valor indefinido es: ${undefined}`);
console.log(`La expresión es: ${3 + 5}`);


// También puedes usar console.debug() para imprimir mensajes de depuración.Es similar a console.log(), pero se usa típicamente para imprimir mensajes de depuración en lugar de mensajes normales.

// Con console.debug()
console.debug("¡Hola!");
console.debug(42);
console.debug("Hola mundo!");
console.debug([1, 2, 3, 4, 5]);
console.debug({ nombre: "Juan", edad: 25 });
console.debug(true);
console.debug(null);
console.debug(undefined);
console.debug(3 + 5);
