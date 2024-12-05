// Ejercicio 8: Funcion backEnd()
// Creá la función backEnd() que recibirá 2 números como parámetros. 
// La función deberá retornar un array con los números del 1 al 100, 
// pero teniendo en cuenta los siguientes criterios:
// 	Si el número a imprimir es múltiplo del primer parámetro que se 
// ingresó, deberá incluir el string “Back” en lugar del número.
// 	Si el número a imprimir es múltiplo del segundo parámetro 
// ingresado, deberá incluir el string “End” en su lugar del número.
// 	Si el número a imprimir es múltiplo de ambos parámetros, 
// deberá incluir el string “Back End” en lugar del número.


function backEnd(num1, num2) {
    // Creamos un array vacío que llenaremos con los valores adecuados
    let resultado = [];

    // Recorremos los números del 1 al 100
    for (let i = 1; i <= 100; i++) {
        // Comprobamos si el número es múltiplo de ambos parámetros
        if (i % num1 === 0 && i % num2 === 0) {
            resultado[i - 1] = "Back End";  // Si es múltiplo de ambos, añadimos "Back End"
        }
        // Si es múltiplo solo del primer parámetro
        else if (i % num1 === 0) {
            resultado[i - 1] = "Back";  // Si es múltiplo de num1, añadimos "Back"
        }
        // Si es múltiplo solo del segundo parámetro
        else if (i % num2 === 0) {
            resultado[i - 1] = "End";  // Si es múltiplo de num2, añadimos "End"
        }
        // Si no es múltiplo de ninguno, dejamos el número
        else {
            resultado[i - 1] = i;  // El número mismo se mantiene
        }
    }

    // Retornamos el array resultante
    return resultado;
}

// Llamamos a la función con los números 3 y 5 como parámetros
console.log(backEnd(3, 5));


