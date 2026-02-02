import PropTypes from "prop-types";

const GreenButton = ({ children }) => (
    <button className="relative px-12 py-3 bg-white border border-green-600 text-green-600 font-medium overflow-hidden transition-colors duration-300 hover:text-white group cursor-pointer font-extrabold">
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 w-full h-0 bg-green-600 transition-all duration-500 ease-out group-hover:h-full"></span>
    </button>
)

GreenButton.propTypes = {
    children: PropTypes.node,
};
export default GreenButton;