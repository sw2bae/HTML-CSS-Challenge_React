import React from "react";

function Content({ dogData, currentDogBreed }) {

    return (
        <main className="container" >
            {dogData.map((data, index) => {
                return (
                    <div className="row mb-3" key={index}>
                        <img src={data} className="col-6" alt={currentDogBreed}></img>
                        <div className="col-6 text-center align-self-center font-weight-bold">I'm a <span className="text-uppercase text-primary h3">{currentDogBreed}</span></div>
                    </div>
                )
            })}
        </main>
    )
}

export default Content;

