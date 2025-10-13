import Imagen1 from './assets/Imagen1.png'
import Imagen2 from './assets/Imagen2.webp'
import Imagen3 from './assets/Imagen3.webp'
import Imagen4 from './assets/Imagen4.webp'
import Imagen5 from './assets/Imagen5.webp'
import Imagen6 from './assets/Imagen6.webp'
import Imagen7 from './assets/Imagen7.webp'
import Imagen8 from './assets/Imagen8.webp'
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Carta from "./components/Carta";

function App() {
  const galeryCards=[
    {name: 'Unyielding Obsession', character: 'Akiyama Mizuki', img:Imagen1 },
    {name: "I'll Go Ask Li'l Bro Too! T", character: 'Akiyama Mizuki', img:Imagen2 }, 
    {name: 'Between Feelings And Reality T', character: 'Akiyama Mizuki', img:Imagen3 },
    {name: 'Abyss Of Memories T', character: 'Tenma Saki', img:Imagen4 },
    {name: "Because We're Together T", character: 'Tenma Saki', img:Imagen5 },
    {name: 'Lucky Ice Cream! T', character: 'Tenma Saki', img:Imagen6 },
    {name: 'Captive Masquerade T', character: 'Asahina Mafuyu', img:Imagen7 }, 
    {name: 'A Warm Hand T', character: 'Asahina Mafuyu', img:Imagen8 },  
  ]
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}></Route>
        <Route path="/home" element={<Home galeryCards={galeryCards}/>}></Route>
        <Route path="/art/:id" element={<Carta galeryCards={galeryCards}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
