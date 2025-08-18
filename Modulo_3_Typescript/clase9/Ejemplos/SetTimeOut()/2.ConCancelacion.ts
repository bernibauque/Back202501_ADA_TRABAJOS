let temporizador = setTimeout(() => {
    console.log("Este mensaje no se mostrara porque vamos a cancelar");
}, 3000)

clearTimeout(temporizador)