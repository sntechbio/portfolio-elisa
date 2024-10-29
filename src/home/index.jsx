import React from "react";

import elisaHeader from "./../../public/elisa-header.png"
import image1 from "./../../public/image1.jpg"
import image2 from "./../../public/image2.jpg"
import image3 from "./../../public/image3.jpg"
import image4 from "./../../public/image4.jpg"
import './index.css'

import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="container-principal">
                <div className="container">

                    <div className="box-image">
                        <img src={elisaHeader} alt="elisa" className="img-header" />
                    </div>

                    <div className="text-container">
                        <div className="titulo-header">
                            <span>Elisangela Castro</span>
                        </div>
                        <div className="subtitulo-header">
                            <span>Designer Gráfico</span>
                        </div>
                    </div>

                </div>

                <div className="texto-atencao">
                    <span>Clique nos cards para acessar!</span>
                </div>

                <div className="grid-container">
                    <div className="grid-item">
                        <Link to="/Pack1">
                            <img src={image1} alt="Imagem 1" className="img-grid" />
                        </Link>
                    </div>
                    <div className="grid-item">
                        <Link to="/Pack2">
                            <img src={image2} alt="Imagem 2" className="img-grid" />
                        </Link>
                    </div>
                </div>

                <div className="grid-container">
                    <div className="grid-item">
                        <Link to="/Pack3">
                            <img src={image3} alt="Imagem 3" className="img-grid" />
                        </Link>
                    </div>
                    <div className="grid-item">
                        <img src={image4} alt="Imagem 4" className="img-grid" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;