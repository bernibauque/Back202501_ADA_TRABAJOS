// Vamos a crear programa que imprima un contador regresivo
// desde 5 hasta 1 utilizando 
// bucles while y Do while

// WHILE 
console.log('Contador regresivo usando While.');

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--
}

// DO WHILE 
console.log('\nContador regresivo usando Do While.');

let contador2 = 5;

do {
    console.log(contador2);
    contador2--;
} while (contador2 >= 1);
