import React, { useEffect } from 'react'
import "./login.css"
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate();
    const [ user, setUser] = useState({
        email: "",
        password: "",
    })

    useEffect(() => {
        const item = localStorage.getItem('user');
        const auth = item !=='' ? JSON.parse(item) : '';
        if (auth) {
            navigate("/")
        }
    }, [])

    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }


    const login = () => {
        const  { email, password } = user
        if(email && password ){
            axios.post("http://localhost:9002/login", user)
            .then( res => {
                console.log(res);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                // console.log(res.data.message);
                Swal.fire({
                    imageWidth: 150,
                    imageHeight: 150,
                    imageAlt: "Success",
                    confirmButtonColor: "#007aff",
                    width: 400,
                    title: "SUCCESS!",
                    text: res.data.message,
                  });
                navigate("/")
            }).catch(error=> {
                // if(error.response.data.error){
                    Swal.fire({
                        imageWidth: 150,
                        imageHeight: 150,
                        imageAlt: "error",
                        confirmButtonColor: "#007aff",
                        width: 400,
                        title: "UNAUTHORIZE!",
                        text: error.response.data.error,
                      });
                // }
            })
        }else{
          
                Swal.fire({
                    title: "Wrong",
                    text: "Invalid Input",
                    icon: "!",
                    confirmButtonText: "OK",
                  });
            
        
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    )
}

export default Login