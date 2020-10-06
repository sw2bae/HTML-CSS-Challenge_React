import React, { useState } from "react";
import API from '../util/API';

function Menu() {

    function getDogImgs(breed) {
        API.getDogs(breed).then((res) => {
            console.log(res);
        })
    };



    return (
        <header>

        </header>
    )
}

export default Menu;
