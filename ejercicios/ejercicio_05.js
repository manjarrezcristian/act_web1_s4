//Contar vocales en una cadena
//Tarea: Crea una función que cuente las vocales (a, e, i, o, u) en una cadena.
//Tipo de función: Función recursiva
//Ejemplo: contarVocales("hola") → 2

function contador_letras(cadena) {
  if (cadena.length === 0) return 0;

  const primera = cadena[0].toLowerCase();
  const esVocal = "aeiou".includes(primera) ? 1 : 0;

  return esVocal + contador_letras(cadena.slice(1));
}

console.log(contador_letras("hola"));       // 2
console.log(contador_letras("murcielago")); // 5
