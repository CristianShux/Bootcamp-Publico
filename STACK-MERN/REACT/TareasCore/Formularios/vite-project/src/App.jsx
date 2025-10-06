import myhero from './assets/myhero.png'
import { useState } from 'react';
import './App.css'
import FormularioHeroe from './components/FormularioHeroe'
import TarjetaHeroe from './components/TarjetaHeroe';

function App() {
  const heroesProfesionales=[];

  const[listaHeroes, setListaHeroes]=useState(heroesProfesionales);

  const agregarHeroe=(nombre, apellido, correoElectronico, contraseña, confirmarContraseña )=>{
    setListaHeroes([...listaHeroes,{nombre, apellido, correoElectronico, contraseña, confirmarContraseña}])
  }

  const[mensajeEncabezado, setmensajeEncabezado]=useState("¡Envia tu formulario!")

  const actualizarMensajeEncabezado=()=>{
    setmensajeEncabezado("¡Gracias por enviar tu formulario!");
  }

  const existeCorreo = (correo) => {
  return listaHeroes.some(heroe => heroe.correoElectronico == correo);
  };

  return (
    <>
    <header>
      <div>
      <h1>Bienvenido a My Hero Academia</h1>
      <h2>{mensajeEncabezado}</h2>
      </div>
      <div>
        <img src={myhero} alt="MyheroAcademia imagen" />
      </div>
    </header>
    <main>
      <div>
        <h3>Registro de Heroes</h3>
        <FormularioHeroe agregarHeroe={agregarHeroe} actualizarMensajeEncabezado={actualizarMensajeEncabezado} 
        existeCorreo={existeCorreo}/>
      </div>
      <div>
        <h3>Heroes Registrados</h3>
        {listaHeroes.map((heroe,index)=><TarjetaHeroe nombre={heroe.nombre} apellido={heroe.apellido} key={index}/>)}
      </div>

    </main>
      
    </>
  )
}

export default App
