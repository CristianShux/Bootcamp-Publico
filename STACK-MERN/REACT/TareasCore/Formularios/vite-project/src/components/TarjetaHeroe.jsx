import styles from "./../css/TarjetaHeroe.module.css"

const TarjetaHeroe=({nombre, apellido})=>{
    return(
        <div className={styles.tarjetaHeroe}>
            <p>{nombre} {apellido}</p>
        </div>
    )

}

export default TarjetaHeroe;