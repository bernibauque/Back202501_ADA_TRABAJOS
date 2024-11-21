const prompt = require('prompt-sync')();

// Solicitamos al usuario dos números
let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));

// Solicitamos la operación
let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicación, división): ").toLowerCase();

// Realizamos la operación utilizando switch
switch (operacion) {
    case "suma":
        console.log(`El resultado de la suma es: ${numero1 + numero2}`);
        break;
    case "resta":
        console.log(`El resultado de la resta es: ${numero1 - numero2}`);
        break;
    case "multiplicación":
        console.log(`El resultado de la multiplicación es: ${numero1 * numero2}`);
        break;
    case "división":
        if (numero2 !== 0) {
            console.log(`El resultado de la división es: ${numero1 / numero2}`);
        } else {
            console.log("Error: No se puede dividir entre 0.");
        }
        break;
    default:
        console.log("Operación no reconocida. Por favor, elige suma, resta, multiplicación o división.");
}
