import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";



function Root() {
    return (
        <>
            <h1>This is home</h1>
            <Navigation />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Root;