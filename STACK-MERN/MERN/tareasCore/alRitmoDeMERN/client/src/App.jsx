import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AllSongs from "./components/AllSongs";
import AddSongs from "./components/AddSongs";
import Playlists from "./components/Playlists";
import SongsPlaylists from "./components/SongsPlaylist";
import AddPlaylist from "./components/AddPlaylist";
import SongInformation from "./components/SongInformation";
import UpdateSong from "./components/UpdateSong";
import UpdatePlaylist from "./components/updatePlaylist";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<AllSongs />}/>
          <Route path="/songs" element={<AllSongs />}/>
          <Route path="/songs/:id" element={<SongInformation />}/>
          <Route path="/editSongs/:id" element={<UpdateSong />}/>
          <Route path="/addSongs" element={<AddSongs />}/>
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
