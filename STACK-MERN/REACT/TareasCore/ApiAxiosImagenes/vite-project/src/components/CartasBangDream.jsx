import axios from "axios";
import styles from "./../css/CartasBangDream.module.css";

const CartasBangDream = ({ setArt, setArtTrained }) => {
  const getCards = () => {
    const getRandomIntInclusive = (min, max) =>
      Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
      Math.ceil(min);
    let numero = getRandomIntInclusive(4748, 5100);
    const URL = `https://bandori.party/api/cards/${numero}/`;
    axios(URL).then((response) => {
      console.log(response);
      setArt(response.data.art);
      setArtTrained(response.data.art_trained);
    });
  };

  return (
    <div>
      <button className={styles.boton} onClick={getCards}>
        Cargar cartas aleatorias
      </button>
    </div>
  );
};

export default CartasBangDream;
