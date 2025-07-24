let empleado = { nombre: "Juan", salario: 50000 };

function aumentarSalario(empleado: { nombre: string, salario: number }, porcentaje: number): number {
  empleado.salario += empleado.salario * (porcentaje / 100);
  return empleado.salario;
}

const nuevoSalario = aumentarSalario(empleado, 10); // Aumenta en un 10%
console.log(`El nuevo salario de ${empleado.nombre} es: ${nuevoSalario}`); // El nuevo salario de Juan es: 55000
