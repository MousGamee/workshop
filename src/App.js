import React, {  } from 'react'

import './App.css'
import Header from './containers/Header'
import Footer from './containers/Footer'
import NewClass from './containers/Newclass'
import Recommendations from './containers/Recommendations'
import Navbar from './components/Navbar'

const App = props => {
  
    return (
      <div className="App">
        <Navbar params={props}/>
          <Header />
          <NewClass/>
          <div className="container-fluid mt-3">
             <h1>Quel sera votre prochain cour ?</h1>
          </div>
          <Recommendations h2title="Recommandé pour vous"/>
          <Recommendations h2title="Cours à l'affiche dans la catégorie Hip Hop"/>
          <Footer /> 
      </div>
    )
  
}

export default App