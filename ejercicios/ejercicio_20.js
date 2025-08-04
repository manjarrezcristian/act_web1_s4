//20. Calcular promedio de un arreglo
//Tarea: Crea una función que calcule el promedio de un arreglo de números.
//Tipo de función: Función flecha
//Ejemplo: promedio([10, 20, 30]) → 20


const promedio = numeros => {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((total, num) => total + num, 0);
  return suma / numeros.length;
};

// Ejemplo de uso:
console.log(promedio([10, 20, 30])); // 20
console.log(promedio([])); // 0
