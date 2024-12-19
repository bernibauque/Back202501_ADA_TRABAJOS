// Propiedades del Objeto Math

// 1). Math.PI:
// Ejemplo 1: Calcula la circunferencia de un círculo dado su radio.
let radio = 7;
let circunferencia = 2 * Math.PI * radio;
console.log(circunferencia); // Salida: 43.982297150257104

//Ejemplo 2: Calcula el área de un círculo usando el radio.
let radio2 = 7;
let area = Math.PI * Math.pow(radio2, 2);
console.log(area); // Salida: 153.93804002589985

// 2). Math.E
//Ejemplo: Cálculo de Crecimiento Exponencial:
//Simula el crecimiento exponencial de una inversión a un interés compuesto continuo.
let principal = 1000; // Cantidad inicial
let tasa = 0.05; // Tasa de interés anual
let tiempo = 5; // Tiempo en años
let monto = principal * Math.exp(tasa * tiempo);
console.log(monto); // Salida: 1284.025416687741

// Ejemplo: Cálculo del Logaritmo Natural de 2
// Usa la propiedad Math.LN2 para encontrar el logaritmo natural de 2.
let logaritmoNatural2 = Math.log2(Math.E); // ln(2) es aproximadamente igual a 0.6931471805599453
console.log(logaritmoNatural2); // Salida: 0.6931471805599453

// 4). Math.LN10
// Ejemplo: Cálculo del Logaritmo Natural de 10
// Usa la propiedad Math.LN10 para encontrar el logaritmo natural de 10.
let logaritmoNatural10 = Math.log10(10); // ln(10) es aproximadamente igual a 2.302585092994046
console.log(logaritmoNatural10); // Salida: 2.302585092994046

// 5). Math.LOG2E
// Ejemplo: Cálculo del Logaritmo en Base 2 de e
// Usa la propiedad Math.LOG2E para encontrar el logaritmo en base 2 de e.
let logaritmoBase2E = Math.LOG2E; // Log2(e) es aproximadamente igual a 1.4426950408889634
console.log(logaritmoBase2E); // Salida: 1.4426950408889634

// 6). Math.LOG10E
// Ejemplo: Cálculo del Logaritmo en Base 10 de e
// Usa la propiedad Math.LOG10E para encontrar el logaritmo en base 10 de e.
let logaritmoBase10E = Math.LOG10E; // Log10(e) es aproximadamente igual a 0.4342944819032518
console.log(logaritmoBase10E); // Salida: 0.4342944819032518

// 7). Math.SQRT2
// Ejemplo: Cálculo de la Raíz Cuadrada de 2
// Usa la propiedad Math.SQRT2 para calcular la raíz cuadrada de 2.
let raizCuadrada2 = Math.SQRT2; // La raíz cuadrada de 2 es aproximadamente igual a 1.4142135623730951
console.log(raizCuadrada2); // Salida: 1.4142135623730951

// 8). Math.SQRT1_2
// Ejemplo: Cálculo de la Raíz Cuadrada de 1/2
// Usa la propiedad Math.SQRT1_2 para calcular la raíz cuadrada de 1/2.
let raizCuadrada1_2 = Math.SQRT1_2; // La raíz cuadrada de 1/2 es aproximadamente igual a 0.7071067811865476
console.log(raizCuadrada1_2); // Salida: 0.7071067811865476

