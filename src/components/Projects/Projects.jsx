import ProjectsCarrousel from "./ProjectsCarrousel.jsx";
import Project from "./Project.jsx";
import ensIIEImage from "../../assets/images/ensIIE.jpg";
import BackgroundImage from "../../assets/images/BackgroundImage.jpg";
import Vegetables from "../../assets/images/projects/Vegetables.jpg";
import Course from "../../assets/images/projects/Course.jpg";
import TableRonde from "../../assets/images/projects/TableRonde.jpg";
import BilanCarbone from "../../assets/images/projects/BilanCarbone.jpg";
import Teacher from "../../assets/images/projects/Teacher.jpg";
import Rating from "../../assets/images/projects/Rating.jpg";
import LogoReses from "../../assets/images/projects/LogoReses.png";

const Projects = () => (
    <div id="nos-actions" style={{ backgroundImage: `url(${BackgroundImage})` }} className="relative bg-cover bg-center py-14 md:pt-36 md:pb-40">
        <div className="md:px-0 md:w-1/2 mx-auto">
            <h1 className="uppercase font-extrabold text-3xl border-b border-black py-4">Nos actions</h1>
            <div className="pt-8">
                <ProjectsCarrousel projects={[
                    { title: "Rentrée du climat", description: "Formation de membres pour réaliser la fresque du climat, organisation des ateliers, réalisation de devis pour l'atelier 2Tonnes.", backgroundImage: Course },
                    { title: "Partenariat avec l'AMAP", description: "Distribution chaque semaine de légumes de saison locaux aux élèves de l'école.", backgroundImage: Vegetables },
                    { title: "Table ronde", description: "Un ingénieur doit-il obéir ? C'est la question à laquelle les intervenant·es ont répondu lors d'une table ronde animée par les membres de l'association.", backgroundImage: TableRonde },
                    { title: "Formations en partenariat avec le RESES", description: "Le Réseau Étudiant pour une Société Écologique et Solidaire est venu former les responsables et membres du BdE sur différentes thématiques allant de l'évènementiel responsable à la responsabilité des organisations.", backgroundImage: LogoReses },
                    { title: "Instauration d'un nouveau cours", description: "À la place d'un cours sur la gestion d'actions de compagnies immobilières, les élèves de première année ont désormais un cours de dynamique de l'ingénieur qui a été construit par des membres d'écologIIE.", backgroundImage: Teacher },
                    { title: "Bilan carbone de l'école", description: "Nous avons réalisé, en lien avec les référents DDRS de l'école, le bilan carbone de l'ensIIE, dans le but de le présenter au CA ainsi que d'exposer différents scénarios de réduction des émissions.", backgroundImage: BilanCarbone },
                    { title: "Plaquette idéale des enseignements", description: "Nous rédigeons actuellement des commentaires sur la plaquette des enseignement de l'école pour permettre une évolution responsable des enseignements.", backgroundImage: ensIIEImage },
                    { title: "Notation des listes BdE", description: "Création d'une grille de notation des listes se présentant pour la campagne BdE, dans l'objectif d'expliquer l'impact écologique d'une campagne et de donner des pistes d'amélioration. Cela a également permis aux élèves de se faire une idée des actions menées par les listes pour réduire leur impact carbone, dans le but évident d'influencer les votes pour pousser le BdE le plus responsable à la tête de l'AEIIE, l'association des élèves de l'IIE.", backgroundImage: Rating }
                ]} />
            </div>
        </div>
    </div>
);

Projects.propTypes = {};
export default Projects;