import "bootstrap/dist/css/bootstrap.min.css"; // <-- import bootstrap here
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // optional, for JS components like modals
import styles from "./../css/TarjetaSup.module.css"
import { useState } from "react";
const TarjetaSup = ({ name, description, likes, color, index }) => {
  const textOnBg = ["warning", "light", "info"].includes(color)? "text-dark": "text-white";
  const[countLikes, setCountLikes]=useState(likes);

  const actualizarCount=()=>{
    setCountLikes(countLikes+1);
  }
  return (
    <div key={index} className={`card bg-${color} ${textOnBg} ${styles.tarjetaSup}`}>
      <div className="card-header">
        <strong>{name}</strong>
        <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGhjM2VvNzMzc2M3eDczdDhvMnBpM2RobXhieWN1bzZ5eWFiZXVuMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lTLV2erK8vf1MIz4Rk/giphy.gif"
        alt="batman"
      />
      </div>
      <div className="card-body">{description}</div>
      <div className="card-footer">
        {countLikes==0?<button disabled onClick={actualizarCount}>{countLikes} Like(s)</button>:<button onClick={actualizarCount}>{countLikes} Like(s)</button>}
      </div>
    </div>
  );
};

export default TarjetaSup;
