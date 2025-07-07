import React, { useState } from "react";

const SMCPanelWaterTanks = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="bg-white py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Text Content */}
                <div className="space-y-5">
                    <p className="text-sm uppercase text-gray-500 tracking-wide font-medium">
                        Market Sector of
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                        SMC PANEL WATER TANKS
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Sovisy India is the market leader in the design, development,
                        manufacture and supply of SMC/GRP Panel type, Insulated and
                        non-insulated water storage tanks.
                    </p>

                    {/* Read More Section */}
                    <div
                        className={`transition-all duration-500 overflow-hidden ${showMore ? "max-h-[2000px]" : "max-h-0"
                            }`}
                    >
                        <div className="text-gray-700 text-lg space-y-4">
                            <p>
                                Exclusively designed convex panels for the base that any increase in water pressure closes the bottom panels joints further. Joints are sealed with a special rubber sealant of patented “O Ringed” material. The combined flange thickness at the panel joints is more than sufficient to meet the stresses imposed. This “Self-Sealing” feature eliminates the possibility of separation and hence leakage of the tank.
                            </p>
                            <p>
                                The company has expertise in selecting high-quality materials, including SMC and GRP, ensuring the durability, strength, and longevity of the tanks. Few eminent tie-up for raw materials are Menzolit - Burnley, UK (for compound), Saint Gobain - USA (for sealent).
                            </p>
                            <p>
                                Every Sovisy India tank has the ability to withstand demanding applications and environmental extremes. Sovisy India offers a complete range of storage solutions, with storage typically ranging from 150m3 to 28,500m3 with capacities that can exceed 50,000m3 or 13,200,000 US Gallons.
                            </p>
                            <p>
                                Sovisy India structures are designed to provide long lasting solutions for designers, engineers, and customers alike that value integrity, asset performance and ongoing commercial sustainability.
                            </p>
                            <p>
                                Sovisy India provides the industry benchmark for the most durable containment solutions that are proven to stand the test of time for a variety of market sectors:
                            </p>
                        </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-blue-600 mt-3 font-medium hover:underline transition cursor-pointer"
                    >
                        {showMore ? "Read Less ↑" : "Read More ↓"}
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-lg h-full">
                    <div className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src="https://sovisy.com/wp-content/uploads/2024/03/Market-sector-image1.webp"
                            alt="SMC Tank"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SMCPanelWaterTanks;
