import {useState } from "react";
import axios from "axios"
import styles from './../css/Agregar-EditarReceta.module.css';
import { useNavigate } from "react-router-dom";

const AgregarReceta = ({ me, recetas, setRecetas, logOut}) => {
    const [data, setData] = useState({
        nombre: "",
        tiempoPreparacion: "",
        ingredientes: "",
        instrucciones: "",
        esPublica: false,
    });
    const [errores, setErrores] = useState({});
    const navigate = useNavigate();
    const updateState = (e) => {
        const { name, value} = e.target;

        let valorFinal;
        if (name === "esPublica") {
            valorFinal = (value === "true"); 
        } else {
            valorFinal = value;
        }
        setData({ ...data, [name]: valorFinal });
    }

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setErrores({});

        const body = {
            ...data,
            creadorId: me.id, 
            creadorNombre: `${me.firstName} ${me.lastName}`
        };

        try {
            const response = await axios.post("http://localhost:8000/api/recetas", body, {
                headers: { token_user: localStorage.getItem("token") }
            });
            setRecetas([...recetas, response.data]);
            
            setData({
                nombre: "",
                tiempoPreparacion: "",
                ingredientes: "",
                instrucciones: "",
                esPublica: false,
            });
            
            navigate('/recetas'); 

        } catch (e) {
            if (e.response && e.response.status === 406) {
                logOut();
            }
                setErrores(e.response.data.errors);

        }
    };

    return (
        <div className={styles.contenedor}>
            <h1>Agregar Receta</h1>
            <form className={styles.formulario} onSubmit={manejarEnvio}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" value={data.nombre} onChange={updateState} />
                    {errores.nombre ? <p style={{color:"red"}}>{errores.nombre}</p> : ""}
                </div>
                <div>
                    <label htmlFor="tiempoPreparacion">Tiempo de preparación (en minutos)</label>
                    <input type="number" name="tiempoPreparacion" id="tiempoPreparacion" value={data.tiempoPreparacion} onChange={updateState} />
                    {errores.tiempoPreparacion ? <p style={{color:"red"}}>{errores.tiempoPreparacion}</p> : ""}
                </div>
                <div>
                    <label htmlFor="ingredientes">Ingredientes</label>
                    <textarea name="ingredientes" id="ingredientes" value={data.ingredientes} onChange={updateState}rows="5"/>
                    {errores.ingredientes ? <p style={{color:"red"}}>{errores.ingredientes}</p> : ""}
                </div>
                <div>
                    <label htmlFor="instrucciones">Instrucciones:</label>
                    <textarea name="instrucciones" id="instrucciones" value={data.instrucciones} onChange={updateState}rows="5"/>
                    {errores.instrucciones ? <p style={{color:"red"}}>{errores.instrucciones}</p> : ""}
                </div>
                <label>¿Quieres mostrar tu receta a los demás?</label>
                <div className={styles.contenedorChequeo}> 
                    <div>
                        <input 
                            type="radio" 
                            name="esPublica" 
                            id="publicaNo" 
                            value="false" 
                            checked={data.esPublica === false} 
                            onChange={updateState}
                        />
                        <label htmlFor="publicaNo">No</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="esPublica" 
                            id="publicaSi" 
                            value="true" 
                            checked={data.esPublica === true} 
                            onChange={updateState}
                        />
                        <label htmlFor="publicaSi">Sí</label>
                    </div>
                    {errores.esPublica ? <p style={{color:"red"}}>{errores.esPublica}</p> : ""}
                </div>

                <div>
                    <button type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
};

export default AgregarReceta;