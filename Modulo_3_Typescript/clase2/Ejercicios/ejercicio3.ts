let deportista = {
    nombre: "Carlos",
    deporte: "Fútbol",
    energia: 100
  };
  
  function entrenar(deportista: { nombre: string, deporte: string, energia: number }, horas: number): void {
    deportista.energia -= horas * 5;
    console.log(`${deportista.nombre} ha entrenado por ${horas} horas. Energía restante: ${deportista.energia}`);
  }
  
  entrenar(deportista, 2); // Carlos ha entrenado por 2 horas. Energía restante: 90
  