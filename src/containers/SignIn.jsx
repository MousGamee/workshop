import React, { useState } from 'react'
import './SignIn.css'
//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom'

const SignIn = props => {
	

	console.log(props)
	//swict sing in sing up
	

	const handleSubmit = e => {
		e.preventDefault()
	}
    return (
			<div className="login__page">
				<div className="login__form__container" id="login__form__container">
					
				<div className="form-container sign-up-container">
					<form onSubmit={handleSubmit}>
						<h1>Creer un compte</h1>
						<div className="social-container">
							<a href="/" className="social"><FacebookIcon fontSize="large"/></a>
							<a href="/" className="social"><TwitterIcon fontSize="large"/></a>
							<a href="/" className="social"><InstagramIcon fontSize="large"/></a>
						</div>
						<span>ou utilses ton email !</span>
						<input type="text" placeholder="prenom" required/>
						<input type="email" placeholder="Email" required/>
						<input type="password" placeholder="Mot de passe" required/>
						<button type="submit">S'inscrire</button>
						<div className="mobileBtn d-md-none d-block">
                        <Link to="/login">
                        	<button className="ghost" id="signUp">Deja un compte !</button>
                        </Link>						
						</div>
					</form>
				</div>
					<div className="overlay-container d-none d-sm-block">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>De retour ?</h1>
								<p>Connectes toi vite afin de voir ce qu'il y a de nouveau</p>
                                <Link to="/login">
                                    <button className="ghost" id="signIn" >Connection</button>
                                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }


export default SignIn