const personas = [
    { nombre: "Grace", edad: 6 },
    { nombre: "Ada", edad: 19 },
    { nombre: "Hedy", edad: 34 }
];

const sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);

console.log(sumaEdades); // Debería mostrar 59



