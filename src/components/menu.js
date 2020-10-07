import React from "react";

function Menu({ dogName, getDogImgs }) {

    return (

        <nav className="navbar sticky-top mb-3 bg-primary rounded-0 navbar-expand-sm">
            <a className="navbar-toggler" data-toggle="collapse" href="#" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="text-white">🐶WOOF!</span>
            </a>
            <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                {dogName.map((dog, index) => {
                    return (
                        <ul className="nav-item text-sm-center col-sm mt-1 mb-1 mt-sm-3 mb-sm-3">
                            <a className="font-weight-bold text-white bg-primary card border-0" onClick={getDogImgs} href="#" key={index} id={dog.toLowerCase()}>{dog.toUpperCase()}</a>
                        </ul>
                    )
                })}
            </div>

        </nav>
    )
}

export default Menu;
