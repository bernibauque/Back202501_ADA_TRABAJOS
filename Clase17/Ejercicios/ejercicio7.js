// Lista predefinida de nombres de flores
let entrada = "Rosa, Tulipán, Orquídea, Lirio";

// Función "gestionarFloreria" que realiza las tareas solicitadas
function gestionarFloreria(listaDeFlores) {
    // 1. Quitar los espacios en blanco alrededor de cada flor
    let flores = listaDeFlores.split(',').map(flor => flor.trim());

    // 2. Verificar si existe la flor "Margarita" y agregar "Azucena" si está presente
    let tieneMargarita = flores.includes("Margarita");
    if (tieneMargarita) {
        flores.push("Azucena");
        console.log("La lista contiene la flor 'Margarita'. Se agregó 'Azucena' al final.");
    } else {
        console.log("La lista no contiene la flor 'Margarita'.");
    }

    // 3. Reemplazar todas las flores "Orquídea" por "Clavel"
    flores = flores.map(flor => flor === "Orquídea" ? "Clavel" : flor);

    // 4. Encontrar el índice de la flor "Girasol" y agregar "Girasol" al inicio si no está presente
    let indiceGirasol = flores.indexOf("Girasol");
    if (indiceGirasol !== -1) {
        console.log(`El índice de la flor 'Girasol' es: ${indiceGirasol}`);
    } else {
        flores.unshift("Girasol");
        console.log("La flor 'Girasol' no estaba en la lista. Se agregó al inicio.");
    }

    // 5. Devolver una cadena de flores en orden alfabético separadas por puntos
    flores.sort();
    let resultado = flores.join('.');
    return resultado;
}

// Llamar a la función con la lista predefinida y mostrar el resultado
let resultado = gestionarFloreria(entrada);
console.log(`Flores ordenadas alfabéticamente separadas por puntos: ${resultado}`);

