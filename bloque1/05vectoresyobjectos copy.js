var frutas = ["manzana", "banana", "naranja", "kiwi"];

// Acceder a elementos del array por su índice
console.log(frutas[0]); // manzana
console.log(frutas[2]); // naranja

// Modificar un elemento del array por su índice
frutas[1] = "piña";
console.log(frutas); // ["manzana", "piña", "naranja", "kiwi"]

// Añadir un elemento al final del array
frutas.push("mango");
console.log(frutas); // ["manzana", "piña", "naranja", "kiwi", "mango"]

// Eliminar el último elemento del array
frutas.pop();
console.log(frutas); // ["manzana", "piña", "naranja", "kiwi"]

// Longitud del array
console.log(frutas.length); // 4

// Comprobar si un elemento está en el array
console.log(frutas.includes("manzana")); // true
console.log(frutas.includes("pera")); // false

// En este ejemplo, el array frutas contiene diferentes nombres de frutas.Luego se realizan diferentes operaciones sobre el array, como acceder a elementos por su índice, modificar un elemento, añadir un elemento al final, eliminar el último elemento, obtener la longitud del array y comprobar si un elemento se encuentra en el array mediante el método includes().