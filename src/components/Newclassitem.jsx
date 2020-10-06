import React from 'react'
import './Newclassitem.css'

export default function Newclassitem({img, teacher, title, price}) {
    return (
        <div className="col-md-4 col-12 new__class__item">
            <img src={`img/${img}`} alt=""/>
            <div className="card__info">
                <h2>{teacher}</h2>
                <h4>{title}</h4>
                <h3>{price}</h3>
            </div>
        </div>

        
    )
}
