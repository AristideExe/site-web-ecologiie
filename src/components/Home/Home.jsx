import Contact from "../Contact/Contact.jsx";
import ensIIEImage from "../../assets/images/ensIIE.jpg";
import LogoEcologIIE from "../../assets/images/LogoEcologIIE.png";
import Trees from "../../assets/images/Trees.jpg";
import {Link} from "react-router";
import GreenButton from "../GreenButton/GreenButton.jsx";
import Projects from "../Projects/Projects.jsx";
import {HashLink} from "react-router-hash-link";

const Home = () => (
    <>
        <div id="qui-sommes-nous" className="relative bg-cover bg-center p-4 md:p-24" style={{ backgroundImage: `url(${ensIIEImage})` }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex">
                <div className="z-10 bg-white/90  p-10 flex-1/2 flex flex-col gap-4">
                    <h1 className="uppercase font-extrabold text-3xl border-b border-black py-4">Qui sommes-nous</h1>
                    <p>sit consectetur sollicitudin laoreet sit eu sit lacinia scelerisque. vel et Lorem malesuada ultricies Nullam lacinia vel sit quis nibh amet, vel vel adipiscing risus. nibh consectetur Maecenas tristique. tristique. tristique. mauris ante Nulla vel sit consectetur sollicitudin laoreet sit eu sit lacinia scelerisque. vel et Lorem malesuada ultricies Nullam lacinia vel sit quis nibh amet, vel vel adipiscing risus. nibh consectetur.</p>
                    <p>Mauris ante Nulla vel sit consectetur sollicitudin laoreet sit eu sit lacinia scelerisque. vel et Lorem malesuada ultricies Nullam lacinia vel sit quis nibh amet, vel vel adipiscing risus. nibh consectetur Maecenas tristique. tristique. tristique. mauris ante Nulla vel sit consectetur sollicitudin laoreet sit eu sit lacinia scelerisque. vel et Lorem malesuada ultricies Nullam lacinia vel sit quis nibh amet, vel vel adipiscing risus. nibh consectetur Maecenas tristique. tristique. tristique. mauris ante Nulla vel </p>
                    <div className="flex justify-center md:justify-end md:pt-8">
                        <HashLink to="#nos-actions">
                            <GreenButton>
                                <span className="uppercase">Découvrir nos actions</span>
                            </GreenButton>
                        </HashLink>
                    </div>
                </div>
                <img src={LogoEcologIIE} alt="Logo EcologIIE" className="flex-1/2 p-24 z-10 hidden md:block object-contain"/>
            </div>
        </div>

        <Projects id="nos-actions"/>

        <div className="relative bg-fixed bg-cover bg-center h-96" style={{ backgroundImage: `url(${Trees})` }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-white text-center flex flex-col items-center justify-center h-full text-4xl md:px-44 font-extrabold">
                <p className="text-shadow-lg/80">Notre objectif : sensibiliser et mettre en place des actions concrètes pour rendre plus responsables les ingénieurs de demain</p>
            </div>
        </div>

        <Contact id="prendre-contact"/>
    </>
);

Home.propTypes = {};
export default Home;