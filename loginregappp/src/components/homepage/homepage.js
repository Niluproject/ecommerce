import React from "react";
import "./homepage.css"
import { useNavigate } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate();
    function handleClick (){
        navigate("/login")
    }
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={handleClick}>Logout</div>
        </div>
    )
}

export default Homepage