const obtenerNumeroDesdeConsola = (mensaje) => {
  const input = prompt(mensaje);
  const numero = parseInt(input);

  if (isNaN(numero)) {
    alert("Debe ingresar un número válido.");
    return obtenerNumeroDesdeConsola(mensaje);
  }

  return numero;
};

const imprimirNumeros = () => {
  const num = obtenerNumeroDesdeConsola("Ingrese un número para imprimir los primeros números:");
  imprimir(num);
};

const imprimir = (x) => {
  if (x > 0) {
    imprimir(x - 1);
    console.log(x);
  }
};


const imprimirSerie = () => {
  const n = obtenerNumeroDesdeConsola("Ingrese un número para imprimir la serie de Fibonacci:");
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
};

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const imprimirFactorial = () => {
  const x = obtenerNumeroDesdeConsola("Ingrese un número para calcular el factorial:");
  console.log(factorial(x));
};

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const imprimirPalabraReversa = (word) => {
  if (word === "") {
    return;
  }
  imprimirPalabraReversa(word.substring(1));
  console.log(word[0]);
};

const imprimirPalabra = () => {
  const word = prompt("Ingrese una palabra para imprimirla :");
  console.log(word);
  imprimirPalabraReversa(word);
};