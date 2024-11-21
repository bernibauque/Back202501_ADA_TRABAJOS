const prompt = require('prompt-sync')();

// Solicitamos al usuario que ingrese un color del semáforo
let color = prompt("Ingresa un color del semáforo (rojo, amarillo o verde): ").toLowerCase();

// Evaluamos el color ingresado
switch (color) {
    case "rojo":
        console.log("Alto, no puedes avanzar.");
        break;
    case "amarillo":
        console.log("Precaución, prepárate para avanzar.");
        break;
    case "verde":
        console.log("Avanza con seguridad.");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}
