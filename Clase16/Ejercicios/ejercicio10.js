const words = ['Me', 'gusta', 'aprender', 'JavaScript'];
let sentence = '';
words.forEach(word => sentence += word + ' '); // Construye la frase palabra por palabra.
sentence = sentence.trim(); // Elimina el espacio extra al final.
console.log(sentence); // Resultado: 'Me gusta aprender JavaScript'
