//importo el modulo math con mis funciones
const math=require("./math");

//usamos las funciones del modulo math
const resultado1=math.multiplicar(5,3);
console.log(resultado1);

const resultado2=math.dividir(10,2);
console.log(resultado2);

//tambien es posible hacer lo mismo con desestructuracion
// const { multiplicar, dividir } = require('./math');

// const resultado1 = multiplicar(5, 3);
// console.log(resultado1); // Salida: 15

// const resultado2 = dividir(10, 2);
// console.log(resultado2); // Salida: 5