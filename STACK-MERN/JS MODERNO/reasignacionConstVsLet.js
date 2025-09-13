//Ejemplo let
//Let si puede ser reasignada a un nuevo valor
let saldoCuenta = 1000;
let cantidadRetirada = 500;
let saldoRestante = saldoCuenta - cantidadRetirada;
console.log(saldoRestante); // Output: 500

cantidadRetirada = 200;
saldoRestante = saldoCuenta - cantidadRetirada;
console.log(saldoRestante); // Output: 800

//Ejemplo const
//const no puede ser reasignada  a un nuevo valor que sino tira error
const estudiante = { nombre: "Ana", curso: 5 };
estudiante.curso = 6; // Se puede modificar el contenido del objeto
console.log(estudiante); // Output: { nombre: 'Ana', curso: 6 }

// estudiante = { nombre: 'Carlos', curso: 4 }; // Error: no se puede reasignar
