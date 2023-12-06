import React from 'react';
import logo from '../../assets/img/logo-nanny.png';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg custom-nav">
            <div class="container-fluid">
                <a class="navbar-brand custom-logo" routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">
                    <img class="mw-100" src={logo} alt="logo" style={{ width: "160px" }} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-3" aria-current="page" routerLink="about" routerLinkActive="active" ariaCurrentWhenActive="page">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-3" routerLink="services" routerLinkActive="active" ariaCurrentWhenActive="page">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-3" routerLink="events" routerLinkActive="active" ariaCurrentWhenActive="page">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-3" routerLink="tutoring" routerLinkActive="active" ariaCurrentWhenActive="page">Tutoring</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-3" routerLink="blogs" routerLinkActive="active" ariaCurrentWhenActive="page">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-3" routerLink="contact" routerLinkActive="active" ariaCurrentWhenActive="page">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-3" routerLink="login" routerLinkActive="active" ariaCurrentWhenActive="page">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header