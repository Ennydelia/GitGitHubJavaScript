//Definicion de una funcion llamada realizar operacion 
//Toma dos numeros (Num1 y Num2) y una funcion de calback como parametros

function realizaroperacion (num1, num2, calback){
    //Realiza una operacion simple la cual viene siendo la suma de num1 & num2
    const resultado = num1 + num2;

    //llamamos a la funcion de calback pasandole el resultado como argumento
    calback(resultado);
}

//Definicion de una funcion llamada "dividir numeros" que utiliza promesas
//Esta funcion toma dos numeros (num1 y num2) como parametros
function dividirnumeros(num1, num2){
    //Creamos una nueva promesa que va a tomar a dos argumentos los cuales van a ser resolve y reject 
    return new Promise((resolve, reject) => {
        //Verificamos si num1 y num2 es diferente de cero para asi evitar la division por cero
        if(num2 !== 0){
            // si nume2 no es cero, se resuelve la promesa con el resultado de la division 
            resolve (num1 / num2);

        }else{
            //Si num2 es cero se rechaza la promesa con un mensaje de error 
            reject("No se puede dividir por cero");
        }
    });
}

//Definicion de numero aleatorio la cual sera llamada "generarNumeroRM", la funcion usara promise & timeout
function generarNumeroRM(){
    //Se genera una nueva promesa que toma dos argumentos, resolve y reject
    return new Promise((resolve, reject) => {
        //Esperamos un segundo (1000 milisegundos) antes de continuar
        setTimeout(() => {
            //Generamos el numero random
            const numero = Math.random();
            if(numero < 0.5){
                //En el caso que el numero leido sea menor a la condicion .5
                resolve(numero);
            }else{
                //En caso que el numero leido sea mayor o igual a la condicion .5
                reject("El numero es mayor o igual a 0.5");
            } 
        }, 1000);
    });
}


//Ejemplo de uso de la funcion "RealizarOperacion"
realizaroperacion(5, 3, resultado => console.log(`El resultado es: ${resultado}`));

//Uso de la funcion "DividirNumeros" con promesas y manejo de errores
dividirnumeros(10, 2)
.then ( resultado => console.log(`El resultado de la division es: ${resultado}`))
.catch(error => console.error(`Error: ${error}`));

//Ejemplo de uso de la funcion "generarNumeroRM" con promesas y manejo de errores
generarNumeroRM(10, 2)
.then ( resultado => console.log(`El resultado del numero es: ${resultado}`))
.catch(error => console.error(`Error: ${error}`));
