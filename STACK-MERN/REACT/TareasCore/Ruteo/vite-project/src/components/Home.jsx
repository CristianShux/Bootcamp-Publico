import { Link } from "react-router-dom";
import styles from "./../css/Home.module.css"
const Home = ({galeryCards}) => { 
  return (
    <div className={styles.home}>
      <h1>Bienvenido a la Galeria de Arte de Project Sekai</h1>
      <ul>
        {galeryCards.map((card, index)=>
        <li key={index} className={styles.itemlist}><Link to={`/art/${index}`}>{card.name}</Link></li>
        )}
      </ul>
    </div>
  );
};

export default Home;
