//1 Destructuracion en objetos anidados
const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);
//a. Para la variable edad la salida sera 30 y para la variable salario undefined
//b. 30 undefined
//c. Esto se da porque justamente edad si es una propiedad de nuestro objeto, en cambio
//salario es un nombre que no corresponde a ninguna propiedad de nuestro objeto ni es parte
//del anidado de detalles, es una propiedad no definida, se espera que sea este tipo de salida.

//2 Uso del operador spread en la fusión de objetos
const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);
//a. La salida sera un nuevo objeto el cual junte las propiedades de esos dos objetos {a:1,b:4,c:5,d:6}
//b. { a: 1, b: 4, c: 5, d: 6 }
//c. Esto se da justamente porque una de las cosas que podemos hacer con el operador spread es 
//combinar arreglos o objetos en uno solo.

//3 Ámbito de variables en funciones y bloques
const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    //console.log(a); Los comente para poder correr todo el codigo sin errores, pero venian descomentados.
    //console.log(b);
}
verificar();
//a. La salida sera unicamente el numero 4 y luego tirara errores
//b. 4
//c. Lo que paso en este caso es que el numero 4 se imprime correctamente ya que esta declarado con
//una variable var, nosotros pudimos ver que las variables var  no respetan el alcance de bloques
// de los condicionales o bucles. En cambio las variables a y b declaradas con let y const no se imprimen
//nunca ya que estas si respetan el alcance que tienen las mismas en sus respectivos bloques entonces
//fuera del condicional if no pueden ser llamadas porque no estaran definidas.

//4 Propiedades de objetos inmutables}
const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);
//a. La salida sera que edad sigue valiendo 29
//b. 29
//c. Esto se debe ya que el metodo freeze para un objeto lo que hace es congelarlo, es decir no se pueden
//agregar, eliminar, cambiar ni reconfigurar propiedades, es decir el objeto queda inmutable en su estructura.
//por ello si bien sintacticamente no lanza error, no modifica nada.

//5 Manipulación de arreglos sin modificar el original
const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);
//a. La salida sera [1,2,3] y luego [1,2,3,4]
//b. [1,2,3] [1,2,3,4]
//c. Esto se debe a que primero se imprime el arreglo original normalmente y luego en la variable nuevo
//se almacena un arreglo nuevo producto de la concatenacion del arreglo original con el numero 4, por lo
//cual esto no provoca cambios en el arreglo original y se imprimen de esa forma.

//6 Acceso a elementos de un arreglo con destructuración
const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);
//a. La salida sera manzana y luego naranja
//b.manzana naranja
//c. Cuando nosotros destructuramos un arreglo de elementos lo que debemos hacer es extraer los valores en
//orden, justamente en la variable primera se va asignar manzana que corresponde al primer elemento del
//arreglo y en la variable segunda se va a asignar naranja que corresponde al segundo elemento el arreglo.

//7 Comportamiento del ámbito de let en bucles anidados
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}
//a. La salida va a ser 0 1 0 1 0 1
//b. 0 1 0 1 0 1
//c. Esto se debe a que si bien las variables let se llaman igual cada una esta en su respectivo alcance
//dado por el bloque for, entonces el for externo se ejecuta 3 veces pero por cada una de esas veces
//ejecuta 0 1 del bloque interno.

//8 Uso del operador spread para combinar arreglos
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);
//a. la salida sera [1,2,3,4,5]
//b. [1,2,3,4,5]
//c. Si nosotros podemos combinar objetos en uno solo tambien podemos combinar arreglos, este caso 
//simplemente en combinados se utiliza la expresion spread 2 veces, una con cada uno de los arreglos
//para dar lugar a un nuevo arreglo producto de su combinacion. Es importante recordar que esta 
//combinacion sigue un orden, el resultado no seria el mismo si primero se hace spread de numero2
//y luego de numero1

//9 Alcance y captura de variables dentro de una función
const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();
//a. La salidad sera Luis y 25
//b. Luis 25
//c. Esto se debe a que la variable var ya de por si no respeta ningun alcance de funcion, condicional
//o bloque, entonces el variable que se imprime es el de la segunda vez que la redefinimos. En el caso
// de edad pasa algo mas delicado y es que en el alcance de la funcion se declara con 25 pero en el
//alcance de el condicional se declara con 30, lo que suceede es que el console.log esta en el alcance
//de la funcion y no del condicional por eso imprime 25.