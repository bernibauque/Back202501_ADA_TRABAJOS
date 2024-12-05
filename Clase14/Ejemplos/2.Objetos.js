// Definimos un objeto literal llamado "coche"
const coche = {
    marca: "Toyota",         // Propiedad: marca del coche
    modelo: "Corolla",       // Propiedad: modelo del coche
    año: 2022,               // Propiedad: año del coche
    color: "rojo",           // Propiedad: color del coche

    // Método que usa "this" para describir el coche
    describir: function () {
        // Aquí, "this" hace referencia al objeto "coche"
        return `Este coche es un ${this.marca} ${this.modelo} del año ${this.año} y de color ${this.color}.`;
    }
};

// Llamada al método "describir" del objeto "coche"
console.log(coche.describir());
// "Este coche es un Toyota Corolla del año 2022 y de color rojo."

// Accediendo directamente a las propiedades del objeto
console.log(coche.marca);   // "Toyota"
console.log(coche.modelo);  // "Corolla"
console.log(coche.año);     // 2022
console.log(coche.color);   // "rojo"

/*
Estructura del Objeto Literal
variable nombreObjeto = {
    propiedad1 : valor1,
    propiedad2 : valor2,
    propiedad3 : valor3,
    nombreMetodo: function () {
    return logica
    }
}
*/