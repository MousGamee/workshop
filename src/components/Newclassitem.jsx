import React from 'react'
import './Newclassitem.css'

export default function Newclassitem({img}) {
    return (
        <div className="col-md-4 new__class__item">
            <img src={`img/${img}`} alt=""/>
        </div>
    )
}
