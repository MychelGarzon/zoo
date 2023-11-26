import Footer from "../components/Footer"
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";


const Home = () => {
    return (
        <>
            <Navigation />
            <div className="imagesFrontPage">
                <Link to="/animals"><img src="src/assets/jaguar.jpg" alt="picture" /><h2>ANIMALS</h2></Link>
                <Link to="/birds"> <img src="src/assets/guacamayo.jpg" /><h2>BIRDS</h2></Link>
                <Link to="/fishes"> <img src="src/assets/fish2.jpg" /><h2>FISHES</h2></Link>
                <Link to="/insects"> <img src="src/assets/insect.jpg" /><h2>INSECTS</h2></Link>

            </div >

            <Outlet />
            <Footer />
        </>
    );
};
export default Home;