import React from 'react'
import BottomNav from '../components/BottomNav'
import Navbar from '../components/Navbar'
import './SearchResult.css'
import SearchResultItem from './SearchResultItem'
import classItem from '../classItems'

const SearchResult = props => {

const result = Object
                .keys(classItem)
                .map(key => (
                    <SearchResultItem 
                    img={classItem[key].img}
                    teacher={classItem[key].teacher}
                    title={classItem[key].title}
                    price={classItem[key].price}
                    studio={classItem[key].studio}
                    />

                ))

    return (
        <div>
            <Navbar params={props}/>
            <div className="container-fluid">
                <div className="row">
                   {
                       result
                   }
                   {
                       result
                   }
                </div>
            </div>
            <BottomNav />
        </div>
    )
}

export default SearchResult
