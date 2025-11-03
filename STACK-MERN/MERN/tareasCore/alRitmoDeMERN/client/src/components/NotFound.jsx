import styles from './../css/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.noencontrado}>
      <h1 className={styles.titulo}>404 - Página no encontrada</h1>
      <p className={styles.descripcion}>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default NotFound;