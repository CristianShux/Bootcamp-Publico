import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './../css/SongsPlaylist.module.css';
import styles2 from './../css/BotonesEditores.module.css'
import axios from "axios";
import NotFound from "../components/NotFound";

const SongsPlaylists=({listaPlaylists, setListaPlaylists, logOut})=>{
    const[songsList,setSongsList]=useState([""]);
    const[error,setError]=useState("");
    const {name} = useParams(); 
    const navigate=useNavigate();
    const nombreDecodificado = decodeURIComponent(name);

    useEffect(() => {
        const getSongs = async () => {
            const API_URL = `http://localhost:8000/api/playlist/${nombreDecodificado}`;
            
            try {
                const response = await axios.get(API_URL,
                    {headers:{token_user:localStorage.getItem("token")}}
                );
                setSongsList(response.data.songs); 
            } catch (error) {
                if(error.status==406){
                    logOut();
                }
                setError(error);
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
            await axios.delete(`http://localhost:8000/api/playlist/${nombreDecodificado}`,
                {headers:{token_user:localStorage.getItem("token")}}
            );
            setListaPlaylists(listaPlaylists.filter((playlist)=>playlist.name!=nombreDecodificado));
            navigate('/playlists');
        }catch(e){
            if(e.status==406){
                logOut();
            }
            console.error("Error al eliminar la cancion:", e);
        }
    }

    if(error){
        return <NotFound/>
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