// var
console.log(x);   /// Muestra "undefined" porque var se eleva (hoisting), 
var x = 5; /// pero la asignación ocurre después
console.log(x);   /// Ahora muestra 5


// let
console.log(y);   /// ❌ Error: no se puede acceder antes de declarar.
let y = 10; /// Con let existe la "temporal dead zone" (No hoisting)
console.log(y);   /// Muestra 10


// funciones declaradas
example();        /// ✅ Funciona porque las funciones declaradas
                  /// se elevan completamente con su definición
function example() {
    console.log("Test, hola");
}


// funciones flecha
aletando();       /// ❌ Error: no se puede llamar antes de declarar.
                  /// Las funciones flecha se comportan como variables let/const
let aletando = () => {
    console.log("Test, hola");
};
