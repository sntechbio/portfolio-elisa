import React from "react";
import image1 from "./../../public/pack1/bannerinicial.jpg"
import image2 from "./../../public/pack1/mulher.jpg"
import image3 from "./../../public/pack1/casa1.jpg"
import image4 from "./../../public/pack1/mulherfeliz.jpg"

import image5 from "./../../public/pack1/casamao.jpg"
import image6 from "./../../public/pack1/botoes.jpg"
import image7 from "./../../public/pack1/casa2.jpg"

import image8 from "./../../public/pack1/familia.jpg"
import image9 from "./../../public/pack1/sofa.jpg"
import image10 from "./../../public/pack1/casal.jpg"

import image11 from "./../../public/pack1/bannerfinal.jpg"

import "./pack.css"


function Pack() {
    return (
        <div className="container-pack">

            <div className="grid-container-pack">
                <div className="img-grid-pack">
                    <img src={image1} alt="bannerinicio" className="banner"/>
                </div>
            </div>
            
            <div className="grid-pack-three">
               
                    <img src={image2} alt="image2" className="img-grid-item"/>
                    <img src={image3} alt="image3" className="img-grid-item"/>
                    <img src={image4} alt="image4" className="img-grid-item"/>
               
            </div>

            <div className="grid-pack-three">
               
                    <img src={image5} alt="image5" className="img-grid-item"/>
                    <img src={image6} alt="image6" className="img-grid-item"/>
                    <img src={image7} alt="image7" className="img-grid-item"/>
               
            </div>

            <div className="grid-pack-three">
               
                    <img src={image8} alt="image8" className="img-grid-item"/>
                    <img src={image9} alt="image9" className="img-grid-item"/>
                    <img src={image10} alt="image10" className="img-grid-item"/>
               
            </div>

            <div className="grid-container-pack">
                <div className="img-grid-pack">
                    <img src={image11} alt="image11" className="banner"/>
                </div>
            </div>

        </div>
    )
}

export default Pack;