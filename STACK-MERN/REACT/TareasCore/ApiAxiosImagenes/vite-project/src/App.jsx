import { useState } from "react";
import "./App.css";
import CartasBangDream from "./components/CartasBangDream";

function App() {
  const [art, setArt] = useState(null);
  const [artTrained, setArtTrained] = useState(null);

  return (
    <>
      <h1>Imagenes de cartas de bandori</h1>
      <div className="contenedor">
        <div>
          <h2>Art Base</h2>
          <img src={art} alt="carta con arte base" />
        </div>
        <div>
          <h2>Art Trained </h2>
          {artTrained?<img src={artTrained} alt="carta con arte entrenada" />:<p>No tiene art trained</p>}
        </div>
      </div>
      <CartasBangDream setArt={setArt} setArtTrained={setArtTrained} />
    </>
  );
}

export default App;
