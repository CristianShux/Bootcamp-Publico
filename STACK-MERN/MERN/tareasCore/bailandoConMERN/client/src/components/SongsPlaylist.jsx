import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './../css/SongsPlaylist.module.css';
import axios from "axios";

const SongsPlaylists=()=>{
    const[songsList,setSongsList]=useState([""]);
    const {name} = useParams(); 

    useEffect(() => {
        const getSongs = async () => {
            const nombreDecodificado = decodeURIComponent(name); //porque en mi caso puse espacios en nombres
            const API_URL = `http://localhost:8000/api/playlist/${nombreDecodificado}`;
            
            try {
                const response = await axios.get(API_URL);
                setSongsList(response.data.songs); 
            } catch (error) {
                console.error("Error al obtener la lista de canciones:", error);
                setSongsList([]); 
            }
        };
        getSongs();
    }, [name]); 


    return (
        <div className={styles.contenedor}>
            <h1>Songs of Playlist</h1>
            <div className={styles.contenedorTarjetas}>
                {songsList.map((song,index)=>{
                    return <div key={index} className={styles.tarjetaSongs}> 
                        <p>Title:{song.title}</p>
                        <p>Artist:{song.artist}</p>
                        <p>Year:{song.yearOfRealease}</p>
                        <p>Genre:{song.genre}</p>
                    </div>
                })}
            </div>
        </div>
    )
};

export default SongsPlaylists;