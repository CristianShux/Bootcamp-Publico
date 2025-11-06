import {useEffect, useState } from "react";
import axios from "axios"
import styles from './../css/AddSongs.module.css';
import { useNavigate, useParams } from "react-router-dom";

const UpdateSong=({listaSongs,setListaSongs})=>{
    const [data, setData]=useState({
        title: "",
        artist: "",
        yearOfRealease: "",
        genre: ""
    });
    const [errores, setErrores] = useState({});
    const navigate=useNavigate();
    const {id}=useParams();
    const index = listaSongs.findIndex((song)=> song._id==id)

    useEffect(()=>{
        const setInformationSong= async()=>{
            const API_URL=`http://localhost:8000/api/canciones/${id}`
            try{
                await axios.get(API_URL,
                    {headers:{token_user:localStorage.getItem("token")}}
                ).then((response)=>{
                    setData(response.data)
                });
            }catch(e){
                console.error("Error al obtener la informacion de la cancion:", e);
            }
        };
        setInformationSong();
    },[id])


    const updateState=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const manejarEnvio= async(e)=>{
        e.preventDefault();
        setErrores({});

        try {
        await axios.put(`http://localhost:8000/api/canciones/${id}`, 
            data, {headers:{token_user:localStorage.getItem("token")}})
            .then(
                response=>{
                            const copyListaSong=[...listaSongs];
                            copyListaSong[index]=response.data;
                            setListaSongs(copyListaSong);
                }
            );
        //si es exito limpio todos los campos y navego
        setData({
            title: "",
            artist: "",
            yearOfRealease: "",
            genre: ""
        })
        navigate(`/songs/${id}`); 

        } catch (e) {
                setErrores(e.response.data.errors);
            }
        };

    return (
        <div onSubmit={manejarEnvio} className={styles.contenedor}>
            <h1>Edit Song</h1>
            <form className={styles.formSongs}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={data.title} onChange={(e)=>{updateState(e)}}/>
                    {errores.title?<p>{errores.title}</p>:""}
                </div>
                <div>
                    <label htmlFor="artist">Artist:</label>
                    <input type="text" name="artist" id="artist" value={data.artist} onChange={(e)=>{updateState(e)}}/>
                    {errores.artist?<p>{errores.artist}</p>:""}
                </div>
                <div>
                    <label htmlFor="yearOfRealease">Year:</label>
                    <input type="yearOfRealease" name="yearOfRealease" id="yearOfRealease" value={data.yearOfRealease} onChange={(e)=>{updateState(e)}}/>
                    {errores.yearOfRealease?<p>{errores.yearOfRealease}</p>:""}
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input type="genre" name="genre" id="genre" value={data.genre} onChange={(e)=>{updateState(e)}}/>
                    {errores.genre?<p>{errores.genre}</p>:""}
                </div>
                <div>
                    <button className={styles.buttonAdd} type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    )
};

export default UpdateSong;