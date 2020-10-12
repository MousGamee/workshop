import React, { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Redirect } from 'react-router-dom'
import { NavbarBrand, Nav, Navbar as MyNav, Form,  } from 'react-bootstrap';

const Navbar= ({params}) => {    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(params)
        params.history.push('/searchResult')
    }

        return (
            <MyNav sticky="top" bg="light" variant="light">
                <MyNav.Brand href="#home" className="d-none d-md-block"><img src="img/logo.png" alt=""/></MyNav.Brand>
                <Form inline className="ml-auto" onSubmit={handleSubmit}>
                <input type="text" placeholder="Rechercher"/>
                   <button type="submit" className="search__icon">
                       <SearchIcon className="icon"/>
                   </button>
                 </Form>
                 <Nav className="ml-auto">
                    <Link to="/login"> 
                        <button className="nav-link btn__login btns">Se connecter</button>
                    </Link>
                </Nav>
            </MyNav>

            // <div className="container-fluid">  
            //     <nav className="navbar navbar-expand-lg row">
            //     <a className="navbar-brand" href="/">
            //         <img src="img/logo.png" alt=""/>
            //     </a>
            //     <form className="form-inline col-sm-8 col-md-8 col-5">
                // <input type="text" placeholder="Rechercher"/>
                //    <button type="submit" className="search__icon">
                //        <SearchIcon className="icon"/>
                //    </button>
            //     </form>
            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            //         <MenuIcon lassName="navbar-toggler-icon" fontSize="large" />
            //     </button>
            //     <div className="collapse navbar-collapse " id="navbarNavDropdown">
            //         <ul className="navbar-nav ml-auto">
            //             <li className="nav-item">
                            // <Link to="/login"> 
                            //     <button className="nav-link btn__login btns">Se connecter</button>
                            // </Link>
                           
            //             </li>
            //              <li className="nav-item">
            //                 <button className="nav-link btn__subscribe btns">S'inscrire</button>
            //             </li> 
            //         </ul>
            //     </div>
            //     </nav>
            // </div>

        )
    }
export default Navbar
