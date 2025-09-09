let vueltas = [5, 8, 12, 3, 22];

// Calcular el total de vueltas usando reduce
let totalVueltas = vueltas.reduce((total, vuelta) => total + vuelta, 0);
console.log("Total de vueltas:", totalVueltas);

// Complejizando el ejercicio:

// 1. Añadir una nueva vuelta al principio del array
vueltas.unshift(7);
console.log("Añadir 7 al principio:", vueltas);

// 2. Eliminar la última vuelta del array y guardarla en una variable
let ultimaVuelta = vueltas.pop();
console.log("Eliminar la última vuelta:", vueltas);
console.log("Última vuelta eliminada:", ultimaVuelta);

// 3. Verificar si la vuelta 10 está en el array y agregarla al final si no está presente
if (!vueltas.includes(10)) {
    vueltas.push(10);
}
console.log("Agregar 10 si no está presente:", vueltas);

// 4. Eliminar la primera vuelta del array y guardarla en una variable
let primeraVuelta = vueltas.shift();
console.log("Eliminar la primera vuelta:", vueltas);
console.log("Primera vuelta eliminada:", primeraVuelta);

// 5. Verificar si la vuelta 15 está en el array y agregarla al principio si no está presente
if (!vueltas.includes(15)) {
    vueltas.unshift(15);
}
console.log("Agregar 15 si no está presente:", vueltas);

// 6. Calcular el nuevo total de vueltas usando reduce después de todas las operaciones
totalVueltas = vueltas.reduce((total, vuelta) => total + vuelta, 0);
console.log("Nuevo total de vueltas:", totalVueltas);


