import React from 'react'
import './Footer.css'
//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
            <span className="separator"></span>
            <div className="row">
                <div className="copyright col-md-7">
                     <p>© 2020 Workshop, All rights reserved</p>
                     <ul>
                        <li><a href="/">Confidentialité </a></li>
                        <li><a href="/"> Conditions </a></li>
                        <li><a href="/">Plan du site</a></li>
                        <li><a href="/">Fonctionnement du site</a></li>
                        <li><a href="/">Informations sur l'entreprise</a></li>
                     </ul>
                    </div>
                <div className="social__media__icons col-md-2 ml-auto">
                    <a href="/"> <FacebookIcon fontSize='large' /></a>
                    <a href="/"><InstagramIcon fontSize='large'/></a>
                </div>
            </div>
                
            </div>    
        </footer>
    )
}

 