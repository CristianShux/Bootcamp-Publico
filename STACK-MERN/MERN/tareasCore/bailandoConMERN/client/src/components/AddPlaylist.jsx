import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./../css/AddPlaylist.module.css";
import { useNavigate } from "react-router-dom";

const AddPlaylist = () => {
  const [namePlaylist, setNamePlaylist] = useState("");
  const [songs, setSongs] = useState([]);
  const [selectedSongTitles, setSelectedSongTitles] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      axios.get("http://localhost:8000/api/canciones").then((response) => {
        setSongs(response.data);
      });
    };
    fetchSongs();
  }, []);

  const manejarCambioCheckBox = (songTitle) => {
    setSelectedSongTitles((prevTitles) => {
      if (prevTitles.includes(songTitle)) {
        // Si ya está seleccionado, lo quitamos
        return prevTitles.filter((title) => title !== songTitle);
      } else {
        // Si no está seleccionado, lo añadimos
        return [...prevTitles, songTitle];
      }
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (namePlaylist == "") {
      alert("El nombre de la playlist es obligatorio");
      return;
    }

    //Creo el objeto de la nueva playlist
   const songsFiltradas = songs.filter((song) => selectedSongTitles.includes(song.title))
   .map((song) => song.title);

    const newPlaylist = {
      name: namePlaylist,
      songs: songsFiltradas
    };

    try {
      axios.post("http://localhost:8000/api/playlist", newPlaylist);
    } catch (error) {
      console.error(
        "Error al crear la playlist:",
        error.response ? error.response.data : error.message
      );
    }
    navigate("/playlists");
  };

  return (
    <div className={styles.contenedor}>
      <h1>Create New Playlist</h1>

      <form className={styles.formPlaylist} onSubmit={manejarEnvio}>
        <div className={styles.contenedorName}>
          <label htmlFor="namePlaylist">Playlist Name:</label>
          <input
            className={styles.inputName}
            type="text"
            name="namePlaylist"
            id="namePlaylist"
            value={namePlaylist}
            onChange={(e) => setNamePlaylist(e.target.value)}
          />
        </div>
        <h1>Choose Songs</h1>
        <div>
          {songs.map((song, index) => {
            return (
              <div className={styles.checks} key={index}>
                <input
                  type="checkbox"
                  id={index}
                  checked={selectedSongTitles.includes(song.title)}
                  onChange={() => manejarCambioCheckBox(song.title)}
                />
                <label htmlFor={index}>{song.title}</label>
              </div>
            );
          })}
        </div>
        <div>
          <button className={styles.buttonCreatePlaylist} type="submit">
            Create Playlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlaylist;
