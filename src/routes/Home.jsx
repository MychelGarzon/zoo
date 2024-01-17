import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import jaguar from "../assets/jaguar.jpg";
import guacamayo from "../assets/guacamayo.jpg";
import fish from "../assets/fish2.jpg";
import insect from "../assets/insect.jpg";

const Home = () => {
    return (
        <><Navigation />
            <div className="imagesFrontPage">
                <Link to="/animals"><img src={jaguar} alt="jaguar" /><h2>ANIMALS</h2></Link>
                <Link to="/birds"> <img src={guacamayo} alt="guacamayo" /><h2>BIRDS</h2></Link>
                <Link to="/fishes"> <img src={fish} alt="fish" /><h2>FISHES</h2></Link>
                <Link to="/insects"> <img src={insect} alt="insect" /><h2>INSECTS</h2></Link>
            </div >
            <Outlet />
        </>
    );
};
export default Home;