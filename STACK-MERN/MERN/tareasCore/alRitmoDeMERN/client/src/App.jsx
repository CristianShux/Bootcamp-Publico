import { Route, Routes } from "react-router-dom";
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
import { useState } from "react";


function App() {
  const [listaSongs,setListaSongs]=useState([]);
  const [listaPlaylists, setListaPlaylists]=useState([]);
  return (
    <>
      <NavBar />
      <SongsApi setListaSongs={setListaSongs}/>
      <PlaylistsApi setListaPlaylists={setListaPlaylists}/>
      <main>
        <Routes>
          <Route path="/" element={<AllSongs listaSongs={listaSongs}/>}/>
          <Route path="/songs" element={<AllSongs listaSongs={listaSongs}/>}/>
          <Route path="/songs/:id" element={<SongInformation listaSongs={listaSongs} setListaSongs={setListaSongs} />}/>
          <Route path="/editSongs/:id" element={<UpdateSong listaSongs={listaSongs} setListaSongs={setListaSongs}/>}/>
          <Route path="/addSongs" element={<AddSongs listaSongs={listaSongs} setListaSongs={setListaSongs}/>}/>
          <Route path="/playlists" element={<Playlists listaPlaylists={listaPlaylists}/>}/>
          <Route path="/playlists/:name" element={<SongsPlaylists listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists}/>}/>
          <Route path="/editPlaylists/:name" element={<UpdatePlaylist listaSongs={listaSongs} listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists}/>}/>
          <Route path="/addPlaylist" element={<AddPlaylist listaSongs={listaSongs} listaPlaylists={listaPlaylists} setListaPlaylists={setListaPlaylists}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
