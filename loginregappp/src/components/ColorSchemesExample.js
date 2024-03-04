import React from 'react';
// import test from '../components/ecommm.png'
import Dropdown from 'react-bootstrap/Dropdown';
import test from '../components/images/cov.png'
import { Link, useNavigate } from 'react-router-dom';
const ColorSchemesExample = () => {
    const item = localStorage.getItem('user');
    console.log(item);
    const auth = item !== '' && item !== null ? JSON.parse(item) : '';
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/register')
    }
    return (
        <div>
            <a href='/'>
                <img
                    alt='logo'
                    src={test}
                    className='logo'
                />
            </a>
            {
                auth._id ?
                    <ul className="nav-ul">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/contactlist">Contact List</Link></li>
                        <li><Link to="/formdata">Formik Form</Link></li>
                        <li><Link to="/sendmail">Email_Sent</Link></li>
                        <li><Link onClick={logout} to="/login">Logout ({auth.name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        {/* <Dropdown> */}
                        <li> <Link to="/register">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>

                        {/* <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"><Link to="/register">Sign Up</Link></Dropdown.Toggle>    
                        <Dropdown.Menu variant="dark"><Dropdown.Item><li><Link to="/login">Login</Link></li></Dropdown.Item></Dropdown.Menu>
                        </Dropdown> */}
                    </ul>
            }


        </div>
    )
}

export default ColorSchemesExample;