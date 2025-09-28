import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  let people = [
    { name: "Kevin", edad: 35 },
    { name: "Iris", edad: 23 },
    { name: "Camila", edad: 18 },
  ];
  return (
    <>
      <header></header>
      <main>
        {people.map((persona) => {
          return <Tarjeta nombre={persona.name} edad={persona.edad}></Tarjeta>;
        })}
      </main>
    </>
  );
}

export default App;
