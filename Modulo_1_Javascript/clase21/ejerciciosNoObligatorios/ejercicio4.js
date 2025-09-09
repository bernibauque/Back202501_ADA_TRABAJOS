const temperaturas = [
    { dia: 1, mes: 7, tempMax: 30, tempMin: 15 },
    { dia: 2, mes: 7, tempMax: 32, tempMin: 17 },
    { dia: 3, mes: 7, tempMax: 28, tempMin: 16 },
    { dia: 4, mes: 7, tempMax: 31, tempMin: 14 },
    { dia: 5, mes: 7, tempMax: 29, tempMin: 13 }
];

// Ordenar por temperatura mínima (ascendente)
const tempMinAsc = temperaturas.slice().sort((a, b) => a.tempMin - b.tempMin);
console.log('Temperaturas ordenadas por mínima (ascendente):', tempMinAsc);

// Ordenar por temperatura máxima (descendente)
const tempMaxDesc = temperaturas.slice().sort((a, b) => b.tempMax - a.tempMax);
console.log('Temperaturas ordenadas por máxima (descendente):', tempMaxDesc);
