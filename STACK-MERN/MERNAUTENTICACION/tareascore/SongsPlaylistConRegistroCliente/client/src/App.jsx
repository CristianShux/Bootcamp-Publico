import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AllSongs from "./views/AllSongs";
import AddSongs from "./views/AddSongs";
import Playlists from "./views/Playlists";
import SongsPlaylists from "./views/SongsPlaylist";
import AddPlaylist from "./views/AddPlaylist";
import SongInformation from "./views/SongInformation";
import UpdateSong from "./views/UpdateSong";
import UpdatePlaylist from "./views/UpdatePlaylist";
import SongsApi from "./components/SongsApi";
import PlaylistsApi from "./components/PlaylistsApi";
import NotFound from "./components/NotFound";
import Login from "./views/Login";
import { useState } from "react";
import Home from "./views/Home";
import Registro from "./views/Registro";



function App() {
  const [listaSongs,setListaSongs]=useState([]);
  const [listaPlaylists, setListaPlaylists]=useState([]);
  const [login, setLogin]=useState(false);
  const navigate=useNavigate();

  const logOut=()=>{
    localStorage.removeItem("token");
    setLogin(false);
    navigate("/login");
  }

  return (
    <>
      {(login)? <>
        <NavBar logOut={logOut}/>
      </> : <>
      </>}


      <SongsApi setListaSongs={setListaSongs} login={login} setLogin={setLogin}/>
      <PlaylistsApi setListaPlaylists={setListaPlaylists} login={login} setLogin={setLogin}/>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="home"/>}></Route>
          <Route path='/home' element={<Home/>}/>
          <Route path="/registro" element={<Registro setLogin={setLogin}/>}/>
          <Route path="/login" element={<Login setLogin={setLogin}/>}/>
          <Route path="/songs" element={<AllSongs listaSongs={listaSongs}/>}/>
          <Route path="/songs/:id" element={<SongInformation listaSongs={listaSongs} setListaSongs={setListaSongs} logOut={logOut}/>}/>
          <Route path="/editSongs/:id" element={<UpdateSong listaSongs={listaSongs} setListaSongs={setListaSongs} logOut={logOut}/>}/>
          <Route path="/addSongs" element={<AddSongs listaSongs={listaSongs} setListaSongs={setListaSongs} logOut={logOut}/>}/>
          <Route path="/playlists" element={<Playlists listaPlaylists={listaPlaylists}/>}/>
          <Route path="/playlists/:name" element={<SongsPlaylists listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists} logOut={logOut}/>}/>
          <Route path="/editPlaylists/:name" element={<UpdatePlaylist listaSongs={listaSongs} listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists} logOut={logOut}/>}/>
          <Route path="/addPlaylist" element={<AddPlaylist listaSongs={listaSongs} listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists} logOut={logOut}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
