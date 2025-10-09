import "./App.css";
import React, { useState } from "react";

function App() {
  const comestibles = ["Manzanas", "Plátanos", "Naranjas"];

  const [tareas, setTareas] = useState([
    { id: 1, texto: "Hacer las compras", completada: false },
    { id: 2, texto: "Limpiar la casa", completada: false },
    { id: 3, texto: "Hacer ejercicio", completada: false },
  ]);

  {
    /*Ejemplo filter*/
  }
  const [tareitas] = useState([
    { id: 1, texto: "Hacer la compra", importante: true },
    { id: 2, texto: "Limpiar la casa", importante: false },
    { id: 3, texto: "Hacer ejercicio", importante: true },
  ]);

  const tareasImportantes = tareitas.filter((tarea) => tarea.importante);

  const alternarCompletada = (id) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  {
    /*Ejemplo combinacion map y filter*/
  }
  

  const listaOriginal = [
    "Cebollitas",
    "Tomillo",
    "Champiñones cremini",
    "Mantequilla",
  ];
  const [listaDeCompras, setListaDeCompras] = useState(listaOriginal);
  const [letraDeFiltro, setLetraDeFiltro] = useState("");

  const manejarFiltro = () => {
    const listaFiltrada = listaDeCompras.filter((producto) =>
      producto.toLowerCase().startsWith(letraDeFiltro.toLowerCase())
    );
    setListaDeCompras(listaFiltrada);
  };

  const deshacerFiltro = () => {
    setListaDeCompras(listaOriginal);
    setLetraDeFiltro("");
  };

  return (
    <>
      {/*Ejemplo map renderizado de una lista*/}
      <ul>
        {comestibles.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/*Ejemplo map actualizar elementos en el estado*/}
      <ul>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            onClick={() => alternarCompletada(tarea.id)}
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
            }}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>

      {/*Ejemplo recorrido de tareas filtradas*/}
      <ul>
        {tareasImportantes.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>

        {/*Ejemplo map y filter,uso completo*/}
      <div>
      <input
        type="text"
        value={letraDeFiltro}
        onChange={(e) => setLetraDeFiltro(e.target.value)}
        placeholder="Ingresa una letra para filtrar"
      />
      <button onClick={manejarFiltro}>Aplicar filtro</button>
      <button onClick={deshacerFiltro}>Deshacer filtro</button>
      <ul>
        {listaDeCompras.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
