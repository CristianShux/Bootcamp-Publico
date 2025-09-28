import styles from './../Css/Main.module.css'
import SubContent from "./SubContent";
import Advertisement from './Advertisement';

const Main=()=>{
    return <div className={styles.main}>
        <SubContent/>
        <SubContent/>
        <SubContent/>
        <Advertisement/>
    </div>
}

export default Main;