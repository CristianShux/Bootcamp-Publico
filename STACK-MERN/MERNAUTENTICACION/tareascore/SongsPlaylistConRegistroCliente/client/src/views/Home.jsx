import styles from './../css/Home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.contenedor}>
        <h1>BIENVENIDO</h1>
        <div className={styles.contenedorBotones}>
            <div>
                <Link to={"/login"}><button>Login</button></Link>
            </div>
            <div>
                <Link to={"/registro"}><button>Registro</button></Link>
            </div>
        </div>
    </div>

  );
};

export default Home;
