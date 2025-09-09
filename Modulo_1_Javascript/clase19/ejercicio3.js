// Escribir un programa que muestre la sumatoria de todos
// los números entre el 0 y el 100.

function sumatoriaCien() {
    let sumatoria = 0;

    // Sumar todos los números entre 0 y 100
    for (let i = 0; i <= 100; i++) {
        sumatoria += i;
    }

    console.log(sumatoria);
}

sumatoriaCien();
