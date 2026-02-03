import Contact from "../Contact/Contact.jsx";
import Trees from "../../assets/images/Trees.jpg";
import Projects from "../Projects/Projects.jsx";
import Presentation from "../Presentation/Presentation.jsx";

const Home = () => (
    <>
        <Presentation />

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