import styles from './../css/Nota.module.css'

const Nota=({descripcion, prioridad, eliminarNota, index})=>{
    return (
        <div className={styles.nota}>
            <div>
                <p>{descripcion} - {prioridad} </p>
            </div>
            <div>
                <button onClick={()=>eliminarNota(index)} className={styles.eliminar}>Eliminar</button>
            </div>
        </div>
    )

}

export default Nota;