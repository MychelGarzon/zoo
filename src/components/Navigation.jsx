import { NavLink } from "react-router-dom";

const Navigation = ({ cleanHandler }) => {
    return (
        <>
            <nav>
                <ul>
                    <li><h2 id="logoHeader">ZOO</h2></li>
                    <li><NavLink to="/" onClick={cleanHandler} ><h3>HOME</h3></NavLink></li>
                    <li><NavLink to="/animals" onClick={cleanHandler} ><h3>ANIMALS</h3></NavLink></li>
                    <li><NavLink to="/birds" onClick={cleanHandler} ><h3>BIRDS</h3></NavLink></li>
                    <li><NavLink to="/fishes" onClick={cleanHandler} ><h3>FISH</h3></NavLink></li>
                    <li><NavLink to="/insects" onClick={cleanHandler} ><h3>INSECTS</h3></NavLink></li>
                    <li><NavLink to="/about" ><h3>ABOUT</h3></NavLink></li>
                </ul >
            </nav >
        </>
    );
};
export default Navigation;