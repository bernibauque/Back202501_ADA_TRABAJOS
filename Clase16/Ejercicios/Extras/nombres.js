const names = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

// Paso 1: Filtrar nombres con menos de 5 letras.
const shortNames = names.filter(name => name.length < 5);

// Paso 2: Transformar los nombres a mayúsculas.
const uppercasedNames = shortNames.map(name => name.toUpperCase());

// Paso 3: Construir la frase con los nombres seleccionados.
const resultPhrase = `Los nombres seleccionados son: ${uppercasedNames.join(', ')}`;

console.log(resultPhrase);
// Resultado: Los nombres seleccionados son: ANA, LUIS, JOSÉ
