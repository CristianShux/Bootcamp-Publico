import { useState, useEffect } from "react";
import ExtraerGatos from "./components/ExtraerGatos";

import "./App.css";

function App() {
  const [gatos, setGatos] = useState([]);
  const [mensaje, setMensaje]=useState("");

  useEffect( ()=>{
    console.log("Hola desde el efecto!");
  },[] );

  useEffect(() => {
    const getGatos = async () => {
      const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setGatos(data);
    };
    getGatos();
  },[]);

  useEffect(()=>{
    const muestraMensaje=()=>{
      alert(mensaje);
    }
    if(mensaje!=""){
      muestraMensaje();
    }
  },[mensaje]);

  return (
    <>
      <h1>Conectando con API de Imagenes de gato</h1>
      <br />
      <button onClick={()=>setMensaje(mensaje+"Hola")}>Agregar Mensaje</button>
      <ExtraerGatos setGatos={setGatos} />
      {gatos.map((gato, index) => {
        return <img src={gato.url} alt="Imagen de gato" key={index} />;
      })}
    </>
  );
}

export default App;
