//19. Retrasar ejecución de un mensaje
//Tarea: Crea una función que imprima un mensaje después de un tiempo definido por el usuario.
//Tipo de función: Función anónima con setTimeout
//Ejemplo: retrasarMensaje("Hola", 2000) → Imprime "Hola" tras 2 segundos.


function retrasarMensaje(mensaje, tiempo) {
  setTimeout(function () {
    console.log(mensaje);
  }, tiempo);
}

// Ejemplo de uso:
retrasarMensaje("Hola", 2000); // Imprime "Hola" después de 2 segundos
