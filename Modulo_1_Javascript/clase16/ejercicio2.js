let estudiantes = [
    { nombre: 'John', promedio: 8.5, aprobado: true },
    { nombre: 'Jane', promedio: 7, aprobado: true },
    { nombre: 'June', promedio: 3, aprobado: false },
    { nombre: 'Jake', promedio: 4, aprobado: false },
    { nombre: 'Jill', promedio: 9, aprobado: true }
];

// Filtrar aprobados y desaprobados
let aprobados = estudiantes.filter(estudiante => estudiante.aprobado);
let desaprobados = estudiantes.filter(estudiante => !estudiante.aprobado);

// Manipular lista de aprobados y desaprobados
aprobados.unshift({ nombre: 'Alice', promedio: 8, aprobado: true }); // Agregar al inicio
aprobados.push({ nombre: 'Bob', promedio: 7.2, aprobado: true }); // Agregar al final
desaprobados.shift(); // Eliminar el primero
desaprobados.pop(); // Eliminar el último

// Utilizar map e indexOf en la lista de aprobados
let indiceJohn = aprobados.map(estudiante => estudiante.nombre).indexOf('John');
console.log(`El índice de John en la lista de aprobados es: ${indiceJohn}`);

// Utilizar includes en la lista de desaprobados
if (desaprobados.map(estudiante => estudiante.nombre).includes('Jake')) {
    console.log('Jake está en la lista de desaprobados.');
} else {
    console.log('Jake no está en la lista de desaprobados.');
}

// Mostrar listas actualizadas
console.log('Lista de aprobados:');
console.log(aprobados);
console.log('Lista de desaprobados:');
console.log(desaprobados);






