import React, { useState } from 'react'
import base from './base'
import './App.css'
import Header from './containers/Header'
import Footer from './containers/Footer'
import NewClass from './containers/Newclass'
import Recommendations from './containers/Recommendations'

const App = () => {
  
    return (
      <div className="App">
          <Header />
          <NewClass/>
          <Recommendations />
          <Footer /> 
      </div>
    )
  
}

export default App