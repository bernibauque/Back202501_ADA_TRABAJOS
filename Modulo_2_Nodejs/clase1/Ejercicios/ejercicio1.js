function personasQuePuedenEntrar(edades) {
    let contador = 0; // Inicializamos un contador

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] > 12 && edades[i] < 60) {
            contador++; // Incrementamos el contador si la edad está en el rango
        }
    }

    return contador; // Retornamos el número total de personas
}

// Probamos la función
let edades = [10, 15, 35, 65, 12, 59];
console.log(personasQuePuedenEntrar(edades)); // Debe devolver 4
