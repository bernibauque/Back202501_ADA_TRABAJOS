// archivo: ejercicio6.ts
let valorDesconocido: unknown;

valorDesconocido = "Texto";
if (typeof valorDesconocido === "string") {
  console.log(`El valor es una cadena: ${valorDesconocido}`);
}

valorDesconocido = 42;
if (typeof valorDesconocido === "number") {
  console.log(`El valor es un número: ${valorDesconocido}`);
}
