// Ejemplo: Determinar el dia de la semana segun un numero

// Paso 1: Declaramos una variable con un numero que representa el dia de la
// semana 
let diaNumero = 10;

// Paso 2: Usamos un switch para determinar el dia correspondiente
let diaNombre; // Declaramos una variable para que me guarde el nombre del dia

switch (diaNumero) {
    case 1: // si diaNumero es 1
        diaNombre = "Lunes";
        break; // salimos del switch
    case 2: // si diaNumero es 2
        diaNombre = "Martes";
        break; // salimos del switch
    case 3: // si diaNumero es 3
        diaNombre = "Miercoles";
        break; // salimos del switch
    case 4: // si diaNumero es 4
        diaNombre = "Jueves";
        break; // salimos del switch
    case 5: // si diaNumero es 5
        diaNombre = "Viernes";
        break; // salimos del switch
    case 6: // si diaNumero es 6
        diaNombre = "Sabado";
        break; // salimos del switch
    case 7: // si diaNumero es 7
        diaNombre = "Domingo";
        break; // salimos del switch
    default: // Si diaNumero no es ni del 1 al 7
        diaNombre = "Numero invalido. Debe ser del 1 al 7";
}

// Paso 3: Imprimo en consola
console.log(diaNombre);
