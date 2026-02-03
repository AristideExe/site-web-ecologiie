import {HashLink} from "react-router-hash-link";
import GreenButton from "../GreenButton/GreenButton.jsx";
import ensIIEImage from "../../assets/images/ensIIE.jpg";
import LogoEcologIIE from "../../assets/images/LogoEcologIIE.png";

const Presentation = () => (
    <div id="qui-sommes-nous" className="relative bg-cover bg-center p-4 md:p-24" style={{ backgroundImage: `url(${ensIIEImage})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="flex">
            <div className="z-10 bg-white/90  p-10 flex-1/2 flex flex-col gap-4">
                <h1 className="uppercase font-extrabold text-3xl border-b border-black py-4">Qui sommes-nous</h1>
                <p>ÉcologIIE est l'association des étudiants engagés pour les enjeux écologiques au sein de l'ensIIE, l'École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise. À travers des actions concrètes, nous œuvrons pour réduire l'impact environnemental de l'école et sensibiliser les ingénieurs de demain aux défis environnementaux.</p>
                <p>Grâce à une communication directe avec la chargée de mission DDRS de l'école, ÉcologIIE peut proposer et mettre en place des solutions efficaces, ayant un impact concret sur la vie étudiante, aussi bien sur le plan scolaire qu'associatif. Rentrée du climat, tables rondes autour de l'écologie ou encore vidéos de sensibilisation : les membres de l'association s'investissent dans des projets variés, porteurs de sens et d'impact.</p>
                <p>Rejoindre ÉcologIIE, c'est faire le choix de s'engager pour un avenir plus durable, dès aujourd'hui.</p>
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
);

Presentation.propTypes = {};
export default Presentation;