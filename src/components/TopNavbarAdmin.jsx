import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import LogOutModal from './Modals/LogOutModal';
import logo from '../assets/images/Logo.png';

const TopNavbarAdmin = () => {
    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Toggling logout modal");
        setLogout(true); // Set logout modal to true to show it
    }
    
    const confirmLogout = () => {
        console.log("Logging out...");
        // Clear user session or authentication state here
        localStorage.removeItem('user'); // Adjust based on your auth logic
        navigate('/'); // Redirect to login page
    }

    const cancelLogout = () => {
        console.log("Logout canceled");
        setLogout(false); // Close the logout modal
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            {logout && <LogOutModal toggleModalLogOut={cancelLogout} onConfirmLogout={confirmLogout} />}

            <div className="container-fluid">
                <img src={logo} className="img-fluid" style={{ width: '150px' }} alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                style={{ color: 'white' }} 
                                className={({ isActive }) => `nav-link m-2 mr-3 ${isActive ? 'active' : ''}`} 
                                to="/admin/user"
                            >
                                User
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                style={{ color: 'white' }} 
                                className={({ isActive }) => `nav-link m-2 ${isActive ? 'active' : ''}`} 
                                to="/admin/film"
                            >
                                Film
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button style={{ color: 'white' }} className="nav-link m-2" aria-current="page" onClick={handleLogout}>
                                Logout <i className="fa-solid fa-user"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbarAdmin;
