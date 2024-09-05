import React, { useState } from "react";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";




function Header(){
    

    return(
        <div>
            <header>
                <div className="container">
                    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-white">
                        <a className="navbar-brand" href="/">
                            <img src="https://i.ibb.co/GTr3w2M/logo.webp" alt="logo" width="160" height="25"/>
                        </a>
                        <div className="number ml-auto">
                            <Link className="btn-warning mr-sm-2 p-xy" to="/Login">
                                Login
                            </Link>
                        </div>
                        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mx-auto">
                                {/* <li className="nav-item ">
                                    <a className="nav-link" className="smoothScroll" href="index.html">Home <span className="sr-only">(current)</span></a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link smoothScroll" href="/#industries">Industries</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link smoothScroll" href="/#products">Products</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link smoothScroll" href="/#pricing">Pricing</a>
                                </li>
                                {/* <li className="nav-item ">
                                    <a className="nav-link" className="smoothScroll" href="#">Blog</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link smoothScroll" href="/#support">Support</a>
                                </li>
                            </ul>
                            <div className="form-inline my-2">
                                <Link className="btn-warning mr-sm-2" to="/Login">Login</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
        
    )
}

export default Header;