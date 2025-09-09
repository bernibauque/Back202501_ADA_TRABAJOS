// Matriz de gastos
const matrizGastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

// Función para obtener el total de gastos en una semana específica (semana indexada desde 0)
function totalGastosSemana(semana) {
    let total = 0;
    for (let dia = 0; dia < matrizGastos[semana].length; dia++) {
        total += matrizGastos[semana][dia];
    }
    return total;
}

// Función para obtener el total de gastos en un día específico (día indexado desde 0)
function totalGastosDia(dia) {
    let total = 0;
    for (let semana = 0; semana < matrizGastos.length; semana++) {
        total += matrizGastos[semana][dia];
    }
    return total;
}

// Función para obtener el total de gastos en el mes
function totalGastosMes() {
    let total = 0;
    for (let semana = 0; semana < matrizGastos.length; semana++) {
        for (let dia = 0; dia < matrizGastos[semana].length; dia++) {
            total += matrizGastos[semana][dia];
        }
    }
    return total;
}

// Función para obtener la semana con más gastos y el día que más gastos se realizaron
function semanaYDiaMasGastos() {
    let maxGastosSemana = 0;
    let maxGastosDia = 0;
    let maxGasto = matrizGastos[0][0];

    for (let semana = 0; semana < matrizGastos.length; semana++) {
        for (let dia = 0; dia < matrizGastos[semana].length; dia++) {
            if (matrizGastos[semana][dia] > maxGasto) {
                maxGasto = matrizGastos[semana][dia];
                maxGastosSemana = semana + 1; // Sumamos 1 porque queremos mostrar semana 1, 2, 3, 4 en lugar de semana 0, 1, 2, 3
                maxGastosDia = dia + 1; // Sumamos 1 porque queremos mostrar día 1, 2, 3, ..., 7 en lugar de día 0, 1, 2, ..., 6
            }
        }
    }

    return { semana: maxGastosSemana, dia: maxGastosDia };
}

// Ejemplos de uso de las funciones
console.log("Total de gastos en la semana 2:", totalGastosSemana(1)); // Semana 2 (índice 1)
console.log("Total de gastos en el día 3:", totalGastosDia(2)); // Día 3 (índice 2)
console.log("Total de gastos en el mes:", totalGastosMes());
const maxGastos = semanaYDiaMasGastos();
console.log("Semana con más gastos:", maxGastos.semana);
console.log("Día con más gastos:", maxGastos.dia);

