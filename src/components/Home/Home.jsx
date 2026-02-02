import Contact from "../Contact/Contact.jsx";
import ensIIEImage from "../../assets/images/ensIIE.jpg";
import LogoEcologIIE from "../../assets/images/LogoEcologIIE.png";
import {Link} from "react-router";
import GreenButton from "../GreenButton/GreenButton.jsx";
import Projects from "../Projects/Projects.jsx";

const Home = () => (
    <>
        <div className="relative bg-cover bg-center p-4 md:p-24" style={{ backgroundImage: `url(${ensIIEImage})` }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex">
                <div className="z-10 bg-white/90  p-10 flex-1/2 flex flex-col gap-4">
                    <h1 className="uppercase font-extrabold text-3xl border-b border-black py-4">Qui sommes-nous</h1>
                    <p>sit consectetur sollicitudin laoreet sit eu sit lacinia scelerisque. vel et Lorem malesuada ultricies Nullam lacinia vel sit quis nibh amet, vel vel adipiscing risus. nibh consectetur Maecenas tristique. tristique. tristique. mauris ante Nulla vel sit consectetur sollicitudin laoreet sit eu sit lacinia scelerisque. vel et Lorem malesuada ultricies Nullam lacinia vel sit quis nibh amet, vel vel adipiscing risus. nibh consectetur.</p>
                    <p>Mauris ante Nulla vel sit consectetur sollicitudin laoreet sit eu sit lacinia scelerisque. vel et Lorem malesuada ultricies Nullam lacinia vel sit quis nibh amet, vel vel adipiscing risus. nibh consectetur Maecenas tristique. tristique. tristique. mauris ante Nulla vel sit consectetur sollicitudin laoreet sit eu sit lacinia scelerisque. vel et Lorem malesuada ultricies Nullam lacinia vel sit quis nibh amet, vel vel adipiscing risus. nibh consectetur Maecenas tristique. tristique. tristique. mauris ante Nulla vel </p>
                    <div className="flex justify-center md:justify-end md:pt-8">
                        <Link to={{}}>
                            <GreenButton>
                                <span className="uppercase">Découvrir nos actions</span>
                            </GreenButton>
                        </Link>
                    </div>
                </div>
                <img src={LogoEcologIIE} alt="Logo EcologIIE" className="flex-1/2 p-24 z-10 hidden md:block"/>
            </div>
        </div>

        <Projects />

        <Contact />
    </>
);

Home.propTypes = {};
export default Home;