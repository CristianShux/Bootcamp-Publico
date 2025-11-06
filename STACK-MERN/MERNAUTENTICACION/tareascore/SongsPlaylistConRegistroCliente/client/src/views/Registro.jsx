import { useState } from "react";
import axios from "axios";
import styles from './../css/Login.module.css'
import { useNavigate, Link } from "react-router-dom";
const Registro=({setLogin})=>{
     const[state,setState]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        passwordConfirmation:""
    });
    const[errors,setErrors]=useState({});
    const navigate=useNavigate();

    const updateState= async(e)=>{
        setState({...state,[e.target.name]: e.target.value});
    }
    const registerProcess=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/registro",state)
            .then((response=>{
                localStorage.setItem("token",response.data.token);
                setLogin(true);
                setErrors({});
                navigate("/songs");
            })).catch(e=>setErrors(e.response.data.errors));
    } 

    return (
        <div className={styles.contenedor}> 
            <h1>REGISTRO</h1>
            <form className={styles.formulario} onSubmit={registerProcess}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="firstName" name="firstName" id="firstName" value={state.firstName} onChange={(e)=>updateState(e)} />
                    {errors.firstName?<p style={{color:"red"}}>{errors.firstName}</p>:""}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="lastName" name="lastName" id="lastName" value={state.lastName} onChange={(e)=>updateState(e)} />
                    {errors.lastName?<p style={{color:"red"}}>{errors.lastName}</p>:""}
                </div>
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
                    <label htmlFor="passwordConfirmation">Password Confirmation:</label>
                    <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={state.passwordConfirmation} 
                    onChange={(e)=>updateState(e)} />
                    {errors.passwordConfirmation?<p style={{color:"red"}}>{errors.passwordConfirmation}</p>:""}
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                <div>
                    <Link to={"/home"}><button>Volver</button></Link>
                </div>
            </form>
        </div>
    )
};

export default Registro;