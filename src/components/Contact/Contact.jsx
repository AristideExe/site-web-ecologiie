import GreenButton from "../GreenButton/GreenButton.jsx";
import {Link} from "react-router";
import BackgroundImage from "../../assets/images/BackgroundImage.jpg";
import LocationIcon from "../Icons/LocationIcon.jsx";

const Contact = () => (
    <div id="prendre-contact" style={{ backgroundImage: `url(${BackgroundImage})` }} className="relative bg-cover bg-center py-14 md:py-32">
        <div className="px-4 md:px-0 md:w-1/2 mx-auto">
            <h1 className="uppercase font-extrabold text-3xl border-b border-black py-4">Prendre contact</h1>
            <div className="flex py-8 gap-8 align-middle flex-col md:flex-row">
                <p className="flex-1/2">tellus consectetur nibh dolor dolor, diam, Donec suscipit adipiscing at sollicitudin tincidunt laoreet dolor, auctor dolor, et tristique. Donec massa et mauris </p>
                <div className="flex-1/2 flex flex-col gap-4">
                    <div className="flex gap-2">
                        <LocationIcon />
                        <p>1 place de la Résistance, 91000 Évry-Courcouronnes</p>
                    </div>
                    <Link to="mailto:ecologiie@iiens.net" target="_blank" className="w-fit">
                        <GreenButton>
                            <p className="uppercase">Nous contacter</p>
                        </GreenButton>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

Contact.propTypes = {};
export default Contact;