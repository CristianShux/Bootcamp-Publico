//Destructuracion de objetos
const superheroe = {
  nombre: 'Wonder Woman',
  alias: 'Diana Prince',
  poderes: ['super fuerza', 'velocidad', 'durabilidad'],
  habilidades: ['combate cuerpo a cuerpo', 'uso del lazo mágico', 'vuelo'],
  creadaPor: 'William Moulton Marston',
  primeraAparicion: 'All Star Comics #8 (1941)',
  codigoSecreto: '12345'
};

const { primeraAparicion } = superheroe;
console.log(primeraAparicion); // Salida: All Star Comics #8 (1941)

//Destructuracion de arreglos
const armas = ['Espada de Athena', 'Escudo', 'Lazo de la Verdad', 'Brazaletes indestructibles'];
const [ primerArma ] = armas;
console.log(primerArma); // Salida: Espada de Athena
//Si quisieramos solo el segundo elemento
const [, segundaArma]=armas;
console.log(segundaArma);

//Si se repiten los nombres de las variables con las propiedades de objetos reasignamos
const codigoSecreto = '12345'; // El valor original
const { codigoSecreto: codigoEncriptado } = superheroe;
console.log(codigoEncriptado); // Salida: 12345

//Destructuracion en estructuras anidadas
const alterego = {
  nombre: 'Diana',
  apellido: 'Prince',
  email: 'diana.prince@themyscira.com',
  direcciones: [
    { direccion: 'Themyscira Palace', ciudad: 'Themyscira', codigoPostal: '0001' },
    { direccion: '7000 Hollywood Blvd', ciudad: 'Los Angeles', codigoPostal: '90028' }
  ]
};

const { direcciones } = alterego;
const [ primeraDireccion, segundaDireccion ] = direcciones;

console.log('Primera Dirección:', primeraDireccion);
console.log('Segunda Dirección:', segundaDireccion);
