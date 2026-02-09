import PropTypes from "prop-types";

const Project = ({ title, description, backgroundImage }) => (
    <div className="relative h-110 md:h-125 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex justify-end items-center h-full">
            <div className="bg-white/90 px-4 md:px-14 md:w-1/2 h-full flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
                <p className="md:text-lg max-w-2xl">{description}</p>
            </div>
        </div>
    </div>
)

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
};
export default Project;