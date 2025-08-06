//9. Crear un contador privado
//Tarea: Crea una función que devuelva otra función para contar incrementos,
//  manteniendo el contador privado.
//Tipo de función: IIFE con closure
//Ejemplo: contador() → 0, contador() → 1


const contador = (function () {
  let cuenta = 0; // variable privada

  return function () {
    return cuenta++;
  };
})();


console.log(contador()); 
console.log(contador()); 
console.log(contador()); 
