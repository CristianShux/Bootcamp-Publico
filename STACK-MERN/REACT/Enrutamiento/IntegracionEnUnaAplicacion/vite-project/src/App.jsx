import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Acerca from "./components/Acerca";
import Contacto from "./components/Contacto";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
