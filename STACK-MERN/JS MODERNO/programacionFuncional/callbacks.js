//EJEMPLO DE CALLBACK PARA UTILIZAR UNA FUNCION DENTRO DE OTRA.
// Arreglo de palabras
let palabras = ["Hola", "Mundo", "OpenAI"];
// Función que convierte todas las palabras a minúsculas
let convertirAMinusculas = (palabra) => palabra.toLowerCase();
// Función de mapeo que aplica una función dada a cada elemento del arreglo
let mapPalabras = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = fn(array[i]);
  }
  return array;
};
// Mostrar el resultado de aplicar la función de mapeo a las palabras
console.log(mapPalabras(palabras, convertirAMinusculas));

//Forma mas sencilla pero con foreach directamente sobre el mismo arreglo.
palabras.forEach((palabra) => palabra.toLowerCase());
console.log(palabras);

//FUNCION MAP
// Arreglo de nombres
let nombres = ["Juan", "María", "Carlos", "Laura", "Ana"];

// Función que devuelve la longitud de cada nombre
let longitudNombre = (nombre) => nombre.length;

// Aplicar la función longitudNombre a cada elemento del arreglo
let longitudes = nombres.map(longitudNombre);

console.log(longitudes); // Resultado: [4, 5, 6, 5, 3]

//FILTER
// Arreglo de palabras
let palabras2 = ["Hola", "Mundo", "OpenAI", "es", "genial"];

// Función que filtra las palabras que tienen más de 3 letras
let masDeTresLetras = (palabra) => palabra.length > 3;

// Filtrar las palabras que tienen más de 3 letras
let palabrasFiltradas = palabras2.filter(masDeTresLetras);

console.log(palabrasFiltradas); // Resultado: ["Hola", "Mundo", "OpenAI", "genial"]

//FOREACH
let numeros = [1, 2, 3];

// Imprimir cada elemento en la consola
numeros.forEach((numero) => {
  console.log(numero);
});
// Resultado: 1, 2, 3

// Sumar todos los elementos del arreglo
let suma = 0;
numeros.forEach((numero) => {
  suma += numero;
});

console.log(suma); // Resultado: 6

//FIND
let numeros2 = [10, 20, 30, 40, 50];

// Función que encuentra el primer número divisible por 3
let divisiblePorTres = (numero) => numero % 3 === 0;

// Encontrar el primer número divisible por 3
let primerNumeroDivisiblePorTres = numeros2.find(divisiblePorTres);

console.log(primerNumeroDivisiblePorTres); // Resultado: 30
