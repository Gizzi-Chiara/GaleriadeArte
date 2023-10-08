import {Link} from "react-router-dom";

const LinkPintura = () => {
    return(
        <div>
            <Link to={"/misObras"}>Ver pinturas</Link>
        </div>
    );
}

export default LinkPintura;