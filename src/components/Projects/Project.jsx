import PropTypes from "prop-types";

const Project = ({ title, description, backgroundImage }) => (
    <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex justify-end items-center h-full">
            <div className="bg-white/90 px-14 w-1/2 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">{title}</h2>
                <p className="text-xl max-w-2xl">{description}</p>
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