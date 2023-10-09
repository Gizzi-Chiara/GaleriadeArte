import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeCarrusel.css"
import Nav from "./Nav";
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


const Home = () => {
    return (
        <div>
            <Nav/>
            <div className="p-5 mt-5">
                <Carousel responsive={responsive}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img className="homeCarrusel" src="https://images.unsplash.com/photo-1615819895109-2610db394132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" alt="Prueba"/>
                            </div>
                            <div className="flip-box-back">
                                <Link to={"/principal"}>Arte</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img className="homeCarrusel" src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80" alt="Prueba"/>
                            </div>
                            <div className="flip-box-back">
                                <Link to={"/museos"}>Museos</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img className="homeCarrusel" src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Prueba"/>
                            </div>
                            <div className="flip-box-back">
                                <Link to={"/eventos"}>Eventos</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img className="homeCarrusel" src="https://images.unsplash.com/photo-1445258975206-cb4c5d8031d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Prueba"/>
                            </div>
                            <div className="flip-box-back">
                                <Link to={"/inspiracion"}>Inspiracion</Link>
                            </div>
                        </div>
                    </div>
            
                </Carousel>
            </div>
        </div>
    );
}

export default Home;