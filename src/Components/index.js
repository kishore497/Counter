import React, { useState } from "react";
import './index.css'

const RendomNumber = () =>{

    const [random, genRandom] = useState(0);

    return(
        <div className="container">
            <div className="card">
                <h1>Random Number</h1>
                <p>Generate a random number between 0 and 100</p>
                <button onClick={() => genRandom(Math.ceil(Math.random()*100))}>Generate</button>
                <h1>{random}</h1>
            </div>
        </div>
    )
}

export default RendomNumber;