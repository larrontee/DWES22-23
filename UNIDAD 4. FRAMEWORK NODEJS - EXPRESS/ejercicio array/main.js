const funcion = require("./contadorArray.js");

let palabras = ["hola", "mundo", "Cedula"]

let sumar = funcion.primeraPalabra(palabras);
let restar = funcion.ultimaPalabra(palabras);
let multiplicar = funcion.tamano(palabras);

console.log(sumar, restar, multiplicar)