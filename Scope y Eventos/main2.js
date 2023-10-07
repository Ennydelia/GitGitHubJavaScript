// Declaracion de variables con diferentes tipos de datos
let numero = 42; // Tipo number
let text = "Hola, mundo"; //Tipo string
let esVerdadero = true; // Tipo boolean
let indefinido; // tipo undefined
let numeroGrande = 123456789012345678901234567890n; //tipo bigint
let simbolo = Symbol("miSimbolo"); // Tipo symbol
let nulo = null; // tipo null

// Uso del typeof con las diferentes variables
console.log(typeof numero); // Sale numero

console.log(typeof text); // "string"
console.log(typeof esVerdadero); // "boolean"
console.log(typeof indefinido); // "undefined"
console.log(typeof numeroGrande); // "bigint"
console.log(typeof simbolo); // "symbol"
console.log(typeof nulo); // "object" (esto es un error conocido en JavaScript)


let persona = {
    nombre: "Juan",
    edad: 30,
    ocupacion: "Programacion"
};

console.log(typeof persona);

function saludar(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

saludar("Ana");