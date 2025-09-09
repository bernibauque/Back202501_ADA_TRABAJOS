const costos = [39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14];

const losMasCaros = costos.filter(costo => costo > 50);

console.log(costos); // [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
console.log(losMasCaros); // [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]



