import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

const TopNavBar = () => {
    const location = useLocation(); 


    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ backgroundColor: "black" }}>
            <div className="container-fluid">
                <img
                    src={logo}
                    className="img-fluid"
                    style={{ width: "150px" }}
                    alt="Logo"
                />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/home"
                                className={`nav-link m-2 mr-5 ${isActive('/home') ? 'active' : ''}`}
                                style={{ color: "white" }}
                            >
                                Beranda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/camilan"
                                className={`nav-link m-2 ${isActive('/camilan') ? 'active' : ''}`}
                                style={{ color: "white" }}
                            >
                                Pesan Camilan
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/pesan-tiket"
                                className={`nav-link m-2 ${isActive('/pesan-tiket') ? 'active' : ''}`}
                                style={{ color: "white" }}
                            >
                                Pesan Tiket
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/profil"
                                className={`nav-link m-2 ${isActive('/profil') ? 'active' : ''}`}
                                style={{ color: "white" }}
                            >
                                Profil <i className="fa-solid fa-user"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNavBar;
