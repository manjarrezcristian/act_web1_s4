//14. Generar un ID único
//Tarea: Crea una función que genere un ID único basado en un contador interno.
//Tipo de función: IIFE con closure
//Ejemplo: generarId() → 1, generarId() → 2

const generarId = (function () {
  let id = 0; // contador interno privado

  return function () {
    return ++id;
  };
})();

// Ejemplo de uso:
console.log(generarId()); // 1
console.log(generarId()); // 2
console.log(generarId()); // 3
