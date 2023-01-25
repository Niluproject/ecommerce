import React from "react";
import "./login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ( { setLoginUser } ) => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then( res => {
    //         alert(res.data.message)
    //         setLoginUser(res.data.user)
    //         console.log(res.data.user);
    //         navigate("/")
    //     })
    // }

    const handleLogin = async () => {
        let result = await fetch("http://localhost:9002/login", {
            method: 'post',
          //  body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result) {
            console.log(result)
            localStorage.setItem('user', JSON.stringify(result.user));
            // localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/")
        } else {
            alert("Please enter correct details")
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            {/* {console.log(user)}*/}
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password"></input>
            <div className="button" onClick={handleLogin}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    )
}

export default Login