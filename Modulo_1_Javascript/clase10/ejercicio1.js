// Ejercicio 1
// Declará las variables vehiculo y litrosConsumidos. 
//A continuación, realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:
// Si el vehículo es “coche”, el precio por litro es de $86.
// Si el vehículo es “moto”, el precio por litro es de $70.
// Si el vehículo es “autobús”, el precio por litro es de $55.
// Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// Si los litros consumidos son mayores a 25, se ha de añadir $25 al total a pagar.
// Finalmente, imprimí en consola el total a pagar.

let vehiculo = "moto";
let litrosConsumidos = 30;

let precioPorLitro;
let total;

switch (vehiculo) {
    case "coche":
        precioPorLitro = 86;
        break;
    case "moto":
        precioPorLitro = 70;
        break;
    case "autobús":
        precioPorLitro = 55;
        break;
    default:
        console.log("Vehículo no válido");
        precioPorLitro = 0; // Evitamos cálculo si el vehículo es inválido
        break;
}

if (precioPorLitro > 0) {
    total = precioPorLitro * litrosConsumidos;

    if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
        total += 50;
    } else if (litrosConsumidos > 25) {
        total += 25;
    }

    console.log("El total a pagar es: $" + total);
}



