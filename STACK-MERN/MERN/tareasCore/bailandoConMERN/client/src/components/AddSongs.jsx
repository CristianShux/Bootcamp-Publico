import {useState } from "react";
import axios from "axios"
import styles from './../css/AddSongs.module.css';
import { useNavigate } from "react-router-dom";

const AddSongs=()=>{
    const [title, setTitle]=useState("");
    const [artist, setArtist]=useState("");
    const [year, setYear]=useState("");
    const [genre, setGenre]=useState("");
    const [errores, setErrores] = useState({});
    const navigate=useNavigate();

    const manejarEnvio= async(e)=>{
        e.preventDefault();
    
    const nuevaCancion = { 
            title: title, 
            artist: artist, 
            yearOfRealease: Number(year), 
            genre: genre 
        };

    setErrores({});

        try {
        await axios.post("http://localhost:8000/api/canciones", nuevaCancion);
        //si es exito limpio todos los campos y navego
        setTitle("");
        setArtist("");
        setYear("");
        setGenre("");
        navigate('/songs'); 

    } catch (e) {
            setErrores(e.response.data.errors);
        }
    };

    return (
        <div onSubmit={manejarEnvio} className={styles.contenedor}>
            <h1>New Song</h1>
            <form className={styles.formSongs}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    {errores.title?<p>{errores.title}</p>:""}
                </div>
                <div>
                    <label htmlFor="artist">Artist:</label>
                    <input type="text" name="artist" id="artist" value={artist} onChange={(e)=>setArtist(e.target.value)}/>
                    {errores.artist?<p>{errores.artist}</p>:""}
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input type="year" name="year" id="year" value={year} onChange={(e)=>setYear(e.target.value)}/>
                    {errores.yearOfRealease?<p>{errores.yearOfRealease}</p>:""}
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input type="genre" name="genre" id="genre" value={genre} onChange={(e)=>setGenre(e.target.value)}/>
                    {errores.genre?<p>{errores.genre}</p>:""}
                </div>
                <div>
                    <button className={styles.buttonAdd} type="submit">Add Song</button>
                </div>
            </form>
        </div>
    )
};

export default AddSongs;