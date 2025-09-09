function esPalindromo(cadena) {
    // Eliminar todos los caracteres que no sean letras o números y convertir a minúsculas
    let cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Invertir la cadena limpia
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');

    // Comparar la cadena limpia con su versión invertida
    return cadenaLimpia === cadenaInvertida;
}

// Ejemplos de uso
console.log(esPalindromo("A man, a plan, a canal, Panama")); // true
console.log(esPalindromo("No 'x' in Nixon")); // true
console.log(esPalindromo("Esto no es un palíndromo")); // false

// Explicacion:
// Para determinar si una cadena es un palíndromo, primero eliminamos todos los caracteres
// que no sean letras o números y convertimos la cadena resultante a minúsculas utilizando
// replace(/[^a-zA-Z0-9]/g, '').toLowerCase(). Luego, invertimos la cadena limpia con
// split('').reverse().join('') y comparamos la cadena original limpia con su versión invertida.
// Si ambas son iguales, la cadena es un palíndromo. 