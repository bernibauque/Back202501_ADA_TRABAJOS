// Ejercicio 5:
// Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.


let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(`El número mayor es ${num1}.`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`El número mayor es ${num2}.`);
} else {
    console.log(`El número mayor es ${num3}.`);
}
