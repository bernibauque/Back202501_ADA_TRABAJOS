let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let contador = 0;

// 1. Mientras haya clientes en la cola
while (clientes.length > 0) {
    let clienteActual = clientes.shift(); // Atender al primer cliente en la cola
    contador++;

    // 2. Verificar si el cliente es VIP
    if (clienteActual === "VIP") {
        console.log(`🚨 Atención prioritaria para: ${clienteActual}`);
    } else {
        console.log(`Atendiendo a: ${clienteActual}`);
    }
}

// 3. Mostrar cuántos clientes fueron atendidos
console.log(`Total de clientes atendidos: ${contador}`);

// Resultado esperado:
// "Atendiendo a: Ana"
// "Atendiendo a: Carlos"
// "🚨 Atención prioritaria para: VIP"
// "Atendiendo a: Sofía"
// "Atendiendo a: Juan"
// "Total de clientes atendidos: 5"
