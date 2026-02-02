import {createBrowserRouter} from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Error404 from "./components/Error404/Error404.jsx";

export const homePath = "/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: homePath,
                element: <Home />
            },
            {
                path: '*',
                element: <Error404 />
            }
        ]
    },
]);

export default router;