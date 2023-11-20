import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Navigation = () => {
    return (
        <>


            <nav>

                <ul>
                    <li><Link to="/"><h3>Home</h3></Link></li>
                    <li><Link to="/Animals"><h3>Animals</h3></Link></li>
                    <li><Link to="/Birds"><h3>Birds</h3></Link></li>
                    <li><Link to="/About"><h3>About</h3></Link></li>
                </ul >

            </nav >

        </>
    );
};
export default Navigation;