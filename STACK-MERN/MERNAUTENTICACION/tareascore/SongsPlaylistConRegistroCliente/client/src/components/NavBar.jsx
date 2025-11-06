import styles from "./../css/NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = ({logOut}) => {
  return (
      <nav>
        <ul className={styles.lista}>
          <li><Link to={"/songs"}>Songs</Link></li>
          <li><Link to={"/playlists"}>Playlists</Link></li>
          <li><Link to={"/addSongs"}>Add Song</Link></li>
          <li><Link to={"/addPlaylist"}>Add Playlist</Link></li>
          <li><button onClick={logOut}>Log Out</button></li>
        </ul>
      </nav>
  );
};

export default NavBar;
