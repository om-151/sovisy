import React from "react";
import { motion } from "framer-motion";

const cards = [
    {
        title: "Potable Water Storage",
        description: "SMC Panel Water Tanks are used by municipal authorities to store potable water for residential, commercial, and public consumption. These tanks ensure a reliable supply of clean and safe drinking water to communities.",
    },
    {
        title: "Water Treatment Plants",
        description: "SMC Panel Water Tanks are integral components of water treatment plants, where they store raw water before treatment and distribute treated water to consumers. They help maintain water quality and ensure adequate supply to meet demand.",
    },
    {
        title: "Emergency Water Supply",
        description: "Municipalities use SMC Panel Water Tanks to store emergency water reserves for firefighting, disaster relief, and other emergency situations. These tanks provide a crucial backup supply during water shortages or crises.",
    },
    {
        title: "Wastewater Management",
        description: "SMC Panel Water Tanks are employed in wastewater treatment facilities to store wastewater before treatment and disposal. They help regulate the flow of wastewater and facilitate the treatment process to meet environmental standards.",
    },
    {
        title: "Pressure Boosting Systems",
        description: "SMC Panel Water Tanks are used in pressure boosting systems to maintain consistent water pressure in municipal water distribution networks. They help ensure adequate water pressure for domestic and commercial users, especially in high-rise buildings.",
    },
];

const Card = ({ title, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/30 border border-[#749BC2] text-left p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-[85%] md:w-[320px] group"
        >
            <h3 className="text-lg font-bold text-[#4682A9] mb-2 group-hover:underline underline-offset-4">
                {title}
            </h3>
            <p className="text-[#333] text-sm">{description}</p>
        </motion.div>
    );
};

const CardList = () => {
    return (
        <div className="py-16 px-4 flex flex-col items-center">
            <div className="space-y-3 pb-10 text-center">
                <p className="text-sm font-medium text-gray-500 uppercase">
                    SMC PANEL WATER TANKS USES AT
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#4682A9]">
                    MUNICIPAL SECTOR
                </h2>
            </div>

            {/* First row - 3 cards */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center w-full max-w-6xl">
                {cards.slice(0, 3).map((card, index) => (
                    <Card key={index} index={index} {...card} />
                ))}
            </div>

            {/* Second row - 2 cards centered */}
            <div className="mt-10 flex flex-col sm:flex-row gap-8 justify-center items-center w-full max-w-4xl">
                {cards.slice(3, 5).map((card, index) => (
                    <Card key={index + 3} index={index + 3} {...card} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
