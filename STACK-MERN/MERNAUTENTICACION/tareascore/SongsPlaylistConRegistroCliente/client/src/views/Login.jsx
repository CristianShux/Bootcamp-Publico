import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
                navigate("/songs");
            })).catch(e=>setErrors(e.response.data.errors));
    } 

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={loginProcess}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={state.email} onChange={(e)=>updateState(e)} />
                    {errors.email?<p>{errors.email}</p>:""}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={state.password} onChange={(e)=>updateState(e)} />
                    {errors.password?<p>{errors.password}</p>:""}
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </div>
    )
};

export default Login;