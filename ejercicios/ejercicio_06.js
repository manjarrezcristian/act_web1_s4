//6. Filtrar números mayores a 10
//Tarea: Crea una función que reciba un arreglo y devuelva solo los números mayores a 10.
//Tipo de función: Función de orden superior
//Ejemplo: filtrarMayores([5, 12, 8, 15]) → [12, 15]






function filtro_mayor(numeros) {return numeros.filter(numero => numero > 10);}

// Ejemplo de uso:
const resultado = filtro_mayor([5, 12, 8, 15]);
console.log(resultado); 
