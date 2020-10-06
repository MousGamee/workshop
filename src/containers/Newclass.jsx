import React, { useState } from 'react'
import Newclassitem from '../components/Newclassitem'
import classItems from '../classItems'

const Newclass = () => {
    
     const [classItem, setClassItem] = useState(classItems)
    
     
        const newClasses = Object
        .keys(classItem)
            .map(key => (
                <Newclassitem 
                img={classItem[key].img}
                teacher={classItem[key].teacher}
                title={classItem[key].title}
                price={classItem[key].price}
                />
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
  


export default Newclass
