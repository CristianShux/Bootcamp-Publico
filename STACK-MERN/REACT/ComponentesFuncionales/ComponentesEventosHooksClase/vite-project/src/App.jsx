import './App.css'
import { useState } from 'react';
import TarjetaSup from './components/tarjetaSup';

function App() {
  const supersData = [{ name: "Flash", description: "Hi, I am Flash and there is no one as fast as me", likes: 0, color: "warning" }, { name: "Batman", description: "I am Batman. Prep time solves everything.", likes: 3, color: "dark" }, { name: "Wonder Woman", description: "Truth, compassion, and a very shiny lasso.", likes: 5, color: "primary" }, { name: "Superman", description: "Up, up, and away.", likes: 2, color: "info" }];

  //Hooks states
  const[listaSups,setListaSups]=useState(supersData);

  const agregarSup=(name, description, likes, color)=>{
    setListaSups([...listaSups, {name, description, likes, color}])
  }

  return (
    <>
    <div className='tarjetaSup'>
      {listaSups.map((superHeroe, index)=>
        <TarjetaSup name={superHeroe.name} description={superHeroe.description} likes={superHeroe.likes} color={superHeroe.color} index={index}/>       
      )}
     </div>
     <div className='contenedor'>
      <button onClick={()=> agregarSup("Ms. Incognito", "I am no one", 10, "dark")}>Agregar</button>
      </div>  
    </>
  )
}

export default App
