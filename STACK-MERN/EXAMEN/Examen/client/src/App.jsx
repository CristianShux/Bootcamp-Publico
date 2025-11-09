import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import { useState } from "react";
import Registro from "./views/Registro";
import Header from "./components/Header";
import RecetasApi from "./views/RecetasApi";
import VerReceta from "./views/VerReceta";
import ModificarReceta from "./views/ModificarReceta";
import AgregarReceta from "./views/AgregarReceta";
import NotFound from "./components/NotFound";

function App() {
  const [recetas,setRecetas]=useState([]);
  const [login, setLogin]=useState(false);
  const [me, setMe]=useState({});
  const navigate=useNavigate();

  const logOut=()=>{
    localStorage.removeItem("token");
    setLogin(false);
    setMe({}); 
    setRecetas([]); 
    navigate("/login");
  }

  return (
    <div div className="App"> 
      <Header login={login} logOut={logOut} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="login"/>}></Route>
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/registro" element={<Registro setLogin={setLogin} />} />
          <Route path="/recetas" element={<RecetasApi me={me} setMe={setMe} recetas={recetas} 
          setRecetas={setRecetas} setLogin={setLogin} logOut={logOut} />} />
          <Route path="/recetas/:id" element={<VerReceta me={me} logOut={logOut } recetas={recetas} setRecetas={setRecetas}/>} />
          <Route path="/recetas/editar/:id" element={<ModificarReceta me={me} recetas={recetas} setRecetas={setRecetas} logOut={logOut}/>}/>
          <Route path="/recetas/agregar" element={<AgregarReceta me={me} recetas={recetas} setRecetas={setRecetas} logOut={logOut}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
