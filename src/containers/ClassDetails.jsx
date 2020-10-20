import React from 'react'
import Navbar from '../components/Navbar'
import './ClassDetails.css'
import Recommendations from './Recommendations'
import Footer from './Footer'
import BottomNav from '../components/BottomNav'



const ClassDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid mt-2">
                <div className="row d-flex">
                    <div className="col-md-6 image__detail">
                        
                    </div>
                    <div className="col-md-6 details__text">
                        <button className="btn__reserve mt-4 mb-4">Reserver</button>
                        <h2>Hip Hop comerciale</h2>
                        <h3>Par Boun</h3>
                        <p className="studio__name">Studio Vert</p>
                        <p className="class__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Atque aliquid non quam quo cum qui dolorum eum quasi delectus 
                            architecto iste fuga, deleniti fugit possimus, quia ex! Ut, animi. Eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Atque aliquid non quam quo cum qui dolorum eum quasi delectus 
                            architecto iste fuga, deleniti fugit possimus, quia ex! Ut, animi. Eum.
                        </p>
                        
                    </div>
                </div>
            </div>
            <Recommendations h2title="Boun donne egalement cours "/>
            <BottomNav />
            <Footer />
        </div>
    )
}

export default ClassDetails
