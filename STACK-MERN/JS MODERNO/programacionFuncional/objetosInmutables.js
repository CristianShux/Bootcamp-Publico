//Objetos inmutables con freeze
//Ejemplo 1: Inmutamos un arreglo de objetos ya creado
const productos = [
  { id: 1, nombre: "Camisa", precio: 20 },
  { id: 2, nombre: "Pantalón", precio: 30 },
  { id: 3, nombre: "Zapatos", precio: 50 },
];

Object.freeze(productos); // Congelamos el arreglo para evitar cambios

// Intentamos agregar un nuevo producto al arreglo congelado
productos.push({ id: 4, nombre: "Sombrero", precio: 15 }); // Esto lanzará un error
console.log(productos); // El arreglo sigue siendo el mismo, no se agregó el nuevo producto

//Ejemplo 2: asignamos a una variable un objeto inmutable
const persona = Object.freeze({ nombre: "Juan", edad: 30 });

persona.edad = 31; // Esto no tendrá ningún efecto, ya que el objeto está congelado

console.log(persona); // Output: { nombre: "Juan", edad: 30 }

// Expandir (Spread), Concatenar (Concat) y Cortar (Slice)
//Spread
const listaCanciones = Object.freeze([
  { nombre: "Shape of You", genero: "Pop" },
  { nombre: "Uptown Funk", genero: "Funk" },
  { nombre: "Billie Jean", genero: "Pop" },
]);

const necesitoNuevaCancion = [
  ...listaCanciones,
  { nombre: "Don't Stop Believin'", genero: "Rock" },
];

console.log(necesitoNuevaCancion);

//concat
const otraNuevaCancion = listaCanciones.concat({
  nombre: "Bohemian Rhapsody",
  genero: "Rock",
});
console.log(otraNuevaCancion);

//Slice
const listaRecortada = listaCanciones.slice(0, 2);
console.log(listaRecortada);

//SORT
const listaCanciones2 = Object.freeze([
  "Despacito",
  "Shape of You",
  "Uptown Funk",
  "Billie Jean",
  "Don't Stop Believin'",
  "Bohemian Rhapsody",
]);

const listaOrdenada = [...listaCanciones2].sort(); //De la A a la Z por defecto
console.log(listaOrdenada);

//Sort para numeros de menor a mayor
const numeros = [15, 7, 25, 18, 30, 9];

const listaOrdenadaNumeros = [...numeros].sort((a, b) => a - b);
console.log(listaOrdenadaNumeros);

//Ordenar canciones por un criterio por ejemplo nombre
const listaCancionesOrdenada = [...listaCanciones].sort((a, b) =>
  a.nombre > b.nombre ? 1 : -1
);
console.log(listaCancionesOrdenada);
