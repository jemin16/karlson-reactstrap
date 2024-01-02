import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="index.html"><img src="./images/logo.png" alt="logo" /></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:"end"}}>
                                    <ul class="navbar-nav mb-2 mb-lg-0 ">
                                        <li class="dropdown">
                                            <a class="nav-link  index.html" aria-current="page" href="#">Home <i
                                                class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="#">Digital Agency</a></li>
                                                <li><a href="#">Marketing Agency</a></li>
                                                <li><a href="#">Strategic Agency</a></li>
                                                <li><a href="#">Creative Agency</a></li>
                                                <li><a href="#">IT startup</a></li>
                                                <li><a href="#">SEO Agency</a></li>
                                                <li><a href="#">SaaS Agency</a></li>
                                                <li><a href="#">Al & Machine Learning</a></li>
                                                <li><a href="#">Portfolio Agency</a></li>
                                                <li><a href="#">Cryptocurrency<a href="#" class="new">New</a></a></li>
                                                <li><a href="#">Cyber Security<a href="#" class="new">New</a></a></li>
                                                <li><a href="#">Big Data Solution<a href="#" class="new">New</a></a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link" href="about-2.html">About Us <i
                                                class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="about-2.html">About Us Style One</a></li>
                                                <li><a href="about-2.html">About Us style Two</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link" href="service-4.html">Service <i
                                                class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="#">Service Style One</a></li>
                                                <li><a href="#">Service Style Two</a></li>
                                                <li><a href="#">Service Style Three</a></li>
                                                <li><a href="#">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link" href="project-2.html">Project <i
                                                class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="#">Project Style One</a></li>
                                                <li><a href="#">Project Style Two</a></li>
                                                <li><a href="#">Project Style Three</a></li>
                                                <li><a href="#">Project Style Four</a></li>
                                                <li><a href="#">Project Details</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link" href="blog.html">Blog <i
                                                class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="#">Blog Grid</a></li>
                                                <li><a href="#">Blog Right Sidebar</a></li>
                                                <li><a href="#">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link" href="FAQ.html">Pages <i
                                                class="fa-solid fa-chevron-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="#">Features</a></li>
                                                <li><a href="#">Team</a></li>
                                                <li><a href="#">Pricing</a></li>
                                                <li><a href="#">Partner</a></li>
                                                <li><a href="#">Login</a></li>
                                                <li><a href="#">Register</a></li>
                                                <li><a href="#">404 Error Page</a></li>
                                                <li><a href="#">FAQ</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link" href="contact.html">Contact</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa-solid fa-bars"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
