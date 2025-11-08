import {useEffect, useState } from "react";
import styles from "./../css/AllPlaylistsSongs.module.css";
import { Link } from "react-router-dom";

const AllSongs = ({listaSongs, me}) => {
  console.log("Mounting the component");
  const [filtro, setFiltro] = useState("");
  const [songsFiltradas, setSongsFiltradas]=useState([]);

  useEffect(()=>{
    const textoBusqueda=filtro.toLowerCase().trim();
    if(textoBusqueda==""){
        setSongsFiltradas(listaSongs);
        return;
    }
    const newSongs = listaSongs.filter((song) => {
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
  },[filtro, listaSongs])

  return (
    <div className={styles.contenedor}>
      <h1> Bievenido {me.email}</h1>
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
