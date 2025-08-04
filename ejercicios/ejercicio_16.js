//16. Sumar argumentos variables
//Tarea: Crea una función que sume un número variable de argumentos.
//Tipo de función: Función flecha con parámetro rest
//Ejemplo: sumar(1, 2, 3, 4) → 10


const sumar = (...numeros) => {
  return numeros.reduce((total, actual) => total + actual, 0);
};

// Ejemplo de uso:
console.log(sumar(1, 2, 3, 4)); // 10
