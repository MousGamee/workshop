import React, { Component } from 'react'
import base from './base'
import classes from './'
import './App.css'
import Header from './containers/Header'
import Footer from './containers/Footer'
import NewClass from './containers/Newclass'

export default class App extends Component {
  state = {
    classes : {}
  }
 
  render() {
    return (
      <div className="App">
        
          <Header />
          <NewClass/>
          <Footer /> 
       
           
      </div>
    )
  }
}
