const datos = [2, -4, 6, 0, 5, -1];

// Paso 1: Filtrar los números negativos
const positivos = datos.filter(num => num >= 0);

// Paso 2: Obtener el doble de cada número
const dobles = positivos.map(num => num * 2);

// Paso 3: Obtener la suma de todos los números
const total = dobles.reduce((acumulador, num) => acumulador + num, 0);

console.log(total); // Debería mostrar 30
