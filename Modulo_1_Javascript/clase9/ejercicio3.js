// Ejercicio 3:
// Utilizando la estructura switch, crea un programa que le pida al usuario valorar la película que acaba de ver según la siguiente escala:
//	Muy mala.
//	Mala.
//	Mediocre.
//	Buena.
//	Muy buena.
//Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás por su valoración. 
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho."
// En caso de que el usuario ingrese un valor distinto, mostrarle el mensaje: "Ingresaste un valor inválido". 
// Finalmente, agradecer al usuario por su visita.

const prompt = require('prompt-sync')();

let valoracion = prompt("Por favor, califica la película que acabas de ver según la siguiente escala: Muy mala, Mala, Mediocre, Buena, Muy buena.");

switch (valoracion) {
    case "Muy mala":
        console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
        break;
    case "Mala":
        console.log("Calificaste la película como Mala. Esperamos que la próxima sea mejor.");
        break;
    case "Mediocre":
        console.log("Calificaste la película como Mediocre. Gracias por tu feedback.");
        break;
    case "Buena":
        console.log("Calificaste la película como Buena. Nos alegra que te haya gustado.");
        break;
    case "Muy buena":
        console.log("Calificaste la película como Muy Buena. ¡Nos alegra mucho que te haya encantado!");
        break;
    default:
        console.log("Ingresaste un valor inválido.");
        break;
}

console.log("Gracias por tu visita.");
