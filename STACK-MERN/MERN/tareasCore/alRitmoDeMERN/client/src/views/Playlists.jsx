import {useEffect, useState } from "react";
import styles from "./../css/AllPlaylistsSongs.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Playlists=()=>{
    const [playlists,setPlaylists]=useState([]);
    const [filtro, setFiltro] = useState("");
    const [playlistsFiltradas, setPlaylistsFiltradas]=useState([]);


    useEffect(()=>{
        const fetchPlaylists= async()=>{
            await axios.get("http://localhost:8000/api/playlist")
                .then((response)=>{
                    setPlaylists(response.data)
                });
        };
        fetchPlaylists();
    },[playlists])

    useEffect(()=>{
        const textoBusqueda=filtro.toLowerCase().trim();
        if(textoBusqueda==""){
            setPlaylistsFiltradas(playlists);
            return;
        }
        const newPlaylists=playlists.filter((playlist)=>playlist.name.toLowerCase().includes(textoBusqueda));
        setPlaylistsFiltradas(newPlaylists);
    },[filtro,playlists]);

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