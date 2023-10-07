// Declaramos una función que imprime un mensaje después de 2 segundos
function imprimirMensaje() {
    setTimeout(function () {
        console.log("Hola, soy un mensaje asincrónico!");
    }, 2000);
}

// Llamamos a la función para imprimir el mensaje
imprimirMensaje();

// Imprimimos un mensaje antes de que se imprima el mensaje asincrónico
console.log("Estoy imprimiendo un mensaje antes del mensaje asincrónico");
