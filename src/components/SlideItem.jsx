import React from 'react'

const SlideItem = ({img, teacher, title, price}) => {
    return (
        <div className="">
            <img src={`img/${img}`} alt="" className="img-fluid"/>
            <div className="card-body">
                <h5 className="card-title">{teacher}</h5>
                <p className="card-text">{price}</p>
            </div>
        </div>
    )
}

export default SlideItem
