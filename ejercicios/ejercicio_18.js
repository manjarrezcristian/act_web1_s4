//18. Validar correo electrónico
//Tarea: Crea una función que valide si una cadena es un correo electrónico básico (contiene @ y .com).
//Tipo de función: Declaración de función
//Ejemplo: esCorreo("test@example.com") → true



function esCorreo(cadena) {
  return cadena.includes("@") && cadena.endsWith(".com");
}

// Ejemplo de uso:
console.log(esCorreo("test@example.com")); // true
console.log(esCorreo("usuario@gmail"));    // false
console.log(esCorreo("example.com"));      // false
