let a = 5;
let b = 10;

console.log("Antes del intercambio: a =", a, ", b =", b);

[a, b] = [b, a];  // Intercambio usando desestructuración.

console.log("Después del intercambio: a =", a, ", b =", b);
