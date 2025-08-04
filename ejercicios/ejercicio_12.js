//12. Multiplicar elementos de un arreglo
//Tarea: Crea una función que multiplique todos los números de un arreglo.
//Tipo de función: Función de orden superior
//Ejemplo: multiplicarArreglo([2, 3, 4]) → 24

function multiplicarArreglo(numeros) {
  return numeros.reduce((acumulador, actual) => acumulador * actual, 1);
}

// Ejemplo de uso:
console.log(multiplicarArreglo([2, 3, 4])); // 24
