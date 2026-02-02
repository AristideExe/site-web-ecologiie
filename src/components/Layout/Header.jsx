import LogoEcologIIE from '../../assets/images/LogoEcologIIE.png';
import {Link} from "react-router";
import {homePath} from "../../routes.jsx";

const Header = () => (
    <header className="flex justify-between py-5 px-10 flex-col md:flex-row md:px-24 bg-white z-50 items-center shadow-xl">
        <Link to={homePath}  className="w-50">
            <img src={LogoEcologIIE} alt="Logo EcologIIE"/>
        </Link>
        <div className="flex gap-8 uppercase font-extrabold items-baseline flex-col md:flex-row">
            <Link
                to={{}}
                className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
                Qui sommes-nous
            </Link>
            <Link
                to={{}}
                className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
                Nos actions
            </Link>
            <Link
                to={{}}
                className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
                Prendre contact
            </Link>
        </div>
    </header>
);

Header.propTypes = {};
export default Header;