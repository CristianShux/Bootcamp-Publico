import { useState } from "react";
import axios from "axios";
import styles from "./../css/AddPlaylist.module.css";
import { useNavigate } from "react-router-dom";

const AddPlaylist = ({listaSongs, listaPlaylists, setListaPlaylists}) => {
  const [namePlaylist, setNamePlaylist] = useState("");
  const [selectedSongTitles, setSelectedSongTitles] = useState([]);
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

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

    setErrores({});

    const newPlaylist = {
      name: namePlaylist,
      songs: selectedSongTitles,
    };

    try {
      await axios.post("http://localhost:8000/api/playlist", newPlaylist)
        .then(response=>{
          setListaPlaylists([...listaPlaylists,response.data])
        });
      navigate("/playlists");
    } catch (e) {
        setErrores(e.response.data.errors);
    }
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
          {errores.name ? <p>{errores.name}</p> : ""}
        </div>
        <h1>Choose Songs</h1>
        <div>
          {listaSongs.map((song, index) => {
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
        <div className={styles.contenedorBoton}>
          {errores.songs ? <p>{errores.songs}</p> : ""}
          <button className={styles.buttonCreatePlaylist} type="submit">
            Create Playlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlaylist;
