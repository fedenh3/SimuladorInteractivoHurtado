let entrada = +prompt("Simulador de elementos quimicos, ingrese la cantidad de elementos quimicos que quiere simular: ")

function simulador (entrada){
for(let i = 1; i <= entrada; i++){
    alert("elementos "+i);
}
}

simulador (entrada);