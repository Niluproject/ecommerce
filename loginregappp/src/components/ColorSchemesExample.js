import React from 'react';
// import test from '../components/ecommm.png'
// import Dropdown from 'react-bootstrap/Dropdown';
import test from '../components/images/cov.png'
import { Link, useNavigate } from 'react-router-dom';
const ColorSchemesExample = () => {
    const item = localStorage.getItem('user');
    console.log(item);
    const auth = item !=='' && item !== null ? JSON.parse(item) : '';
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/register')
    }
    return (
        <div>
            <img
                alt='logo'
                src={test}
                className='logo' />
            {
                auth._id ?
                    <ul className="nav-ul">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/contactlist">Contact List</Link></li>
                        <li><Link onClick={logout} to="/login">Logout ({auth.name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/register">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
                    </ul>
            }


        </div>
    )
}

export default ColorSchemesExample;