const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
];

// codear acá la solución del ejercicio
let librosEnLi = librosDeJS.map((libro) => `<li>${libro}</li>`);

let resultadoFinal = `<ul>${librosEnLi.join('')}</ul>`;

console.log(resultadoFinal);


// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming
// </li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming
// </li><li>JavaScript: The Good Parts
// </li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries
// </li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript
// </li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS
// </li><li>JavaScript Allongé: The Six Edition</li></ul>

