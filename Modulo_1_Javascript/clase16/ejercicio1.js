let horariosPartida = [12, 14, 18, 21];

// Adelantar una hora cada partida usando map y almacenar en una nueva lista
let horariosAtrasados = horariosPartida.map(horario => horario - 1);

// Añadir un nuevo horario al principio de la lista
horariosPartida.unshift(10);

// Eliminar el último horario de la lista y guardarlo en ultimoHorario
let ultimoHorario = horariosPartida.pop();

// Verificar si el horario 14 está en la lista y agregarlo al final si no está presente
if (!horariosPartida.includes(14)) {
    horariosPartida.push(14);
}

// Encontrar la posición del horario 18 y eliminarlo si está presente
let indice18 = horariosPartida.indexOf(18);
if (indice18 !== -1) {
    horariosPartida.splice(indice18, 1);
}

// Añadir el horario eliminado (ultimoHorario) al final de la nueva lista de horarios atrasados
horariosAtrasados.push(ultimoHorario - 1); // adelantado una hora

// Mostrar la lista final de horarios atrasados
console.log("Horarios atrasados:", horariosAtrasados);

// Eliminar el primer elemento de la lista de horarios atrasados
horariosAtrasados.shift();

// Verificar si el horario 9 está en la lista y agregarlo al principio si no está presente
if (!horariosAtrasados.includes(9)) {
    horariosAtrasados.unshift(9);
}

// Mostrar la lista final después de todas las operaciones
console.log("Horarios atrasados finales:", horariosAtrasados);

