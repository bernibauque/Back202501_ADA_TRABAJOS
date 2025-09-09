// Realizar una función que escriba una pirámide del 1 al 30 de la siguiente forma:

// Definición de la función escribirPiramide
function escribirPiramide() {
    // Crear la pirámide del 1 al 30
    for (let i = 1; i <= 30; i++) {
        // Inicializar una cadena vacía para construir cada línea
        let linea = '';

        // Añadir el número 'i' a la cadena 'linea', 'i' veces
        for (let j = 0; j < i; j++) {
            linea += i;
        }

        // Imprimir la línea completa
        console.log(linea);
    }
}

// Llamar a la función para ejecutar el código
escribirPiramide();
