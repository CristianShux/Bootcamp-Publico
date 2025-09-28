//Forma nuimero 1 con destructuracion adentro
/*const Animal = (props) => {
  const { especie, nombre } = props;

  return (
    <div>
      <p>{especie}: {nombre}</p>
    </div>
  );
};

export default Animal;*/

//Forma numero 2 mas efectiva con destructuracion directa en parametros y ejemplo mas largo
import PropTypes from "prop-types";

const Animal = ({ especie, nombrePerro, edad, atributos, juguetesFavoritos, nombreDueño }) => {
  const { tamaño, color } = atributos;
  const [jugueteUno, jugueteDos, jugueteTres] = juguetesFavoritos;

  return (
    <div style={{ border: "1px solid", textAlign: "center" }}>
      <h1>
        {especie} - {nombrePerro} - Edad: {edad}
      </h1>
      <h2>Dueño de la Mascota</h2>
      <p>{nombreDueño}</p>
      <h3>Atributos de {nombrePerro}</h3>
      <p>Tamaño: {tamaño}</p>
      <p>Color: {color}</p>
      <h4>Juguetes Favoritos de {nombrePerro}</h4>
      <p>{jugueteUno}</p>
      <p>{jugueteDos}</p>
      <p>{jugueteTres}</p>
    </div>
  );
};

Animal.propTypes = {
  especie: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  atributos: PropTypes.shape({
    tamaño: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  juguetesFavoritos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Animal;
