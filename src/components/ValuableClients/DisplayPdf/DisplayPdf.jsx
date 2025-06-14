import React from "react";

const projectData = [
    {
        title: "SOVISY AT AIRPORT",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Airport.webp",
        pdf: "https://sovisy.com/wp-content/uploads/2024/04/Airport.pdf",
    },
    {
        title: "SOVISY AT FIRE FIGHTING",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Fire-Fighting.webp",
        pdf: "https://sovisy.com/wp-content/uploads/2024/04/Fire-Fighting_compressed.pdf",
    },
    {
        title: "SOVISY AT STEEL PLANTS",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Steel-Industry.webp",
        pdf: "https://sovisy.com/wp-content/uploads/2024/04/Steel-Industry.pdf",
    },
    {
        title: "SOVISY AT REAL ESTATE",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Real-Estate.webp",
        pdf: "https://sovisy.com/wp-content/uploads/2024/04/Real-Estate.pdf",
    },
    {
        title: "SOVISY AT RAILWAY",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Railway.webp",
        pdf: "https://sovisy.com/wp-content/uploads/2024/04/Railway_compressed.pdf",
    },
    {
        title: "SOVISY AT PHARMA",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Pharma.webp",
        pdf: "https://sovisy.com/wp-content/uploads/2024/04/Pharma_compressed.pdf",
    },
    {
        title: "COMMERCIAL & RESIDENTIAL PROJECTS",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Residential-commercial-projects.webp",
        pdf: "https://sovisy.com/wp-content/uploads/2024/04/Residential-commercial-projects_compressed.pdf",
    },
];

const ProjectCardSection = () => {
    return (
        <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Explore Our Project Expertise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => window.open(item.pdf, "_blank")}
                        className="cursor-pointer group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-60 object-cover group-hover:opacity-90"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectCardSection;
