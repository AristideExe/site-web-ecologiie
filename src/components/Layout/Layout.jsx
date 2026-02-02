import {Outlet, useLocation} from "react-router";
import Header from "./Header.jsx";

const Layout = () => {
    const location = useLocation();
    const year = new Date().getFullYear();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
            <footer>
                FOOTER
            </footer>
        </div>
    )
};

Layout.propTypes = {};
export default Layout;