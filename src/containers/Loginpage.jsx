import React, { Component } from 'react'
import './Loginpage.css'
//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Loginpage extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 active : ''
		}
	}
	
	handleActive = () =>{
		this.setState({ active : 'right-panel-active' })
		console.log(this.state.active)
	}

	handleClose = () => {
		this.setState({ active : ''})
		console.log(this.state.active)
	}

    render() {
        return (
            <div className="login__page">
    <div className={`login__form__container ${this.state.active}`} id="login__form__container">
		
	<div className="form-container sign-up-container">
		<form >
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
			<button type="submit">Se connecter</button>
		</form>
	</div>

	<div className="form-container sign-in-container">
		<form>
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
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>De retour ?</h1>
				<p>Connectes toi vite afin de voir ce qu'il y a de nouveau</p>
				<button className="ghost" id="signIn" onClick={this.handleClose}>Connection</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hey mon ami!</h1>
				<p>Entres tes identifiants et passes ta journée avec nous</p>
				<button className="ghost" id="signUp" onClick={this.handleActive}>Creer un compte</button>
			</div>
		</div>
	</div>
</div>
            </div>
        )
    }
}
