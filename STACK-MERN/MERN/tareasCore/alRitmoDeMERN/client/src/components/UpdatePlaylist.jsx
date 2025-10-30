import { useEffect, useState } from "react";
import styles from "./../css/AddPlaylist.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdatePlaylist = () => {
  const [namePlaylist, setNamePlaylist] = useState("");
  const [songs, setSongs] = useState([]);
  const [selectedSongTitles, setSelectedSongTitles] = useState([]);
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();
  const { name } = useParams();
  const nombreDecodificado = decodeURIComponent(name);

  useEffect(() => {
    const fetchSongs = async () => {
      axios.get("http://localhost:8000/api/canciones").then((response) => {
        setSongs(response.data);
      });
    };
    fetchSongs();
  }, []);

  useEffect(() => {
    const getSongsOfPlaylist = async () => {
      axios
        .get(`http://localhost:8000/api/playlist/${nombreDecodificado}`)
        .then((response) => {
          setNamePlaylist(response.data.name);
          const songsTitles = response.data.songs.map((song) => song.title);
          setSelectedSongTitles(songsTitles);
        });
    };
    getSongsOfPlaylist();
  }, [nombreDecodificado]);

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

    const newPlaylist = {
      name: namePlaylist,
      songs: selectedSongTitles,
    };

    try {
      await axios.put(
        `http://localhost:8000/api/playlist/${nombreDecodificado}`,
        newPlaylist
      );
      navigate(`/playlists/${nombreDecodificado}`);
    } catch (e) {
      setErrores(e.response.data.errors);
    }
  };

  return (
    <div className={styles.contenedor}>
      <h1>Edit Playlist</h1>

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
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdatePlaylist;
