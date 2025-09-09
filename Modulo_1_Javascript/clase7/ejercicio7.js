// Ejercicio 7 - Intercambio de Valores: 
// Declara dos variables con valores iniciales y luego intercambia sus valores. 
// Muestra los valores antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una variable temporal, 
// aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

/*
// METODO 1: Usando una Variable Temporal
// Declaración y asignación de variables con valores iniciales
let variable1 = 10;
let variable2 = 20;

// Mostrar los valores iniciales en la consola
console.log("Valores iniciales:");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);

// Intercambio de valores utilizando una variable temporal
let temp = variable1;
variable1 = variable2;
variable2 = temp;
// Se utiliza una variable temporal (temp) para almacenar temporalmente
// el valor de una de las variables, permitiendo intercambiar los valores de variable1 y variable2.

// Mostrar los valores después del intercambio en la consola
console.log("Valores después del intercambio (usando variable temporal):");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);
*/
////////////////////////////////////////////////////////////////////////////////////
/*
// METODO 2: Usando Aritmética
// Declaración y asignación de variables con valores iniciales
let variable1 = 10;
let variable2 = 20;

// Mostrar los valores iniciales en la consola
console.log("Valores iniciales:");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);

// Intercambio de valores utilizando aritmética
variable1 = variable1 + variable2;
variable2 = variable1 - variable2;
variable1 = variable1 - variable2;

// Mostrar los valores después del intercambio en la consola
console.log("Valores después del intercambio (usando aritmética):");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);
*/
//////////////////////////////////////////////////////////////////////////////////////

// METODO 3: Usando Asignación Simultánea
// Declaración y asignación de variables con valores iniciales
let variable1 = 10;
let variable2 = 20;

// Mostrar los valores iniciales en la consola
console.log("Valores iniciales:");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);

// Intercambio de valores utilizando asignación simultánea
[variable1, variable2] = [variable2, variable1];

// Mostrar los valores después del intercambio en la consola
console.log("Valores después del intercambio (usando asignación simultánea):");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);


