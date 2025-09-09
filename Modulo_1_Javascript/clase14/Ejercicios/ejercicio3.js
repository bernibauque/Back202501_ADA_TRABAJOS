// Ejercicio 3: Funcion backEnd()
// Creá la función backEnd() que recibirá 2 números como parámetros. 
// La función deberá retornar un array con los números del 1 al 100, 
// pero teniendo en cuenta los siguientes criterios:
// 	Si el número a imprimir es múltiplo del primer parámetro que se 
// ingresó, deberá incluir el string “Back” en lugar del número.
// 	Si el número a imprimir es múltiplo del segundo parámetro 
// ingresado, deberá incluir el string “End” en su lugar del número.
// 	Si el número a imprimir es múltiplo de ambos parámetros, 
// deberá incluir el string “Back End” en lugar del número.


function backEnd(param1, param2) {
    let resultado = [];

    // Iterar del 1 al 100
    for (let i = 1; i <= 100; i++) {
        switch (true) {
            // Si i es múltiplo de param1 y param2, incluir "Back End"
            case i % param1 === 0 && i % param2 === 0:
                resultado.push("Back End");
                break;
            // Si i es múltiplo solo de param1, incluir "Back"
            case i % param1 === 0:
                resultado.push("Back");
                break;
            // Si i es múltiplo solo de param2, incluir "End"
            case i % param2 === 0:
                resultado.push("End");
                break;
            // Si i no es múltiplo de ninguno, incluir el número i
            default:
                resultado.push(i);
        }
    }

    return resultado;
}

let resultado = backEnd(2, 4);
console.log(resultado);

