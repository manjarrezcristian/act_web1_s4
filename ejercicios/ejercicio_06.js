//6. Filtrar números mayores a 10
//Tarea: Crea una función que reciba un arreglo y devuelva solo los números mayores a 10.
//Tipo de función: Función de orden superior
//Ejemplo: filtrarMayores([5, 12, 8, 15]) → [12, 15]






function filtrarMayores(numeros) {
  return numeros.filter(numero => numero > 10);
}

// Ejemplo de uso:
const resultado = filtrarMayores([5, 12, 8, 15]);
console.log(resultado); // [12, 15]
