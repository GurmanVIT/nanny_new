import React from 'react';
import logo from '../../assets/img/logo-nanny.png';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-nav">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand custom-logo">
                    <img className="mw-100" src={logo} alt="logo" style={{ width: "160px" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/tutorings">Tutorings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/blogs">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                {/* <p>hfyct</p> */}
            </div>
        </nav>
    )
}

export default Header