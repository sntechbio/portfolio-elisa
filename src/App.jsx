import elisaHeader from "./../public/elisa-header.png"
import image1 from "./../public/image1.jpg"
import image2 from "./../public/image2.jpg"
import image3 from "./../public/image3.jpg"
import image4 from "./../public/image4.jpg"
import './index.css'

function App() {

  return (
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
          <img src={image1} alt="Imagem 1" className="img-grid" />
        </div>
        <div className="grid-item">
          <img src={image2} alt="Imagem 2" className="img-grid" />
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <img src={image3} alt="Imagem 3" className="img-grid" />
        </div>
        <div className="grid-item">
          <img src={image4} alt="Imagem 4" className="img-grid" />
        </div>
      </div>

    </div>
  )
}

export default App
