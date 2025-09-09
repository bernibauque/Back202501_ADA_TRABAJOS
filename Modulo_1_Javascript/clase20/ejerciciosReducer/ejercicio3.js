const notasDeTPs = [4, 7, 8, 5, 10];

// Calcular la suma total de las notas
const sumaTotal = notasDeTPs.reduce((acumulador, nota) => acumulador + nota, 0);

// Calcular el promedio dividiendo la suma total por la cantidad de notas
const promedio = sumaTotal / notasDeTPs.length;

console.log(promedio); // Debería mostrar 6.8
