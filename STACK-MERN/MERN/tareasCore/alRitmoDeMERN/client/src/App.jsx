import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./views/NavBar";
import AllSongs from "./views/AllSongs";
import AddSongs from "./views/AddSongs";
import Playlists from "./views/Playlists";
import SongsPlaylists from "./views/SongsPlaylist";
import AddPlaylist from "./views/AddPlaylist";
import SongInformation from "./views/SongInformation";
import UpdateSong from "./views/UpdateSong";
import UpdatePlaylist from "./views/UpdatePlaylist";
import SongsApi from "./components/SongsApi";
import { useState } from "react";


function App() {
  const [listaSongs,setListaSongs]=useState([]);
  return (
    <>
      <NavBar />
      <SongsApi setListaSongs={setListaSongs}/>
      <main>
        <Routes>
          <Route path="/" element={<AllSongs listaSongs={listaSongs}/>}/>
          <Route path="/songs" element={<AllSongs listaSongs={listaSongs}/>}/>
          <Route path="/songs/:id" element={<SongInformation listaSongs={listaSongs} setListaSongs={setListaSongs} />}/>
          <Route path="/editSongs/:id" element={<UpdateSong listaSongs={listaSongs} setListaSongs={setListaSongs}/>}/>
          <Route path="/addSongs" element={<AddSongs listaSongs={listaSongs} setListaSongs={setListaSongs}/>}/>
          <Route path="/playlists" element={<Playlists />}/>
          <Route path="/playlists/:name" element={<SongsPlaylists />}/>
          <Route path="/editPlaylists/:name" element={<UpdatePlaylist/>}/>
          <Route path="/addPlaylist" element={<AddPlaylist />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
