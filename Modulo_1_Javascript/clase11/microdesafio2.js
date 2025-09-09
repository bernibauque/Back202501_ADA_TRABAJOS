function test2(x, y) {
    return x * 2;  // Esta línea devuelve 20 y finaliza la ejecución de la función.
    console.log(x);  // Esta línea nunca se ejecuta.
    return x / 2;    // Esta línea nunca se ejecuta.
}

console.log(test2(10));  // Esto imprime 20.

// En la función test2, el código después de la primera return no se ejecuta porque
// la instrucción return finaliza la ejecución de la función y devuelve un valor.

// Paso a paso:
// 1). La función test2 recibe el argumento x = 10 y no recibe el segundo argumento y.
// 2). Dentro de la función, la primera instrucción return x * 2 se ejecuta.
// 3). El valor de x * 2 es 10 * 2, que es 20.
// 4). La instrucción return devuelve este valor y finaliza la ejecución de la función.
// 5). Cualquier código después de la instrucción return no se ejecuta, por lo que console.log(x) y return x / 2 no se ejecutan.
// Así que cuando llamas a console.log(test2(10));, el valor 20 es devuelto por la función y luego es pasado a console.log, lo que imprime 20.