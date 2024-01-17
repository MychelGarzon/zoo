import { NavLink } from "react-router-dom";
import jaguar from "../assets/jaguar.png";
import parrot from "../assets/parrot.png";
import fish from "../assets/fish.png";
import butterfly from "../assets/butterfly.png";


const Navigation = ({ cleanHandler }) => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/"><h2 id="logoHeader">ZOO</h2></NavLink></li>
                    <li><NavLink to="/" onClick={cleanHandler} ><h3>HOME</h3></NavLink></li>
                    <li><NavLink to="/animals" onClick={cleanHandler} ><img src={jaguar} /><h3>ANIMALS</h3></NavLink></li>
                    <li><NavLink to="/birds" onClick={cleanHandler} ><img src={parrot} /><h3>BIRDS</h3></NavLink></li>
                    <li><NavLink to="/fishes" onClick={cleanHandler} ><img src={fish} /><h3>FISH</h3></NavLink></li>
                    <li><NavLink to="/insects" onClick={cleanHandler} ><img src={butterfly} /><h3>INSECTS</h3></NavLink></li>
                    <li><NavLink to="/about" ><h3>ABOUT</h3></NavLink></li>

                </ul >
            </nav >
        </>
    );
};
export default Navigation;