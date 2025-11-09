import { Link } from 'react-router-dom';
import styles from './../css/Header.module.css'; 

const Header = ({ login, logOut }) => {
  return (
    <header className={styles.mainHeader}>
      <h1 className={styles.logo}>Recetario</h1>
      <nav className={styles.navigation}>
        {login ? (
          <>
            <button  className={styles.navLink}> <Link to={"/recetas"}>Todas las recetas</Link></button>
            <button  className={styles.navLink}><Link to={"/recetas/agregar"}>Agregar receta</Link></button>
            <button onClick={logOut} className={styles.navLink}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.navLink}>Login</Link>
            <Link to="/registro" className={styles.navLink}>Registro</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;