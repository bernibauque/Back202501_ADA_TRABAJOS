// SITUACIONES COTIDIANAS
// Piensa dos situaciones de la vida cotidiana e identifica las variables que conllevan.
// Luego de pensar todas esas variables con sus respectivos valores, debes escribirlas en un archivo .js 
// que esté correctamente guardado en la carpeta de trabajo armaste en clases pasadas (“ADA_TRABAJOS”). 
// Dentro de esa carpeta debe estar la carpeta “clase6” y colocar allí tu archivo con extensión .js 

// Situación: Compra de ingredientes para una comida en casa
const prompt = require("prompt-sync")(); // OBLIGATORIA

// Paso 1: Pedir presupuesto disponible al usuario
let presupuesto = prompt("Ingrese su presupuesto disponible: ");

// Definición de precios por unidad
let precioPollo = 5.0;
let precioPapas = 2.0;
let precioCebolla = 1.5;

// Paso 2: Pedir cantidad de cada ingrediente al usuario
let cantidadPollo = prompt("Ingrese la cantidad de pollo que desea comprar: ");
let cantidadPapas = prompt("Ingrese la cantidad de papas que desea comprar: ");
let cantidadCebolla = prompt("Ingrese la cantidad de cebolla que desea comprar: ");

// Paso 3: Calcular el total gastado
let totalGastado = (cantidadPollo * precioPollo) + (cantidadPapas * precioPapas) + (cantidadCebolla * precioCebolla);

// Paso 4: Mostrar resultados por consola
console.log("Presupuesto disponible: $" + presupuesto);
console.log("Total gastado en ingredientes: $" + totalGastado);
