// Ejercicio 2
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.

let palabra = "casa"; // Ejemplo de palabra ingresada por el usuario

switch (palabra) {
    case "casa":
        console.log("house");
        break;
    case "perro":
        console.log("dog");
        break;
    case "pelota":
        console.log("ball");
        break;
    case "árbol":
        console.log("tree");
        break;
    case "genio":
        console.log("genius");
        break;
    default:
        console.log("La palabra ingresada es incorrecta.");
        break;
}
