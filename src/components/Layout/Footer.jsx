import {Link} from "react-router";
import MailIcon from "../Icons/MailIcon.jsx";
import LocationIcon from "../Icons/LocationIcon.jsx";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
    <footer className="w-full bg-black/90 text-white py-5">
        <div className="px-5 md:w-1/2 mx-auto flex flex-col align-middle">
            <div className="flex flex-col md:flex-row justify-around border-b border-white/80 py-2">
                <Link to="mailto:ecologiie@iiens.net" target="_blank" className="flex gap-2 hover:text-green-600 transition-all">
                    <MailIcon />
                    <span className="underline">ecologiie@iiens.net</span>
                </Link>
                <div className="flex gap-2">
                    <LocationIcon />
                    <p>1 place de la Résistance, 91000 Évry-Courcouronnes</p>
                </div>
            </div>
            <div className="mx-auto py-2">
                <p>© {year} ÉcologIIE. Tous droits réservés. Développé par Aristide 'Aristide' Proriol 🌱</p>
            </div>
        </div>
    </footer>
)};

Footer.propTypes = {};
export default Footer;