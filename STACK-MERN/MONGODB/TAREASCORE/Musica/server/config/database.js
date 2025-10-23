import {connect} from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const BD=process.env.BD;

const connectToDb= async ()=>{
    try{
        await connect(BD);
        console.log("La base de datos esta corriendo")

    }catch(e){
        console.log(`Hay un error amigo: ${e}`);
    }
}

export default connectToDb;
