import "./App.css";
import { Routes, Route } from "react-router-dom";
import Receta from "./components/Receta";
import Inicio from "./components/Inicio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/receta/:nombreReceta" element={<Receta />} />
      </Routes>
    </>
  );
}

export default App;
