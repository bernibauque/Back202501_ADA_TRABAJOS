// Declaramos las variables para los números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Comparamos los números y mostramos el resultado
if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`El número ${numero2} es mayor que ${numero1}`);
} else {
    console.log("Ambos números son iguales");
}
