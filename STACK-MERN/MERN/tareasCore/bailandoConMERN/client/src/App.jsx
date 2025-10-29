import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AllSongs from "./components/AllSongs";
import AddSongs from "./components/AddSongs";
import Playlists from "./components/Playlists";
import SongsPlaylists from "./components/SongsPlaylist";
import AddPlaylist from "./components/AddPlaylist";
import SongInformation from "./components/SongInformation";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<AllSongs />}/>
          <Route path="/songs" element={<AllSongs />}/>
          <Route path="/songs/:id" element={<SongInformation />}/>
          <Route path="/addSongs" element={<AddSongs />}/>
          <Route path="/playlists" element={<Playlists />}/>
          <Route path="/playlists/:name" element={<SongsPlaylists />}/>
          <Route path="/addPlaylist" element={<AddPlaylist />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
