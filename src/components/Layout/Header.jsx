import LogoEcologIIE from '../../assets/images/LogoEcologIIE.png';
import {Link} from "react-router";
import {homePath} from "../../routes.jsx";

const Header = () => (
    <header className="flex justify-between py-5 px-10 flex-col md:flex-row md:px-24 bg-white z-50 items-center shadow-2xl/60">
        <Link to={homePath}  className="w-50">
            <img src={LogoEcologIIE} alt="Logo EcologIIE"/>
        </Link>
        <div className="gap-8 uppercase font-extrabold items-baseline flex-col md:flex-row hidden md:flex">
            <a
                href="#qui-sommes-nous"
                className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full hover:text-green-600"
            >
                Qui sommes-nous
            </a>
            <a
                href="#nos-actions"
                className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full hover:text-green-600"
            >
                Nos actions
            </a>
            <a
                href="#prendre-contact"
                className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full hover:text-green-600"
            >
                Prendre contact
            </a>
        </div>
    </header>
);

Header.propTypes = {};
export default Header;