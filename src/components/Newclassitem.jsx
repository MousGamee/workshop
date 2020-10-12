import React from 'react'
import './Newclassitem.css'

export default function Newclassitem({img, teacher, title, price}) {
    return (
        <>
        <div className="card col-md-4 col-6">
            <img src={`img/${img}`} alt="" className="img-fluid"/>
            <div className="card-body">
                <h5 className="card-title">{teacher}</h5>
                <p className="card-text">{price}</p>
            </div>
        </div>
    </>
        
    )
}
