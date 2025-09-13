//Clonacion de objetos y arreglos
const objetoInicial = { nombre: "Mario", edad: 30 };
const objetoNuevo = { ...objetoInicial, ubicacion: "Tokio" };

console.log(objetoNuevo); // { nombre: 'Mario', edad: 30, ubicacion: 'Tokio' }

//combinacion de arreglos
const primerArreglo = [1, 2];
const segundoArreglo = [3, 4];
const tercerArreglo = [5, 6];
const combinado = [...primerArreglo, ...segundoArreglo, ...tercerArreglo];

console.log(combinado); // [1, 2, 3, 4, 5, 6]

//Uso en funciones
const calcularArea = (largo, ancho, alto) => largo * ancho * alto;

const dimensiones = [5, 3, 2];
const volumen = calcularArea(...dimensiones);

console.log(volumen); // 30

//Todas las anteriores como esta son copias superficiales porque los cambios en propiedades anidadas
//tambien afecta a la original.
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  detalles: { color: "azul", combustible: "gasolina" },
};

const autoCopia = { ...auto };
autoCopia.detalles.color = "rojo";

console.log(auto.detalles.color); // 'rojo' (se modificó el original)

//COPIA PROFUNDA
//Necesito hacer una copia explicita de la propiedad anidada ademas de una del objeto.
const autoCopiaProfunda = {
  ...auto,
  detalles: { ...auto.detalles },
};

autoCopiaProfunda.detalles.color = "verde";

console.log(auto.detalles.color); // 'azul' (el original permanece intacto)
