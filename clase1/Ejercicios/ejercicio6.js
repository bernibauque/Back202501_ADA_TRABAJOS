function calcularPromedio(numeros) {
    let suma = 0; // Inicializamos una variable para la suma

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]; // Sumamos cada elemento
    }

    return suma / numeros.length; // Calculamos el promedio
}

// Probamos la función
let calificaciones = [8, 9, 10, 7, 6];
console.log(calcularPromedio(calificaciones)); // Debe devolver 8
