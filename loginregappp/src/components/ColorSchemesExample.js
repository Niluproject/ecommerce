import React from 'react';
// import test from '../components/ecommm.png'
// import testt from '../components/images/cov.png'
import { Link, useNavigate } from 'react-router-dom';
const ColorSchemesExample = () => {
    // const auth = localStorage.getItem('user');
    // const navigate = useNavigate();
    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/signup')
    // }
    return (
        <div>
            {/* <img
            alt='logo'
            src={testt}
            className='logo' /> */}
            {

                    <ul className="nav-ul">
                        {/* <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update"> Update Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/signup">Logout</Link></li>
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        {/* <li><Link to="/update">Portfolio</Link></li> */}
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/signup">Logout</Link></li>
                        <li> <Link to="/Register">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }


        </div>
    )
}

export default ColorSchemesExample;