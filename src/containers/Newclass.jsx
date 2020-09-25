import React, { Component } from 'react'
import Newclassitem from '../components/Newclassitem'
import classItems from '../classItems'

class Newclass extends Component {
    state = {
        classItems : {
            classItem1: {
                title: 'Hip Hop basic',
                teacher : 'Boun',
                img: 'image1.png',
                description: ' ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ',
                price: "10€"
              },
            
              classItem2: {
                title: 'Amour de Saumon',
                teacher : 'Boun',
                img: 'image2.png',
                description: ' ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ',
                price: '15€'
              },
            
              classItem3: {
                title: 'Hamburger Maison',
                teacher : 'Boun',
                img: 'image3.png',
                description: ' ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ',
                price :'20€'  
              },
            
              classItem4: {
                title: 'Tartines à l\'Italienne',
                teacher : 'Boun',
                img: 'image4.png',
                description: ' ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ',
                price : '5€'
              },
              
              classItem5: {
                title: 'Pizza au Chorizo',
                teacher : 'Boun',
                img: 'image5.png',
                description: ' ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ',
                price : '14€'
              },
            
              classItem6: {
                title: 'Moelleux au Chocolat',
                teacher : 'Boun',
                img: 'image6.png',
                description: ' ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur facilis earum ex ducimus iste repellat voluptatibus quos ',
                price : '14€'
              }
        }
    }
   
        render(){
        const newClasses = Object
        .keys(classItems)
            .map(key => (
                <Newclassitem img={this.state.classItems[key].img} />
            ))
              return (
        <div>
            <div className="container-fluid new__class__container">
                <div className="row">
                    {newClasses}
                </div>
            </div>
        </div>
            )
        }
  
}

export default Newclass
