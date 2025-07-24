// Funcion privada
const logCalculation = (area:number) => {
    console.log(`Calcular area: ${area}`);
}

// EXPORTACION DIRECTA DE LA FUNCION 
export const calculateTriangleArea = (base:number, height:number):number => {
    const area = (base * height) / 2
    logCalculation(area) // uso de la funcion privada
    return area 
}

export const TRIANGLE_NAME = "Triangle"
