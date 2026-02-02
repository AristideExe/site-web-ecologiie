import {Outlet, useLocation} from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    // const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};

Layout.propTypes = {};
export default Layout;