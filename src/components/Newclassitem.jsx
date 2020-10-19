import React from 'react'
import './Newclassitem.css'

export default function Newclassitem({img ,id, teacher, title, price}) {

    return (
        <>
        <div className="">
            <img src={`img/${img}`} 
            alt="" 
            className="img-fluid"/>
            <div className="card-body">
                <p className="studio__name">Lax Studio</p>
                <h5 className="teacher__name">{teacher}</h5>
                <p className="price">{price}</p>
                
            </div>
        </div>
    </>
        
    )
}
