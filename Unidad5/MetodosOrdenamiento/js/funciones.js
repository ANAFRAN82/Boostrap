function solicitarElementos() {
  const n = parseInt(prompt("Ingresa la cantidad de elementos:"));
  const elementosArray = [];

  for (let i = 0; i < n; i++) {
    const elemento = parseFloat(prompt(`Ingresa el valor del elemento ${i + 1}:`));
    elementosArray.push(elemento);
  }

  const elementosOrdenados = ordenamiento(elementosArray);
  console.log("Lista Original: " +"[" + elementosArray+ "]")

  console.log("Elementos Ordenados");
  console.log(elementosOrdenados);
}

function ordenamiento(elementos) {
  const aux = [...elementos];
  for (let i = 0; i < aux.length - 1; i++) {
    for (let j = 0; j < aux.length - i - 1; j++) {
      if (aux[j] < aux[j + 1]) {
        // Intercambiar elementos
        const temp = aux[j];
        aux[j] = aux[j + 1];
        aux[j + 1] = temp;
      }
    }
  }
  return aux;
}

 
      
