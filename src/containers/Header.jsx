import React from 'react';
// css
import './Header.css'

const Header = () => {
    
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 header__presentation">
                        <h2>La danse à portée de main</h2>
                        <p>Trouvez votre cours de danse. Découvrez des studios à proximité pour apprendre, 
                         s'améliorer, ou tout simplement vous détendre.</p>
                        <button className="btn__class__around"> Voir les cours à proximité</button>
                    </div>
                </div>
            </div>
             </header>
    );
}

export default Header;
