import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './../css/SongsPlaylist.module.css';
import styles2 from './../css/BotonesEditores.module.css'
import axios from "axios";

const SongsPlaylists=({listaPlaylists, setListaPlaylists})=>{
    const[songsList,setSongsList]=useState([""]);
    const {name} = useParams(); 
    const navigate=useNavigate();
    const nombreDecodificado = decodeURIComponent(name);

    useEffect(() => {
        const getSongs = async () => {
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
    }, [nombreDecodificado]); 

    const handleEditClick=()=>{
        navigate(`/editPlaylists/${nombreDecodificado}`)
    }
    const handleDeleteClick= async()=>{
        try{
            axios.delete(`http://localhost:8000/api/playlist/${nombreDecodificado}`);
            setListaPlaylists(listaPlaylists.filter((playlist)=>playlist.name!=nombreDecodificado));
            navigate('/playlists');
        }catch(e){
             console.error("Error al eliminar la cancion:", e)
        }
    }
    return (
        <div className={styles.contenedor}>
            <h1>{name}</h1>
            <h2>Songs</h2>
            <div>
                {songsList.map((song,index)=>{
                    return <div key={index} className={styles.contenedorSongs}> 
                        <p>{song.title}</p>
                    </div>
                })}
                <div className={styles2.contenedorBotones}>
                        <button onClick={handleEditClick} className={styles2.colorAzul}>Edit Playlist</button>
                        <button onClick={handleDeleteClick} className={styles2.colorRojo}>Delete Playlist</button>
                </div>
            </div>
        </div>
    )
};

export default SongsPlaylists;