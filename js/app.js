// La función console.log en Javascript nos muestra lo que le enviamosen los parámetros por la consola
alert("Hello World");

// Variables en Javascript: datos almacenados en memoria que pueden modificar su valor
var nombre = "Martín";
console.log(nombre);

nombre = "Ezequiel";
console.log(nombre);

// Constantes en Javascript: Datos almacenados en memoria que no pueden modificar el valor
const FECHA_NACIMIENTO = "23/08/96";
console.log(FECHA_NACIMIENTO);

// Funciones en Javascript: Bloque de código que se ejecuta al llamarse.
// Puede pedir parámetros de entrada para poder ejecutar alguna acción.
// Si quiero devolver un valor de resultado utilizo la palabra return

// Funcion Flecha
const calcularSuma = (numero1, numero2) => numero1  + numero2;

//calcularSuma(30,8);

// Como pedir datos desde una ventana en la web: prompt
// Si equiero cambiar el resultado a numero, debo usar la funcion parseInt


//Con un alert muestro en una ventana emergente un mensaje
var edad = parseInt(prompt("Ingrese su edad"));
alert("La edad del usuario es: " + edad);

const form = document.getElementById("form");

// El addEventListner es un metodo de js que nos permite escuchar los eventos, detenerlos y hacer algo con los datos
form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("nombre").value;
    console.log("El usuario ingresó el nombre: " + name)
    const h1 = document.getElementById("h1");
    h1.innerHTML = "Hola " + name;
})

// Estructuras condicionales en Javascript


