import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const leadershipData = [
    {
        name: "Sandeep Patravale",
        role: "CEO",
        quote:
            "Together, we're shaping a world where clean water is not just a dream but a reality.",
        image: "https://sovisy.com/wp-content/uploads/2024/01/Sandeep-Sir.webp",
    },
    {
        name: "Devang Soni",
        role: "PRODUCTION HEAD",
        quote:
            "United efforts lead to a world where the beauty of water enrich every corner of the Earth.",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Devang-Soni.webp",
    },
    {
        name: "Devang Soni",
        role: "PRODUCTION HEAD",
        quote:
            "United efforts lead to a world where the beauty of water enrich every corner of the Earth.",
        image: "https://sovisy.com/wp-content/uploads/2024/02/Sutapa-copy.webp",
    },
    {
        name: "Devang Soni",
        role: "PRODUCTION HEAD",
        quote:
            "United efforts lead to a world where the beauty of water enrich every corner of the Earth.",
        image: "https://sovisy.com/wp-content/uploads/2024/02/Nilanjana2-copy.png.webp",
    },
    {
        name: "Devang Soni",
        role: "PRODUCTION HEAD",
        quote:
            "United efforts lead to a world where the beauty of water enrich every corner of the Earth.",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Anuj-Goel.webp",
    },
    {
        name: "Devang Soni",
        role: "PRODUCTION HEAD",
        quote:
            "United efforts lead to a world where the beauty of water enrich every corner of the Earth.",
        image: "https://sovisy.com/wp-content/uploads/2018/03/Durgesh-Thakur.webp",
    },
    {
        name: "Devang Soni",
        role: "PRODUCTION HEAD",
        quote:
            "United efforts lead to a world where the beauty of water enrich every corner of the Earth.",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Ankit-Nayak.png.webp",
    },
    {
        name: "Sutapa Chatterjee",
        role: "SENIOR MANAGER - CS&CE",
        quote:
            "In collaboration, we pave the way for a future where water is valued, conserved, and shared equitably.",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Mrinmoy-Pan.webp",
    },
    {
        name: "Sutapa Chatterjee",
        role: "SENIOR MANAGER - CS&CE",
        quote:
            "In collaboration, we pave the way for a future where water is valued, conserved, and shared equitably.",
        image: "https://sovisy.com/wp-content/uploads/2024/11/Khurshid.webp",
    },
    {
        name: "Sutapa Chatterjee",
        role: "SENIOR MANAGER - CS&CE",
        quote:
            "In collaboration, we pave the way for a future where water is valued, conserved, and shared equitably.",
        image: "https://sovisy.com/wp-content/uploads/2024/11/Sunil-Dubey.webp",
    },
    {
        name: "Sutapa Chatterjee",
        role: "SENIOR MANAGER - CS&CE",
        quote:
            "In collaboration, we pave the way for a future where water is valued, conserved, and shared equitably.",
        image: "https://sovisy.com/wp-content/uploads/2024/11/Nageshwar-Rao.webp",
    },
    {
        name: "Sutapa Chatterjee",
        role: "SENIOR MANAGER - CS&CE",
        quote:
            "In collaboration, we pave the way for a future where water is valued, conserved, and shared equitably.",
        image: "https://sovisy.com/wp-content/uploads/2024/05/Rahul-Kumar-Saxena.webp",
    },
];

const LeadershipSection = () => {
    const containerRef = useRef(null);

    const scroll = (direction) => {
        const container = containerRef.current;
        const cardWidth = container.children[0].offsetWidth + 16; // card width + gap
        container.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="py-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#192437]">
                Meet the leadership
            </h2>
            <div className="relative max-w-6xl mx-auto px-4">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 cursor-pointer"
                >
                    <ChevronLeft size={24} />
                </button>
                <div
                    ref={containerRef}
                    className="flex overflow-x-hidden gap-4 snap-x snap-mandatory"
                >
                    {leadershipData.map((leader, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] max-w-[280px] bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform snap-start"
                        >
                            <div className="relative mb-4">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-48 h-48 object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-red-600 text-white p-1 rounded-tr-lg">
                                    +
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {leader.name}
                            </h3>
                            <p className="text-red-600 text-sm font-semibold mb-2">
                                {leader.role}
                            </p>
                            <p className="text-sm text-gray-600">{leader.quote}</p>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 cursor-pointer"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default LeadershipSection;
