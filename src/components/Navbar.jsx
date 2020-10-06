import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar= () => {      
    
        return (
            <div className="container-fluid">  
                <nav className="navbar navbar-expand-lg row">
                <a className="navbar-brand" href="/">
                    <img src="img/logo.png" alt=""/>
                </a>
                <form className="form-inline col-sm-8 col-md-8 col-5">
                <input type="text" placeholder="Rechercher"/>
                   <button type="submit" className="search__icon">
                       <SearchIcon className="icon"/>
                   </button>
                </form>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon lassName="navbar-toggler-icon" fontSize="large" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/login"> 
                                <button className="nav-link btn__login btns">Se connecter</button>
                            </Link>
                           
                        </li>
                        {/* <li className="nav-item">
                            <button className="nav-link btn__subscribe btns">S'inscrire</button>
                        </li> */}
                    </ul>
                </div>
                </nav>
            </div>

        )
    }
export default Navbar
