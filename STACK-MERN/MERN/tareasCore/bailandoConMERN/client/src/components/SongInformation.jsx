import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SongInformation=()=>{
    const[informacion, setInformacion]=useState({});
    const {id}=useParams();

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

    return (
        <div>
            <h1>Information Of Song</h1>
            <p>ID: {informacion._id}</p>
            <p>Title: {informacion.title}</p>
            <p>Artist: {informacion.artist}</p>
            <p>Year of Release: {informacion.yearOfRealease}</p>
            <p>Genre: {informacion.genre}</p>
            <p>Date of Created: {informacion.createdAt}</p>
        </div>
    )
};

export default SongInformation;