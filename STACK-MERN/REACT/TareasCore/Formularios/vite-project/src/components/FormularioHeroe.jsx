import { useState } from "react";
import styles from "./../css/FormularioHeroe.module.css";

const FormularioHeroe = ({agregarHeroe, actualizarMensajeEncabezado, existeCorreo}) => {
    const[nombre, setNombre]=useState("");
    const[apellido, setApellido]=useState("");
    const[correoElectronico, setCorreoElectronico]=useState("");
    const[constraseña, setContraseña]=useState("");
    const[confirmarContraseña, setConfirmarContraseña]=useState("");
    const [errores, setErrores] = useState({nombre: "", apellido: "", correoElectronico: "", constraseña:"", confirmarContraseña:""});

    const manejarEnvio=(e)=>{
        e.preventDefault();

        //Validaciones
        let nombreValidacion="";
        let apellidoValidacion="";
        let correoElectronicoValidacion="";
        let contraseñaValidacion="";
        let confirmarContraseñaValidacion="";

        //Validacion nombre
        if(nombre==""){
            nombreValidacion="No estas ingresando el nombre del heroe";
        }else if(nombre.length<4){
            nombreValidacion="El nombre del heroe debe tener al menos 4 caracteres";
        }
        

        //Validacion Apellido
        if(apellido==""){
            apellidoValidacion="No estas ingresando el apellido del heroe";
        }else if(apellido.length<4){
            apellidoValidacion="El apellido del heroe debe tener al menos 4 caracteres";
        }
        

        //Validacion correo
        if (correoElectronico == "") {
        correoElectronicoValidacion = "No estas ingresando el correo electronico del heroe";
        } else if (correoElectronico.length < 10) {
        correoElectronicoValidacion = "El correo electronico es muy corto";
        } else if (!correoElectronico.includes("@")) {
        correoElectronicoValidacion = "El correo electronico del heroe no tiene @";
        } else if(existeCorreo(correoElectronico)){
            correoElectronicoValidacion = "El correo electronico del heroe ya existe";
        }

        //Validacion contraseñas
        if(constraseña==""){
            contraseñaValidacion="No estas ingresando la contraseña del heroe";
        }else if(constraseña.length<12){
            contraseñaValidacion="La contraseña del heroe debe tener al menos 12 caracteres";
        }

        if(confirmarContraseña==""){
            confirmarContraseñaValidacion="Ingresa denuevo la contraseña por favor";
        }else if(confirmarContraseña!=constraseña){
            confirmarContraseñaValidacion="La contraseña debe coincidir con la del anterior campo"
        }

        if(nombre=="" || nombre.length<4 || apellido==""|| apellido.length<4 || correoElectronico=="" || correoElectronico.length<10 || 
            !correoElectronico.includes("@") || existeCorreo(correoElectronico) || constraseña=="" || constraseña.length<12 || confirmarContraseña=="" || confirmarContraseña!=constraseña){
            setErrores({"nombre":nombreValidacion, "apellido":apellidoValidacion, 
                "correoElectronico":correoElectronicoValidacion, "constraseña":contraseñaValidacion, 
                "confirmarContraseña":confirmarContraseñaValidacion })
            return;
        }

        //agregamos el heroe
        agregarHeroe(nombre, apellido, correoElectronico, constraseña, confirmarContraseña);

        //actualizamos el mensaje del encabezado
        actualizarMensajeEncabezado();

        //reseteo de variables
        setNombre("");
        setApellido("");
        setCorreoElectronico("");
        setContraseña("");
        setConfirmarContraseña("");
        setErrores("");

    }

  return (  
    <form onSubmit={manejarEnvio} className={styles.formularioHeroe}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        {errores.nombre?<p>{errores.nombre}</p>:""}
      </div>
            <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" name="apellido" id="apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
        {errores.apellido?<p>{errores.apellido}</p>:""}
      </div>
            <div>
        <label htmlFor="correoElectronico">Correo Electrónico:</label>
        <input type="text" name="correoElectronico" id="correoElectronico" value={correoElectronico} onChange={(e)=>setCorreoElectronico(e.target.value)} />
        {errores.correoElectronico?<p>{errores.correoElectronico}</p>:""}
      </div>
            <div>
        <label htmlFor="contraseña">Contraseña:</label>
        <input type="password" name="contraseña" id="contraseña" value={constraseña} onChange={(e)=>setContraseña(e.target.value)}/>
        {errores.constraseña?<p>{errores.constraseña}</p>:""}
     </div>
            <div>
        <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
        <input type="password" name="confirmarContraseña" id="confirmarContraseña" value={confirmarContraseña} onChange={(e)=>setConfirmarContraseña(e.target.value)} />
        {errores.confirmarContraseña?<p>{errores.confirmarContraseña}</p>:""}
      </div>
      <div>
        <button type="submit">Crear Heroe Profesional</button>
      </div>
    </form>
  );
};

export default FormularioHeroe;
