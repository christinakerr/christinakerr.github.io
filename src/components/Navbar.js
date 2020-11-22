/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Christina Kerr</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto float-right">
                    <li className="nav-item">
                    <NavLink to="/" activeClassName="active">
                        <a className="nav-link">About</a>
                    </NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active">
                        <a className="nav-link">Portfolio</a>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                    </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;