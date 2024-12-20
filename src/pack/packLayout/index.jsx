import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function PackLayout({ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, isPackLayoutTwo }) {
    return (
        <div className="container-pack">

            <Link to="/">
                <button style={{
                    fontSize: "35px",
                    backgroundColor: "black",
                    border: "none", 
                    cursor: "pointer" 
                }}>
                    <IoChevronBackOutline style={{ color: "white" }} />
                </button>
            </Link>

            <div className="grid-container-pack">
                <div className="img-grid-pack">
                    <img src={image1} alt="bannerinicio" className="banner" />
                </div>
            </div>

            {!isPackLayoutTwo ? (
                <div className="grid-pack-three">

                    <img src={image2} alt="image2" className="img-grid-item" />
                    <img src={image3} alt="image3" className="img-grid-item" />
                    <img src={image4} alt="image4" className="img-grid-item" />

                </div>
            ) :
                <div className="grid-pack-two">

                    <img src={image2} alt="image2" className="img-grid-item" />
                    <img src={image3} alt="image3" className="img-grid-item" />

                </div>
            }


            <div className="grid-pack-three">

                <img src={image5} alt="image5" className="img-grid-item" />
                <img src={image6} alt="image6" className="img-grid-item" />
                <img src={image7} alt="image7" className="img-grid-item" />

            </div>

            <div className="grid-pack-three">

                <img src={image8} alt="image8" className="img-grid-item" />
                <img src={image9} alt="image9" className="img-grid-item" />
                <img src={image10} alt="image10" className="img-grid-item" />

            </div>

            <div className="grid-container-pack">
                <div className="img-grid-pack">
                    <img src={image11} alt="image11" className="banner" />
                </div>
            </div>

        </div>
    );
}


export default PackLayout;