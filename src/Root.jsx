import Footer from "./components/Footer"
import Header from "./components/Header"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";



function Root() {
    return (
        <>
            <div className="imagesFrontPage">

                <Link to="/Animals"><img src="src/assets/jaguar.jpg" alt="picture" /><h2>Click the picture to see our Animals</h2></Link>
                <Link to="/Birds"> <img src="src/assets/guacamayo.jpg" /><h2>Click the picture to see our Birds</h2></Link>
            </div >
            <Outlet />
            <Footer />
        </>
    )
}
export default Root;