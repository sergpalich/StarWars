import { Link } from "react-router-dom";

const Welcomepage = () => {
    return ( 
        <div className="welcome_container">
        <h2 className="title">Hello Dear friends, welcome ot my Star Wars all Sagas details Library! </h2>
        <Link to={"/Starships "}><button className="btn-lg mx-auto">Let´s look the STARSHIPS</button></Link>
        </div>
     );
}
 
export default Welcomepage;
