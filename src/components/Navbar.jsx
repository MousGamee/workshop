import React, { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Nav, Navbar as MyNav, Form,  } from 'react-bootstrap';

const Navbar= ({params}) => {    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(params)
        params.history.push('/searchResult')
    }

        return (
            <>
            <MyNav className="mainNav d-flex justify-content-md-between justify-content-center" sticky="top" bg="light" variant="light">
                <MyNav.Brand href="#home" className="d-none d-md-block"><img src="img/logo.png" alt=""/></MyNav.Brand>
                <Form inline onSubmit={handleSubmit}>
                <input type="text" placeholder="Rechercher"/>
                   <button type="submit" className="search__icon">
                       <SearchIcon className="icon"/>
                   </button>
                 </Form>
                 <Nav>
                    <Link to="/login"> 
                        <button className="nav-link btn__login btns d-none d-md-block">Se connecter</button>
                    </Link>
                </Nav>
            </MyNav>
            </>
        )
    }
export default Navbar
