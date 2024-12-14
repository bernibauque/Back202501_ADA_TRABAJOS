const words = ['sol', 'luna', 'estrella'];
const totalLetters = words.reduce((total, word) => total + word.length, 0); // Suma las longitudes de las palabras.
console.log(totalLetters); // Resultado: 16

