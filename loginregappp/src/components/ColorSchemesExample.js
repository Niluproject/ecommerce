import React from 'react';
// import test from '../components/ecommm.png'
import test from  '../components/images/cov.png'
import { Link, useNavigate } from 'react-router-dom';
const ColorSchemesExample = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img
            alt='logo'
            src={test}
            className='logo' />
            {
                auth ?
                    <ul className="nav-ul">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link onClick={logout} to="/register">Logout ({ JSON.parse(auth)})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/register">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        {/* <li><Link to="/update">Portfolio</Link></li> */}
                    </ul>
            }


        </div>
    )
}

export default ColorSchemesExample;