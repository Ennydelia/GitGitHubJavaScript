// Declaración de variables
let x = 5;
let y = 10;

// Condición if
if (x < y) {
    console.log("x es menor que y");
}

// Condición if-else
if (x > y) {
    console.log("x es mayor que y");
} else {
    console.log("x es menor o igual que y");
}

// Condición else-if
if (x > y) {
    console.log("x es mayor que y");
} else if (x === y) {
    console.log("x es igual a y");
} else {
    console.log("x es menor que y");
}

// Operador ternario
let resultado = x > y ? "x es mayor que y" : "x es menor o igual que y";
console.log(resultado);

// Switch
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miércoles":
        console.log("Hoy es miércoles");
        break;
    default:
        console.log("Hoy no es lunes, martes ni miércoles");
        break;
}
