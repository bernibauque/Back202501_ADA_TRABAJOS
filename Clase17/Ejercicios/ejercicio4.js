const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese una lista de nombres separados por comas.
// Los nombres deben ser: Julia, Maria, Malena, Andrea, Pablo, Pedro
let nombresEntrada = prompt("Ingresa una lista de nombres separados por comas:");

// Función para transformar y analizar la lista de nombres
function transformarYAnalizarNombres(nombresEntrada) {
    // 1. Quitar los espacios en blanco alrededor de cada nombre
    let nombres = nombresEntrada.split(",").map(nombre => nombre.trim());

    // 2. Verificar si existe el nombre "Juan"
    let existeJuan = nombres.includes("Juan");

    // 3. Reemplazar todos los nombres "María" por "Ana"
    let nombresModificados = nombres.map(nombre => nombre === "María" ? "Ana" : nombre);

    // 4. Encontrar el índice del nombre "Pedro"
    let indicePedro = nombresModificados.indexOf("Pedro");

    // 5. Devolver una cadena de nombres en orden alfabético separados por puntos
    let nombresOrdenados = nombresModificados.sort().join(".");

    // Devolver los resultados como un objeto
    return {
        nombres: nombresModificados,
        existeJuan,
        indicePedro,
        nombresOrdenados
    };
}

// Llamada a la función y mostrar el resultado
let resultado = transformarYAnalizarNombres(nombresEntrada);
console.log("Resultado:", resultado);
