//17. Ejecutar operación personalizada
//Tarea: Crea una función que reciba dos números y una función callback para realizar una operación.
//Tipo de función: Función de orden superior
//Ejemplo: operacion(5, 3, (a, b) => a * b) → 15


function operacion(a, b, callback) {
  return callback(a, b);
}


console.log(operacion(5, 3, (a, b) => a * b)); 
console.log(operacion(10, 4, (a, b) => a - b)); 
