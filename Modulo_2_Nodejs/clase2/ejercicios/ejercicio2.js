let estudiante = {
    nombre: "Ana Gómez",
    edad: 20,
    curso: "Programación Web",
    notas: [9, 8, 10, 7]
};

let estudianteJSON = JSON.stringify(estudiante);  // Convierte a JSON
console.log(estudianteJSON);  // Muestra la cadena JSON

let estudianteObj = JSON.parse(estudianteJSON);  // Convierte de vuelta a objeto
console.log(estudianteObj);  // Muestra el objeto
