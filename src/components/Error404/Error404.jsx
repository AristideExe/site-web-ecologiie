import {Link} from "react-router";
import {homePath} from "../../routes.jsx";

const Error404 = () => (
    <div className="flex-1 flex justify-center items-center">
        <div className="px-4">
            <h1 className="text-2xl">Erreur 404</h1>
            <p>Nous ne savons pas trop comment vous avez atteri sur cette page, cliquez
                <Link className="text-blue-500 underline" to={homePath}> ici pour revenir à l'accueil</Link>
            </p>
        </div>
    </div>
);

Error404.propTypes = {};
export default Error404;