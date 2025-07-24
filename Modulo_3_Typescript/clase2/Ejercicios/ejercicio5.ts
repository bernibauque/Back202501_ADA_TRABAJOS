function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
  }
  
  const resultadoSuma = sumarTodos(1, 2, 3, 4, 5); // 15
  console.log(`La suma de todos los números es: ${resultadoSuma}`);
  