// Propiedades del objeto Math

//1). Math.PI:
//Calcular la circunferencia un circulo dado su radio
let radio = 7;
let circunferencia = 2 * Math.PI * radio;
//console.log(circunferencia); // Salida: 43.982297150257104
//Calcular el area de un circulo usando su radio
let radio2 = 7;
let area = Math.PI * Math.pow(radio2, 2);
//console.log(area); // salida: 153.93804002589985

//2). Math.E
// Simula el crecimiento exponencial una inversion con interes compuesto
let principal = 1000 // cantidad principal
let tasa = 0.05 // Tasa de interes anual
let tiempo = 5 // tiempo en anios
let monto = principal * Math.exp(tasa * tiempo);
//console.log(monto); // Salida: 1284.0254166877414

//3). Math.LN2
// Buscar el logaritmo natural de base 2
let ln2 = Math.log(Math.E) / Math.LN2;
//console.log(ln2) // salida: 1.4426950408889634

//4). Math.LN10
// Buscar el logaritmo en base 10
let ln10 = Math.log10(10) * Math.LN10;
//console.log(ln10); // salida: 2.302585092994046

//5). Math.LOG2E
// Buscar el logaritmo en base 2 de e
let l0g2E = Math.LOG2E;
//console.log(l0g2E); // salida: 1.4426950408889634

//6). Math.LOG10E
// Buscar el logaritmo en base 10 de e
let l0g10E = Math.LOG10E;
//console.log(l0g10E);

//7). Math.SQRT2
//Calcular la raiz cuadrada de 2
let raiz2 = Math.SQRT2;
//console.log(raiz2);

//8). Math.SQRT1_2
//Calcular la raiz cuadrada de 2
let raiz1_2 = Math.SQRT1_2;
console.log(raiz1_2);


