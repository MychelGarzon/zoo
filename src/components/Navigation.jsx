import { NavLink } from "react-router-dom";

const Navigation = ({ cleanHandler }) => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/"><h2 id="logoHeader">ZOO</h2></NavLink></li>
                    <li><NavLink to="/" onClick={cleanHandler} ><h3>HOME</h3></NavLink></li>
                    <li><NavLink to="/animals" onClick={cleanHandler} ><img src="/src/assets/jaguar.png" /><h3>ANIMALS</h3></NavLink></li>
                    <li><NavLink to="/birds" onClick={cleanHandler} ><img src="/src/assets/parrot.png" /><h3>BIRDS</h3></NavLink></li>
                    <li><NavLink to="/fishes" onClick={cleanHandler} ><img src="/src/assets/fish.png" /><h3>FISH</h3></NavLink></li>
                    <li><NavLink to="/insects" onClick={cleanHandler} ><img src="/src/assets/butterfly.png" /><h3>INSECTS</h3></NavLink></li>
                    <li><NavLink to="/about" ><h3>ABOUT</h3></NavLink></li>
                </ul >
            </nav >
        </>
    );
};
export default Navigation;