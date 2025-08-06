//10. Calcular factorial
//Tarea: Crea una función que calcule el factorial de un número.
//Tipo de función: Función recursiva
//Ejemplo: factorial(5) → 120


function factorial(n) {
  if (n < 0) {
    return "El factorial no está definido para números negativos.";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


console.log(factorial(5)); // 120
