let entrada = +prompt(
    "Simulador de soluciones químicas, ingrese la cantidad de sustancias que quiere crear: "
  );
  function simulador(entrada) {
    if (entrada >= 2) {
          for (let i = 1; i <= entrada; i++) {
            alert("sustancias " + i);
          }
    } else {
        alert("Que sea mayor a 2!")
    }
  }
  simulador(entrada);