// Crear una función que pida un valor por parámetro 
// y muestre los 10 números siguientes.

const prompt = require('prompt-sync')();

function mostrarSiguientesDiezNumeros() {
	// Solicitar un número al usuario
	const numero = parseInt(prompt("Ingrese un número: "), 10);

	// Mostrar los 10 números siguientes
	for (let i = 1; i <= 10; i++) {
		console.log(numero + i);
	}
}

mostrarSiguientesDiezNumeros();









