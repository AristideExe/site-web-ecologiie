import LogoEcologIIE from '../../assets/images/LogoEcologIIE.png';
import {Link} from "react-router";
import {homePath} from "../../routes.jsx";

const Header = () => (
    <header className="flex justify-between py-5 px-10 flex-col md:flex-row md:px-24 bg-white z-50 items-center shadow-xl">
        <Link to={homePath}  className="w-50">
            <img src={LogoEcologIIE} alt="Logo EcologIIE"/>
        </Link>
        <div className="flex gap-8 uppercase font-bold items-baseline">
            <p>Qui sommes-nous</p>
            <p>Nos actions</p>
            <p>Prendre contact</p>
        </div>
    </header>
);

Header.propTypes = {};
export default Header;