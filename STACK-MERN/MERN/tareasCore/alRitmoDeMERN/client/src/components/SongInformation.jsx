import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './../css/SongInformation.module.css'
import styles2 from './../css/BotonesEditores.module.css'

const SongInformation=()=>{
    const[informacion, setInformacion]=useState({});
    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        const getInformationSong= async()=>{
            const API_URL=`http://localhost:8000/api/canciones/${id}`
            try{
                await axios.get(API_URL).then((response)=>{
                    setInformacion(response.data)
                });
            }catch(e){
                console.error("Error al obtener la informacion de la cancion:", e);
            }
        };
        getInformationSong();
    },[id])

    const handleEditClick=()=>{
        navigate(`/editSongs/${id}`);
    }

    const handleDeleteClick= async()=>{
        try{
            axios.delete(`http://localhost:8000/api/canciones/${id}`);
            navigate('/songs');
        }catch(e){
             console.error("Error al eliminar la cancion:", e)
        }

    }
    return (
        <div className={styles.contenedor}>
            <h1>{informacion.title}</h1>
            <h2>Artist: {informacion.artist}</h2>
            <h2>Year of Release: {informacion.yearOfRealease}</h2>
            <h2>Genre: {informacion.genre}</h2>
            <div className={styles2.contenedorBotones}>
                <button onClick={handleEditClick} className={styles2.colorAzul}>Edit Song</button>
                <button onClick={handleDeleteClick} className={styles2.colorRojo}>Delete Song</button>
            </div>
        </div>
    )
};

export default SongInformation;