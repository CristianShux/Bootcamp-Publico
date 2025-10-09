import { useState } from "react";
import styles from "./../css/FormAgregarNotas.module.css";

const FormAgregarNotas = ({ agregarNotas }) => {
  const [nota, setNota] = useState("");
  const [tipo, setTipo] = useState("");
  const [errores, setErrores] = useState({ nota: "", tipo: "" });

  const manejarEnvio = (e) => {
    e.preventDefault();

    //validaciones
    let notaValidacion = "";
    let tipoValidacion = "";

    if (nota == "") {
      notaValidacion = "Debe escribir la descripcion de su nota";
    }

    if (tipo == "" || tipo=="Selecciona") {
      tipoValidacion = "Debe seleccionar la prioridad de su nota";
    }

    if (nota == "" || tipo == "" || tipo=="Selecciona") {
        setErrores({"nota":notaValidacion, "tipo":tipoValidacion});
        return;
    }
        
    //Agregamos la nota    
    agregarNotas(nota, tipo);

    //Reseteo de variables
    setNota("");
    setTipo("");
    setErrores("");
  };

  return (
    <form onSubmit={(e) => manejarEnvio(e)} className={styles.formAgregar}>
      <div>
        <input
          type="text"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder="Escribe tu nota"
        />
        {errores.nota?<p>{errores.nota}</p>: ""}
      </div>
      <div>
        <select className={styles.selectPrio} name="tipo"  id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="Selecciona">Selecciona</option>
          <option value="Bajo">Bajo</option>
          <option value="Medio">Medio</option>
          <option value="Alto">Alto</option>
        </select>
        {errores.tipo?<p>{errores.tipo}</p>: ""}
      </div>
      <button type="submit" className={styles.agregar}>
        Agregar Nota
      </button>
    </form>
  );
};

export default FormAgregarNotas;
