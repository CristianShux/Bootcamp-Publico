var sandwich = {
  pan: "masa madre",
  proteína: "asado",
  queso: "queso suizo lacey",
  salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"],
};

console.log(sandwich);
function sandwichFactory(pan, proteína, queso, salsas) {
  var sandwich = {};
  sandwich.pansito = pan;
  sandwich.proteína = proteína;
  sandwich.queso = queso;
  sandwich.salsas = salsas;
  return sandwich;
}

var s1 = sandwichFactory("trigo", "pavo", "provolone", [
  "mostaza",
  "cebolla frita",
  "rúcula",
]);
console.log(s1);

//DESAFIO PIZZAOVEN
function pizzaOven(corteza, salsa, quesos, extras) {
  var pizza = {};
  pizza.corteza = corteza;
  pizza.salsa = salsa;
  pizza.quesos = quesos;
  pizza.extras = extras;
  return pizza;
}

var pizza1 = pizzaOven(
  "estilo Chicago",
  "tradicional",
  ["mozzarella"],
  ["pepperoni", "salchicha"]
);
console.log(pizza1);
var pizza2 = pizzaOven(
  "lanzada a mano",
  "marinara",
  ["mozzarella", "feta"],
  ["champiñones", "champiñones", "cebollas"]
);
console.log(pizza2);
