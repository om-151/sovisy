import React from "react";
import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import {
    MdOutlineWaterDrop,
    MdOutlineRoofing,
    MdOutlineTexture,
    MdOutlineAir,
    MdOutlineLayers,
    MdOutlineLineWeight,
    MdBolt,
    MdWaterDrop,
    MdSpeed,
    MdStairs,
} from "react-icons/md";

const parts = [
    { label: "Bottom Panel", icon: <MdOutlineRoofing /> },
    { label: "Ceiling Panel", icon: <MdOutlineTexture /> },
    { label: "Side Panel", icon: <FaCogs /> },
    { label: "Manhole", icon: <MdOutlineWaterDrop /> },
    { label: "Airvent", icon: <MdOutlineAir /> },
    { label: "Insulation", icon: <MdOutlineLayers /> },
    { label: "Sealant Tape", icon: <MdOutlineLineWeight /> },
    { label: "HDG Nutbolt", icon: <MdBolt /> },
    { label: "Drain Outlet", icon: <MdWaterDrop /> },
    { label: "Water Level Indicator", icon: <MdSpeed /> },
    { label: "External Ladder", icon: <MdStairs /> },
    { label: "Internal Ladder", icon: <MdStairs /> },
];

const infoSections = [
    {
        title: "QUALITY ASSURANCE",
        content: `At Sovisy, quality assurance is central to our commitment to excellence. We uphold stringent quality control measures across every stage of production, from sourcing raw materials to the final installation of our SMC panel tanks. Each product undergoes rigorous testing to ensure structural integrity, durability, and adherence to international quality standards. Our dedicated Quality Assurance team employs advanced technologies and meticulous inspection protocols to guarantee that every tank is rust-proof, leak-proof, and resistant to environmental impacts, ensuring a reliable water storage solution for diverse applications. With a continuous improvement mindset, we aim to deliver unmatched quality and reliability, fostering trust and satisfaction among our clients.`,
        image: "https://sovisy.com/wp-content/uploads/2024/11/quality-assurance.webp",
        reverse: false,
    },
    {
        title: "CERTIFICATIONS",
        content: `At Sovisy, we pride ourselves on upholding the highest quality standards, demonstrated through our extensive certifications. Each certification reflects our dedication to safety, environmental responsibility, and top-tier manufacturing practices. Our ISI and ISO 9001 certifications underscore our commitment to quality control and management systems. The Green Pro and CII (Confederation of Indian Industry) certifications validate our sustainable practices, while Bureau Veritas recognizes our stringent quality assurance processes. Internationally recognized WRAS (Water Regulatory Advisory Scheme) and NSF (National Science Foundation) certifications ensure our products meet global standards for water safety and environmental compliance. Membership with the FSAI (Fire and Security Association of India) highlights our alignment with industry standards for fire safety, and the Make in India certification proudly showcases our dedication to Indian craftsmanship and manufacturing excellence. These certifications not only reinforce trust with our clients but also our unwavering commitment to excellence and sustainable growth.`,
        image: "https://sovisy.com/wp-content/uploads/2024/11/certifications.webp",
        reverse: true,
    },
];

const SMCPanelSection = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-6 md:p-10">
                {/* Sidebar */}
                <aside className="md:w-1/4 mb-6 md:mb-0 space-y-4">
                    {parts.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-blue-100 shadow-sm transition-all cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-2xl text-blue-600">{item.icon}</div>
                            <span className="text-sm font-medium text-gray-800">{item.label}</span>
                        </motion.div>
                    ))}
                </aside>

                {/* Main Content */}
                <main className="md:w-3/4 md:pl-10 space-y-6">
                    <h2 className="text-3xl font-bold text-blue-900">
                        Revolutionizing SMC Panel Tanks Design
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        At Sovisy, innovation is at the heart of everything we do. Our expertise lies in crafting state-of-the-art
                        SMC Panel Tanks/GRP Panel Tanks that redefine industry standards.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        We uphold the highest industry benchmarks with certifications like NSF USA, WRAS UK, ISO 9001:2015, and Green
                        Pro. Our lightweight, robust tanks thrive in diverse climates while maintaining excellent mechanical and
                        chemical properties.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Environmental sustainability is core to our philosophy. Explore the future of water storage design with Sovisy
                        SMC Panel Tanks.
                    </p>

                    <motion.img
                        src="https://sovisy.com/wp-content/uploads/2024/03/IMG-20240309-WA0005.jpg.webp"
                        alt="SMC Panel Tank"
                        className="rounded-lg shadow-lg object-cover w-full max-h-[500px]"
                        whileHover={{ scale: 1.02 }}
                    />
                </main>
            </section>
            <section className="bg-[#000C8A] py-24 text-center text-white">
                <div className="max-w-3xl mx-auto px-4">
                    <p className="text-lg md:text-xl font-medium text-gray-300 mb-2">
                        Standard Design and Important Test Parameters of
                    </p>
                    <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">
                        SOVISY SMC PANEL TANKS
                    </h1>
                </div>
            </section>
            <section className="flex flex-col md:flex-row h-auto gap-10 p-10">
                <div className="w-full md:w-1/2 h-64 md:h-full">
                    <img
                        src="https://sovisy.com/wp-content/uploads/2024/03/Design-parameters-table-1.png"
                        alt="Image 1"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 h-64 md:h-full">
                    <img
                        src="https://sovisy.com/wp-content/uploads/2024/03/Design-parameters-table-2.png"
                        alt="Image 2"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
            <div className="max-w-7xl mx-auto bg-white">
                {infoSections.map((section, index) => (
                    <section
                        key={index}
                        className={`w-full py-10 ${index % 2 === 0 ? "bg-white" : "bg-white"
                            }`}
                    >
                        <div
                            className={`container mx-auto px-4 flex flex-col md:flex-row ${section.reverse ? "md:flex-row-reverse" : ""
                                } items-center gap-10`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-[350px] h-auto object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-red-600 mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
};

export default SMCPanelSection;
