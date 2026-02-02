import ProjectsCarrousel from "./ProjectsCarrousel.jsx";
import Project from "./Project.jsx";
import ensIIEImage from "../../assets/images/ensIIE.jpg";
import Vegetables from "../../assets/images/projects/Vegetables.jpg";

const Projects = () => (
    <div className="px-4 md:px-0 md:w-1/2 pt-14 md:pt-24 mx-auto">
        <h1 className="uppercase font-extrabold text-3xl border-b border-black py-4">Nos actions</h1>
        <div className="pt-8">
            <ProjectsCarrousel projects={[
                { title: "Partenariat avec l'AMAP", description: "Distribution chaque semaine de légumes de saison, locaux aux élèves de l'école.", backgroundImage: Vegetables },
                { title: "Projet 2", description: "Description 2", backgroundImage: ensIIEImage },
                { title: "Projet 3", description: "Description 3", backgroundImage: ensIIEImage }
            ]} />
        </div>
    </div>
);

Projects.propTypes = {};
export default Projects;