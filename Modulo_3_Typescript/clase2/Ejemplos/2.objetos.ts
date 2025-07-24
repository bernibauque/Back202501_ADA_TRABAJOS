// 1. Definicion objeto BASICO
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022
}
console.log(`Marca:${auto.marca}, Modelo: ${auto.modelo}, Anio: ${auto.anio}`);

// 2. Declaracion explicita de los tipos del objeto
let libro : {titulo: string; autor: string; anio: number} = {
    titulo: '100 anios de Soledad',
    autor: 'Garcia Marquez',
    anio: 1984
}
console.log(`Titulo:${libro.titulo}, Autor: ${libro.autor}, Anio: ${libro.anio}`);

// 3. Propiedades Opcionales
let estudiante: {nombre: string; edad?: number} = {
    nombre: "Berni", 
}
console.log(`Nombre:${estudiante.nombre}, Edad: ${estudiante.edad ?? "Desconocida"}`);

// 4. Metodos del objeto
let perro = {
    nombre: "Blaki",
    raza: "Caniche",
    ladrar: function() {
        return `${this.nombre} esta ladrando!`
    }
}
console.log(perro.ladrar());

