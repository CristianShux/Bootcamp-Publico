import "./App.css";
import Animal from "./components/Animal";

function App() {
  const atributos = {
    tamaño: "grande",
    color: "gris",
  };
  const juguetesFavoritos = ["Pato", "Pelota", "Rascador"];

  return (
    <>
      <Animal
        especie="Perro"
        nombrePerro="Tobi"
        edad={10}
        atributos={atributos}
        juguetesFavoritos={juguetesFavoritos}
        nombreDueño="Cristian"
      ></Animal>
    </>
  );
}

export default App;
