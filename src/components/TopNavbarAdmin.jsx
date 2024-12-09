
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import LogOutModal from './Modals/LogOutModal';

import logo from '../assets/images/Logo.png';

const TopNavbarAdmin = () => {
    const [logout, setLogout] = useState(false);

    const handleLogout = () => {
        setLogout(!logout);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            {logout && <LogOutModal handleLogout={handleLogout}/>}

            <div className="container-fluid">
                <img src={logo} className="img-fluid" style={{ width: '150px' }} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                style={{ color: 'white' }} 
                                className="nav-link m-2 mr-3" 
                                to="/admin/user"
                                activeClassName="active" 
                            >
                                User
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                style={{ color: 'white' }} 
                                className="nav-link m-2" 
                                to="/admin/film"
                                activeClassName="active" 
                            >
                                Film
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button style={{ color: 'white' }} className="nav-link m-2" aria-current="page" data-bs-toggle="modal" data-bs-target="#keluar" onClick={handleLogout}>
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
