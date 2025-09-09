// Metodos de Objetos: Acciones que realiza
let curso = {
    cantidadDeAlumnas: 32,
    docentes: ["Berni", "Mariana"],
    horario: "de 19 a 22 hs.",
    notificaciones: function () {
        return "El horario de cursada es de 19 a 21 hs."
    }
}

console.log(curso.notificaciones());

// Cuando ya tenemos definida la propiedade:
let curso2 = {
    cantidadDeAlumnas: 32,
    docentes: ["Berni", "Mariana"],
    horario: "de 19 a 22 hs.",
    notificaciones: function () {
        return "El horario de cursada es " + curso.horario;
    }
}

console.log(curso2.notificaciones());

// Palabra reservada This: Buena practica
let curso3 = {
    cantidadDeAlumnas: 32,
    docentes: ["Berni", "Mariana"],
    horario: "de 19 a 22 hs.",
    notificaciones: function () {
        return "El horario de cursada es " + this.horario;
    }
}

console.log(curso3.notificaciones());

