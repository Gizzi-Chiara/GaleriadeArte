import Carousel from "react-multi-carousel";
import "./AcercaDe.css";

import DesarrolladorasUno from "./DesarrolladoraUno";
import DesarrolladorasDos from "./DesarroladoraDos";
import DesarrolladorasTres from "./DesarroladoraTres";
import DesarrolladorasCuatro from "./DesarrolladoraCuatro";
import DesarrolladorasSeis from "./DesarrolladoraSeis";


import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const AcercaDe = () => {
  return (
    <div>
      <div className="cuerpo">
      <div className="top_acerca">
          <h1 className="titulo">Acerca de</h1>
          <Link to={"/home"} className="pagprinc">Página Principal</Link>
      </div>
        <div className="contenido">
          <p> <br></br>Nuestra página es un emocionante rincón virtual en donde la creatividad florece y el arte cobra vida. Nuestra plataforma ha sido diseñada con pasión por el arte, cuyo objetivo es el brindar un espacio acogedor y enriquecedor para los amantes de la expresión visual.<br />  <br /> Aquí, te sumergirás en un mundo diverso de colores, formas y emociones, donde cada trazo cuenta una historia. Podrás encontrar desde ilustraciones hasta localización de museos y actividades realcionadas con el Arte.
            Ya que creemos que el arte es una ventana al alma y un medio de comunicación universal que trasciende las barreras culturales y lingüísticas.<br />  <br /> Nuestra misión es proporcionar un lugar donde los artistas, tanto emergentes como establecidos, puedan mostrar su talento y los entusiastas del arte puedan descubrir nuevas inspiraciones.
            Explora una galería virtual repleta de obras de artistas talentosos de todo el mundo. Desde pinturas y esculturas hasta fotografías y arte digital, encontrarás una amplia variedad de estilos y técnicas.
            <br></br>
          </p>
        </div>
        <h1 className="desarrolladoras1">Desarrolladoras</h1>
        <Carousel responsive={responsive}>
          <DesarrolladorasUno />
          <DesarrolladorasDos />
          <DesarrolladorasTres />
          <DesarrolladorasCuatro />
          <DesarrolladorasSeis />
        </Carousel>
      </div>
    </div>
  )
}
export default AcercaDe;