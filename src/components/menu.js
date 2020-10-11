import React from "react";
import { Link } from 'react-router-dom';

function Menu({ dogName, getDogImgs }) {

    return (

        <nav className="navbar sticky-top mb-3 bg-primary rounded-0 navbar-expand-sm">
            <Link className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="text-white">🐶WOOF!</span>
            </Link>
            <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                {dogName.map((dog, index) => {
                    return (
                        <ul className="nav-item text-sm-center col-sm mt-1 mb-1 mt-sm-3 mb-sm-3">
                            <Link className="font-weight-bold text-white bg-primary card border-0" onClick={getDogImgs} key={index} id={dog.toLowerCase()}>{dog.toUpperCase()}</Link>
                        </ul>
                    )
                })}
            </div>
        </nav>
    )
}

export default Menu;
