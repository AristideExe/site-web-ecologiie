import GreenButton from "../GreenButton/GreenButton.jsx";
import {Link} from "react-router";

const Contact = () => (
    <div className="px-4 md:w-1/2 py-24 mx-auto">
        <h1 className="uppercase font-extrabold text-3xl border-b border-black py-4">Prendre contact</h1>
        <div className="flex py-8 gap-8 align-middle flex-col md:flex-row">
            <p className="flex-1/2">tellus consectetur nibh dolor dolor, diam, Donec suscipit adipiscing at sollicitudin tincidunt laoreet dolor, auctor dolor, et tristique. Donec massa et mauris </p>
            <div className="flex-1/2 flex flex-col gap-4">
                <p>1 place de la resistance, 9100 Évry-Courcouronnes</p>
                <Link to="mailto:ecologiie@iiens.net" target="_blank">
                    <GreenButton>
                        <p className="uppercase">Nous contacter</p>
                    </GreenButton>
                </Link>
            </div>
        </div>
    </div>
);

Contact.propTypes = {};
export default Contact;