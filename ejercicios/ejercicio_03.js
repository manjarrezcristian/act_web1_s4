//3. Sumar elementos de un arreglo
//Tarea: Crea una función que sume todos los números de un arreglo.
//Tipo de función: Función flecha
//Ejemplo: sumarArreglo([1, 2, 3]) → 6

const sumarArreglo = arr => arr.reduce((a, b) => a + b, 0);
console.log(sumarArreglo([1, 2, 3])); // 6
console.log(sumarArreglo([10, -5, 7])); // 12
