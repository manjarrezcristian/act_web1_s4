//15. Invertir una cadena
//Tarea: Crea una función que invierta una cadena de texto.
//Tipo de función: Función recursiva
//Ejemplo: invertir("hola") → aloh


function invertir(cadena) {
  if (cadena.length <= 1) {
    return cadena;
  } else {
    return invertir(cadena.slice(1)) + cadena[0];
  }
}


console.log(invertir("hola")); 
