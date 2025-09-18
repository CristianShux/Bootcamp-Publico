const avengers = [
  { nombre: "Spider-Man", edad: 17 },
  { nombre: "Iron Man", edad: 40 },
  { nombre: "Black Widow", edad: 28 },
  { nombre: "Shuri", edad: 16 },
];

//funcion flecha que me genere un nuevo arreglo con los avengers mayores de edad
//filter es un metodo aplicable a arrays que permite devolver un nuevo arreglo con todos
//los elementos que cumplan una condicion dada
const avengersMayores= avengers.filter(heroe => heroe.edad>=18);
console.log(avengersMayores);
const avengersOld= (array_input)=>array_input.filter(heroe => heroe.edad>=18);
console.log(avengersOld(avengers));