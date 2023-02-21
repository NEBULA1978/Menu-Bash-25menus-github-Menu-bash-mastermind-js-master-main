var frutas = [];

// Pedir al usuario que ingrese el nombre de las frutas
for (var i = 1; i <= 5; i++) {
  var nombreFruta = prompt("Ingresa el nombre de la fruta #" + i);
  frutas.push(nombreFruta);
}

// Mostrar el array de frutas
console.log("Las frutas ingresadas son:");
console.log(frutas);

// Pedir al usuario que ingrese el índice de la fruta a eliminar
var indiceEliminar = parseInt(prompt("Ingresa el índice de la fruta que deseas eliminar"));

// Eliminar la fruta del array
if (indiceEliminar >= 0 && indiceEliminar < frutas.length) {
  frutas.splice(indiceEliminar, 1);
  console.log("La fruta ha sido eliminada.");
} else {
  console.log("El índice ingresado no es válido.");
}

// Mostrar el array de frutas actualizado
console.log("Las frutas restantes son:");
console.log(frutas);
