import {useEffect, useState } from "react";
import styles from "./../css/SongsPlaylists.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AllSongs = () => {
  const [songs, setSongs] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [songsFiltradas, setSongsFiltradas]=useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      axios.get("http://localhost:8000/api/canciones").then((response) => {
        setSongs(response.data);
      });
    };
    fetchSongs();
  }, [songs]);

  useEffect(()=>{
    const textoBusqueda=filtro.toLowerCase().trim();
    if(textoBusqueda==""){
        setSongsFiltradas(songs);
        return;
    }
    const newSongs = songs.filter((song) => {
      const titulo = song.title.toLowerCase();
      const artista = song.artist.toLowerCase();
      const genero = song.genre.toLowerCase();

      return (
        titulo.includes(textoBusqueda) || 
        artista.includes(textoBusqueda) ||
        genero.includes(textoBusqueda)
      );
    });
    setSongsFiltradas(newSongs);
  },[filtro, songs])

  return (
    <div className={styles.contenedor}>
      <h1>All Songs</h1>
      <input
        htmlFor="busqueda"
        id="busqueda"
        value={filtro}
        placeholder="Search songs by name, artist or genre"
        onChange={(e) => setFiltro(e.target.value)}
      ></input>
      <ul>
        {songsFiltradas.map((song, index) => {
          return (
            <li key={index}>
              <Link className={styles.colorItem} to={`/songs/${song._id}`}>{song.title}</Link> by{" "}
              {song.artist} ({song.genre})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllSongs;
