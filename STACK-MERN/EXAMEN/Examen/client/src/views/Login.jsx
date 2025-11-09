import { useState } from "react";
import axios from "axios";
import styles from './../css/Login-register.module.css'
import { useNavigate, Link } from "react-router-dom";

const Login=({setLogin})=>{
    const[state,setState]=useState({
        email:"",
        password:""
    });
    const[errors,setErrors]=useState({});
    const navigate=useNavigate();

    const updateState= async(e)=>{
        setState({...state,[e.target.name]: e.target.value});
    }
    const loginProcess=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/login",state)
            .then((response=>{
                localStorage.setItem("token",response.data.token);
                setLogin(true);
                setErrors({});
                navigate("/recetas");
            })).catch(e=>setErrors(e.response.data.errors));
    } 

    return (
        <div className={styles.contenedor}> 
            <h1>LOGIN</h1>
            <form className={styles.formulario} onSubmit={loginProcess}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={state.email} onChange={(e)=>updateState(e)} />
                    {errors.email?<p style={{color:"red"}}>{errors.email}</p>:""}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={state.password} onChange={(e)=>updateState(e)} />
                    {errors.password?<p style={{color:"red"}}>{errors.password}</p>:""}
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </div>
    )
};

export default Login;