import {createBrowserRouter, HashRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Error404 from "./components/Error404/Error404.jsx";

export const homePath = "/";

const Router = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path={homePath} element={<Home />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    </HashRouter>
);

export default Router;