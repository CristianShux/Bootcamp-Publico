import { useState } from "react";
import "./App.css";
import FormAgregarNotas from "./components/FormAgregarNotas";
import Nota from "./components/Nota";
import FiltrarNota from "./components/FiltrarNota";

function App() {
  const notas = [
    { descripcion: "Estoy atrasada", prioridad: "Alto" },
    { descripcion: "Estoy muy atrasada!!!", prioridad: "Alto" },
    { descripcion: "Ya pasó la hora", prioridad: "Bajo" },
  ];

  const [listaNotas, setListaNotas] = useState(notas);

  const [filter,setFilter] = useState("Todas")

  const agregarNotas = (descripcion, prioridad) => {
    setListaNotas([...listaNotas, { descripcion, prioridad }]);
  };

  const eliminarNota = (input) => {
    const nuevasNotas = listaNotas.filter((nota, index) => index != input);
    setListaNotas(nuevasNotas);
  };

  const notasFiltradas=filter=="Todas"?listaNotas: listaNotas.filter((nota)=>nota.prioridad==filter);

  return (
    <>
    <div className='contenedor'>
      <h1>Notas</h1>
      <FormAgregarNotas agregarNotas={agregarNotas} />
      <FiltrarNota filter={filter} setFilter={setFilter}/>
      {notasFiltradas.map((nota, index) => (
        <Nota
          eliminarNota={eliminarNota}
          descripcion={nota.descripcion}
          prioridad={nota.prioridad}
          key={index}
          index={index}
        />
      ))}
      </div>
    </>
  );
}

export default App;
