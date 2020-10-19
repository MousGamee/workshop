import React from 'react'
import './BottomNav.css'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom'

const BottomNav = () => {
    return (
        <div className="bottom__nav">
            <Link to="/" className="nav__link">
                <SearchIcon fontSize='small' />
                <span className="nav__label active">Search</span>
            </Link>
            
            <Link to="" className="nav__link">
                <FavoriteBorderIcon fontSize='small' color='disabled'/>
                <span className="nav__label">Favoris</span>
            </Link>

        
            <Link to="/login" className="nav__link">
                <AccountCircleIcon fontSize='small' color='disabled'/>
                <span className="nav__label">Connexion</span>
            </Link>
        </div>
    )
}

export default BottomNav
