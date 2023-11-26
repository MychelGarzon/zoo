import Header from "../components/Navigation";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = ({ searchHandler, cleanHandler }) => {
    const { pathname } = useLocation();

    return (
        <div className="app">
            {pathname !== "/" && (
                <Header onchange={searchHandler} onclick={cleanHandler} />
            )}
            <Outlet />
            {pathname !== "/" && <Footer />}
        </div>
    );
};

export default Root;