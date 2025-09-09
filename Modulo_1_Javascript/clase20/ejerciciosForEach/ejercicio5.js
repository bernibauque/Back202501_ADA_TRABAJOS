const notasDeTPs = [4, 7, 8, 5, 10];
let suma = 0;

// Calcula la suma de todas las notas
notasDeTPs.forEach((nota) => {
    suma += nota;
});

// Calcula la nota promedio final
let notaFinal = suma / notasDeTPs.length;

console.log(notaFinal); // debería mostrar 6.8



