//2. Saludar con nombre por defecto
//Tarea: Crea una función que salude a una persona por su nombre. Si no se proporciona un nombre, usa "Invitado".
//Tipo de función: Expresión de función
//Ejemplo: saludar() → ¡Hola, Invitado!




const saludo = function(nombre = "alguien ") {
  return "hola, " + nombre + "bienvenido";
};

console.log(saludo());           // hola, alguien
console.log(saludo("cristian "));  // hola, cristian bienvenido