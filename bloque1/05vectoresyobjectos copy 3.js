var frutas = ["manzana", "banana", "kiwi", "naranja", "pera"];

// Pedir al usuario que ingrese el nombre de la fruta a eliminar
var nombreFruta = prompt("Ingresa el nombre de la fruta a eliminar:");

// Buscar la posición de la fruta en el array
var posicionFruta = frutas.indexOf(nombreFruta);

// Verificar si la fruta se encuentra en el array
if (posicionFruta !== -1) {
  // Eliminar la fruta del array
  frutas.splice(posicionFruta, 1);
  console.log(nombreFruta + " ha sido eliminada del array de frutas.");
} else {
  console.log(nombreFruta + " no se encuentra en el array de frutas.");
}

// Mostrar el array de frutas actualizado
console.log("El array de frutas actualizado es:");
console.log(frutas);

// En este ejemplo, se le pide al usuario que ingrese el nombre de la fruta que desea eliminar.Luego, se busca la posición de la fruta en el array con el método indexOf().Si la fruta se encuentra en el array, se elimina con el método splice().Si la fruta no se encuentra en el array, se muestra un mensaje indicando que no se pudo eliminar.Finalmente, se muestra el array de frutas actualizado.