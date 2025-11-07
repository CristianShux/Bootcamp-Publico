import {useEffect, useState } from "react";
import styles from "./../css/AllPlaylistsSongs.module.css";
import { Link } from "react-router-dom";

const Playlists=({listaPlaylists})=>{
    console.log("Mounting the component");
    const [filtro, setFiltro] = useState("");
    const [playlistsFiltradas, setPlaylistsFiltradas]=useState([]);


    useEffect(()=>{
        const textoBusqueda=filtro.toLowerCase().trim();
        if(textoBusqueda==""){
            setPlaylistsFiltradas(listaPlaylists);
            return;
        }
        const newPlaylists=listaPlaylists.filter((playlist)=>playlist.name.toLowerCase().includes(textoBusqueda));
        setPlaylistsFiltradas(newPlaylists);
    },[filtro,listaPlaylists]);

    
    return (
         <div className={styles.contenedor}>
              <h1>All Playlists</h1>
              <input
                htmlFor="busqueda"
                id="busqueda"
                value={filtro}
                placeholder="Search playlists"
                onChange={(e) => setFiltro(e.target.value)}
              ></input>
              <ul>
                {playlistsFiltradas.map((playlist, index) => {
                  return (
                    <li key={index}>
                        <Link className={styles.colorItem} to={`/playlists/${playlist.name}`}>{playlist.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
    )
};
export default Playlists;