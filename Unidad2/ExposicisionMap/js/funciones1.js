// Crear un nuevo Map para almacenar los datos ingresados por el usuario
const map = new Map();

// Obtener referencias a los elementos HTML relevantes
const keyInput = document.getElementById('key');
const valueInput = document.getElementById('value');
const outputDiv = document.getElementById('output');

// Manejador de evento para el botón "Insertar"
document.getElementById('insertBtn').addEventListener('click', () => {
  // Obtener clave y valor ingresados por el usuario y eliminar espacios en blanco
  const key = keyInput.value.trim();
  const value = valueInput.value.trim();

  if (key !== '' && value !== '') { // Asegurarse de que tanto la clave como el valor no estén vacíos
      if (!map.has(key)) { // Verificar si la clave ya existe en el Map
          map.set(key, value);// Insertar el par clave-valor en el Map utilizando el método set
          outputDiv.textContent = `Elemento insertado: (${key}, ${value})`;
      } else {
          outputDiv.textContent = `La clave '${key}' ya existe en el mapa`;
      }
  } else {
      outputDiv.textContent = 'La clave y el valor no pueden estar vacíos';
  }

  keyInput.value = '';
  valueInput.value = '';
});

// Manejador de evento para el botón "Obtener"
document.getElementById('getBtn').addEventListener('click', () => {
    const key = keyInput.value;
    const value = map.get(key); // Obtener el valor asociado a la clave desde el Map utilizando el método get
    outputDiv.textContent = `Valor obtenido para la clave '${key}': ${value}`;
    keyInput.value = '';
});

// Manejador de evento para el botón "Eliminar"
document.getElementById('deleteBtn').addEventListener('click', () => {
    const key = keyInput.value;
    map.delete(key); // Eliminar el elemento asociado a la clave desde el Map utilizando el método delete
    outputDiv.textContent = `Elemento eliminado para la clave '${key}'`;
    keyInput.value = '';
});

// Manejador de evento para el botón "Limpiar"
document.getElementById('clearBtn').addEventListener('click', () => {
    map.clear(); // Limpiar todos los elementos del Map utilizando el método clear
    outputDiv.textContent = 'Mapa limpiado';
});

// Manejador de evento para el botón "Tamaño"
document.getElementById('sizeBtn').addEventListener('click', () => {
    const size = map.size; // Obtener el tamaño del Map utilizando la propiedad size
    outputDiv.textContent = `Tamaño del mapa: ${size}`;
});

// Manejador de evento para el botón "Verificar Clave"
document.getElementById('hasBtn').addEventListener('click', () => {
    const key = keyInput.value;
    const exists = map.has(key); 
    // Verificar si una clave existe en el Map utilizando el método has
    const message = exists ? `La clave '${key}' existe` : `La clave '${key}' no existe`;
    outputDiv.textContent = message;
    keyInput.value = '';
});

// Manejador de evento para el botón "Recorrer"
document.getElementById('forEachBtn').addEventListener('click', () => {
    outputDiv.textContent = 'Recorriendo elementos:';
    // Recorrer todos los elementos del Map utilizando el método forEach
    map.forEach((value, key) => {
        outputDiv.textContent += `\nClave: ${key}, Valor: ${value}`;
    });
});

// Manejador de evento para el botón "Entradas"
document.getElementById('entriesBtn').addEventListener('click', () => {
    const entries = map.entries(); 
    // Obtener un iterador con los pares [clave, valor] en un Map utilizando el método entries
    outputDiv.textContent = 'Iterador de entradas:\n';
    for (const [key, value] of entries) {
        outputDiv.textContent += `[Clave: ${key}, Valor: ${value}] `;
    }
});

// Manejador de evento para el botón "Modificar"
document.getElementById('modifyBtn').addEventListener('click', () => {
    const key = keyInput.value.trim();
    const value = valueInput.value.trim();

    if (map.has(key)) { // Verificar si la clave existe en el Map utilizando el método has
        map.set(key, value); // Modificar un elemento en el Map utilizando el método set
        outputDiv.textContent = `Elemento modificado para la clave '${key}': ${value}`;
    } else {
        outputDiv.textContent = `La clave '${key}' no existe en el mapa`;
    }

    keyInput.value = '';
    valueInput.value = '';
});
