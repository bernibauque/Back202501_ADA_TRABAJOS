// Crea una función expresada llamada encontrarMayor que reciba
// dos números como parámetros y devuelva el número mayor.
const encontrarMayor = function (a, b) {
    if (a > b) {
        return a; // Devuelve a si es mayor
    } else {
        return b; // Devuelve b si es mayor o igual
    }
};
console.log(encontrarMayor(8, 15)); // Resultado esperado: 15

