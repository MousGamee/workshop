import React from 'react'
import './SearchResultItem.css'

const SearchResultItem = ({img, teacher, title, price, studio}) => {
    return (
        <div className="serarch__result__item col-12">
                        <div className="row">
                            <img src={`./img/${img}`} alt="" className="img-fluid rounded col-6"/>
                            <div className="details__text col-6 mt-3">
                                <div className="d-flex justify-content-between">
                                    <h2>{title}</h2>
                                    <p className="price">{price}</p>
                                </div>
                                <h3>Par {teacher}</h3>
                                <p className="studio__name">{studio}</p>
                            </div>
                        </div>  
        </div>
    )
}

export default SearchResultItem
