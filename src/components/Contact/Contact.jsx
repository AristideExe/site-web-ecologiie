import GreenButton from "../GreenButton/GreenButton.jsx";
import {Link} from "react-router";

const Contact = () => (
    <div>
        <Link to="mailto:ecologiie@iiens.net" target="_blank">
            <GreenButton>
                <p className="uppercase">Prendre contact</p>
            </GreenButton>
        </Link>
    </div>
);

Contact.propTypes = {};
export default Contact;