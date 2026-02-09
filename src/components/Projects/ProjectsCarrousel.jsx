import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Project from "./Project.jsx";

const ProjectsCarrousel = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="relative flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {projects.map((project, index) => (
                    <div key={index} className="min-w-full">
                        <Project {...project} />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-600/50 hover:bg-green-600 text-white text-4xl rounded-full transition-all z-20 cursor-pointer h-14 w-14"
                aria-label="Projet précédent"
            >
                &#8249;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-600/50 hover:bg-green-600 text-white text-4xl rounded-full transition-all z-20 cursor-pointer h-14 w-14"
                aria-label="Projet suivant"
            >
                &#8250;
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all border border-green-600 ${
                            index === currentIndex ? 'bg-green-600 w-8' : 'bg-white'
                        }`}
                        aria-label={`Aller au projet ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

ProjectsCarrousel.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            backgroundImage: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProjectsCarrousel;
