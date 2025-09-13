//Permite manejar funciones con un numero variables de argumentos, pero en el fonto
//lo que hace es recibir elementos individuales y en la funcion tratarlos como un array
const sumar = (...numeros) => numeros.reduce((total, num) => total + num, 0);

console.log(sumar(1, 2, 3, 4, 5)); // 15

//Se emplea tambien en la destructuracion de un objeto para capturar el resto de propiedades del objeto o array
const persona = {
  nombre: "Ana",
  edad: 28,
  ciudad: "Barcelona",
  país: "España",
};
const { nombre, ...resto } = persona;

console.log(nombre); // 'Ana'
console.log(resto); // { edad: 28, ciudad: 'Barcelona', país: 'España' }
