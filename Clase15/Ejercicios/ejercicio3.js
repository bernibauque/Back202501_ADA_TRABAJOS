let mascotas = ["Perro", "Gato", "Conejo"];
mascotas.unshift("Hámster"); // Agregamos "Hámster" al inicio
let mascotaAtendida = mascotas.shift(); // Atendemos a la primera mascota
console.log("Mascota atendida:", mascotaAtendida);
console.log("Fila actualizada:", mascotas);
// Resultado: "Mascota atendida: Hámster"
// ["Perro", "Gato", "Conejo"]

