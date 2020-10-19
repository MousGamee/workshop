import React from 'react'
import './SlideItem.css'

const SlideItem = ({img, teacher, title, price, studio}) => {
    return (
        <div className="slide__item">
            <img src={`img/${img}`} alt="" className="img-fluid"/>
            <div className="slide__body">
                <div className="title d-flex justify-content-between">
                    <p className="class__title">{title}</p>
                    <p className="price">{price}</p>
                </div>
                <p className="studio__name">{studio}</p>
                <h5 className="teacher__name">{teacher}</h5>
                <p className="category">afro hip hiop</p>
            </div>
        </div>
    )
}

export default SlideItem
