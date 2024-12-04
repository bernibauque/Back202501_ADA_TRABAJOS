const convertirCelsiusAFahrenheit = function (celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32; // Variable local
    return fahrenheit;
};
console.log(convertirCelsiusAFahrenheit(0));  // Resultado esperado: 32
console.log(convertirCelsiusAFahrenheit(25)); // Resultado esperado: 77

