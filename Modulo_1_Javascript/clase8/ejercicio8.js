// Ejercicio 8:
// Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
// Determina y muestra si el triángulo es equilátero, isósceles o escaleno.

let lado1 = parseFloat(prompt("Ingresa la longitud del primer lado:"));
let lado2 = parseFloat(prompt("Ingresa la longitud del segundo lado:"));
let lado3 = parseFloat(prompt("Ingresa la longitud del tercer lado:"));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("El triángulo es isósceles.");
} else {
    console.log("El triángulo es escaleno.");
}
