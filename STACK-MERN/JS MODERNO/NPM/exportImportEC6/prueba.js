import operaciones from "./mathOperaciones.mjs";

const resultado1=operaciones.multiplicar(5,3);
console.log(resultado1);

const resultado2 = operaciones.dividir(10, 2);
console.log(resultado2); // Salida: 5

//Tambien es posible utilizar la destructuracion
// import { multiplicar, dividir } from './mathOperaciones.mjs';

// const resultado1 = multiplicar(5, 3);
// console.log(resultado1); // Salida: 15

// const resultado2 = dividir(10, 4);
// console.log(resultado2); // Salida: 2.5