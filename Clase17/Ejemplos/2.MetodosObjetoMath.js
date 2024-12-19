// Metodos del objeto math

// 1). Math.abs(x): Valor Absoluto:
//Encuentra la distancia desde cero en la recta numérica.
let numero = -42;
console.log(Math.abs(numero)); // Salida: 42

// 2). Math.sqrt(x); Raíz Cuadrada:
//Encuentra la raíz cuadrada de un número.
let numero2 = 25;
console.log(Math.sqrt(numero2)); // Salida: 5

// 3). Math.round(x): Redondeo
//Redondea un número al entero más cercano.
let numero3 = 4.7;
console.log(Math.round(numero3)); // Salida: 5

// 4). Math.floor(x): Redondeo hacia Abajo
//Redondea un número hacia el entero menor más cercano.
let numero4 = 4.7;
console.log(Math.floor(numero4)); // Salida: 4

//5). Math.ceil(x): Redondeo hacia Arriba
//Redondea un número hacia el entero mayor más cercano.
let numero5 = 4.3;
console.log(Math.ceil(numero5)); // Salida: 5

// 6). Math.max(...args) y Math.min(...args): Valor Máximo y Mínimo:
//Encuentra el valor máximo o mínimo en una serie de números.
let maximo = Math.max(1, 2, 3, 4, 5);
let minimo = Math.min(1, 2, 3, 4, 5);
console.log(maximo); // Salida: 5
console.log(minimo); // Salida: 1

// 7). Math.random(): Generador de Números Aleatorios:
//Genera un número aleatorio entre 0(inclusive) y 1(exclusivo)
let numeroAleatorio = Math.random();
console.log(numeroAleatorio); // Salida: un número aleatorio entre 0 y 1

// 8). Math.pow(base, exponente): Potencia
//Eleva un número a una potencia específica.
let base = 3;
let exp = 4;
console.log(Math.pow(base, exp)); // Salida: 81

// 9). Math.log(x): Logaritmo Natural
//Calcula el logaritmo natural de un número.
let numero6 = 10;
console.log(Math.log(numero6)); // Salida: 2.302585092994046

// 10). Math.log10(x): Logaritmo en Base 10
//Calcula el logaritmo en base 10 de un número.
let numero7 = 1000;
console.log(Math.log10(numero7)); // Salida: 3

// 11). Math.exp(x): Exponencial
//Calcula e con exponente x, donde e es la constante de Euler
let exponente = 2;
console.log(Math.exp(exponente)); // Salida: 7.3890560989306495

// 12). Math.sin(x), Math.cos(x), Math.tan(x): Funciones Trigonométricas
//Calcula el seno, coseno y tangente de un ángulo dado en radianes.
let angulo = Math.PI / 4; // 45 grados en radianes
console.log(Math.sin(angulo)); // Salida: 0.7071067811865475
console.log(Math.cos(angulo)); // Salida: 0.7071067811865476
console.log(Math.tan(angulo)); // Salida: 0.9999999999999999

//13). Math.asin(x), Math.acos(x), Math.atan(x): Funciones Trigonométricas Inversas
//Calcula el ángulo cuyo seno, coseno o tangente es x.
console.log(Math.asin(0.5)); // Salida: 0.5235987755982989 (aproximadamente π/6)
console.log(Math.acos(0.5)); // Salida: 1.0471975511965979 (aproximadamente π/3)
console.log(Math.atan(1));  // Salida: 0.7853981633974483 (aproximadamente π/4)


