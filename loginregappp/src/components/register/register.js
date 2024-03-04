import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && password === reEnterPassword) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    Swal.fire({
                        title: "Success",
                        text: "Posted",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                    navigate("/login");
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error",
                        text: error.response.data.message || "An error occurred",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                });
        } else {
            Swal.fire({
                title: "Wrong",
                text: "Invalid Input",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    }    
    return (
        <div className="register">
        {console.log("user", user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
        <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>Login</div>
    </div>

    )
}

export default Register