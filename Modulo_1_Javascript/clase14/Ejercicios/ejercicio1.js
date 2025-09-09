// Ejercicio 1: El desportista
// Para este ejercicio deberán definir un objeto literal “deportista”, 
// con los siguientes atributos: nombre, energía, experiencia.
// Ademas queremos poder pedirle al deportista que entrene. Para esto, 
// nuestro trabajo va a ser realizar una función “entrenarHoras.”
// La función entrenarHoras tiene las siguientes tres características:
// 	Recibe por parámetro la cantidad de horas.
// 	Resta a su energía (this.energia) la cantidad de horas x 5.
// 	Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
// Una vez definida la función, podemos ejecutar el código y ver cómo 
// va variando la energía y experiencia del deportista por consola.


// Definición del objeto deportista
let deportista = {
    energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    // Método para entrenar horas
    entrenarHoras: function (n) {
        // Resta la energía según las horas entrenadas
        this.energia = this.energia - (n * 5);
        // Incrementa la experiencia según las horas entrenadas
        this.experiencia = this.experiencia + (n * 2);
    }
};

// Mostrar estado inicial del deportista
console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energía: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);

// Simular entrenamiento del deportista
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5); // Se entrena durante 5 horas

// Mostrar estado después del entrenamiento
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energía: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);

