import "./App.css";
import {Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Respuestas from './components/Respuestas';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/respuestas" element={<Respuestas />} />
      </Routes>
    </>
  );
}

export default App;
