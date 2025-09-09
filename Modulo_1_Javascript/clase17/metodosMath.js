//1. Math.abs(x): Valor absoluto
// Encontrar la distancia entre 0 y el numero en la recta numerica
let numero = -42
console.log(Math.abs(numero));

//2. Math.sqrt(x): Raiz cuadrada
// Encontrar la raiz cuadrada de un numero
let numero2 = -25;
console.log(Math.sqrt(numero2));

//3. Math.round(x): Redondeo
//Redondear un numero al entero mas cercano 
let numero3 = 4.7;
console.log(Math.round(numero3));

//4. Math.floor(x): Redondeo
//Redondear para abajo 
let numero4 = 4.7;
console.log(Math.floor(numero4));

//5. Math.ceil(x): Redondeo
//Redondear para arriba
let numero5 = 4.7;
console.log(Math.ceil(numero5));

//6 y 7. Math.max(a, b ...) y Math.min(a, b ...)
//Encuentre el max y min en una serie de numeros.
let maximo = Math.max(1, 2, 3, 4, 5);
let minimo = Math.min(1, 2, 3, 4, 5);
console.log(maximo);
console.log(minimo);

//8. Math.random() Numero aleatorio entre 0 y 1
let aleatorio = Math.random();
console.log(aleatorio);

// 9. Math.pow(base, exponente): Potencia
//Eleva un número a una potencia específica.
let base = 3;
let exponente1 = 4;
console.log(Math.pow(base, exponente1)); // Salida: 81

// 10. Math.log(x): Logaritmo Natural
//Calcula el logaritmo natural de un número.
let numero6 = 10;
console.log(Math.log(numero6)); // Salida: 2.302585092994046

// 11. Math.log10(x): Logaritmo en Base 10
//Calcula el logaritmo en base 10 de un número.
let numero7 = 1000;
console.log(Math.log10(numero7)); // Salida: 3

// 12. Math.exp(x): Exponencial
//Calcula e con exponente x, donde e es la constante de Euler
let exponente3 = 2;
console.log(Math.exp(exponente3)); // Salida: 7.3890560989306495

// 13, 14 y 15. Math.sin(x), Math.cos(x), Math.tan(x): Funciones Trigonométricas
//Calcula el seno, coseno y tangente de un ángulo dado en radianes.
let angulo = Math.PI / 4; // 45 grados en radianes
console.log(Math.sin(angulo)); // Salida: 0.7071067811865475
console.log(Math.cos(angulo)); // Salida: 0.7071067811865476
console.log(Math.tan(angulo)); // Salida: 0.9999999999999999

//16, 17 y 18. Math.asin(x), Math.acos(x), Math.atan(x): Funciones Trigonométricas Inversas
//Calcula el ángulo cuyo seno, coseno o tangente es x.
console.log(Math.asin(0.5)); // Salida: 0.5235987755982989 (aproximadamente π/6)
console.log(Math.acos(0.5)); // Salida: 1.0471975511965979 (aproximadamente π/3)
console.log(Math.atan(1));  // Salida: 0.7853981633974483 (aproximadamente π/4)

