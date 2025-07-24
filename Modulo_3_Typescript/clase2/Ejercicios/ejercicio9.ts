let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false
  };
  
  function encenderCoche(coche: { marca: string, modelo: string, encendido: boolean }): void {
    coche.encendido = true;
    console.log(`${coche.marca} ${coche.modelo} está encendido: ${coche.encendido}`);
  }
  
  console.log(`Antes de encender: ${coche.encendido}`); // Antes de encender: false
  encenderCoche(coche); // Toyota Corolla está encendido: true
  console.log(`Después de encender: ${coche.encendido}`); // Después de encender: true
  