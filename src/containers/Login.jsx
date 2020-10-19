import React, { useState } from 'react'
import './Login.css'

//icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom'

const  Login = props => {
	
	console.log(props)
	//swict sing in sing up
	
	const handleSubmit = e => {
		e.preventDefault()
	}
    return (
			<div className="login__page">
				<div className="login__form__container"  id="login__form__container">
				<div className="form-container sign-in-container">
					<form onSubmit={handleSubmit}>
					<Link to="/">
						<ArrowBackIcon />
					</Link>
						<h1>Connection</h1>
						<div className="social-container">
							<a href="/" className="social"><FacebookIcon fontSize="large"/></a>
							<a href="/" className="social"><TwitterIcon fontSize="large"/></a>
							<a href="/" className="social"><InstagramIcon fontSize="large"/></a>
						</div>
						<span>Ou utilise ton compte !</span>
						<input type="email" placeholder="Email" required/>
						<input type="password" placeholder="Mot de passe" required/>
						<a href="/">Mot de passe oublié ?</a>
						<button type="submit">Connection</button>
						<div className="mobileBtn d-md-none d-block">
						<Link to="/signIn">
							<button className="ghost">Creer un compte</button>
						</Link>
						</div>
					</form>
				</div>

					<div className="overlay-container d-none d-sm-block">
						<div className="overlay">
							<div className="overlay-panel overlay-right">
								<h1>Hey mon ami!</h1>
								<p>Entres tes identifiants et passes ta journée avec nous</p>
								<Link to="/signIn">
									<button className="ghost" >Creer un compte</button>
								</Link>
								
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }


export default Login