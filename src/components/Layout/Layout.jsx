import {Outlet, useLocation} from "react-router";

const Layout = () => {
    const location = useLocation();
    const year = new Date().getFullYear();

    return (
        <>
            <header>
                HEADER
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                FOOTER
            </footer>
        </>
    )
};

Layout.propTypes = {};
export default Layout;