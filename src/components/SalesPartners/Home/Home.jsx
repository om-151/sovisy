import React from "react";
import { FaBuilding, FaChartLine, FaBriefcase, FaHandshake, FaBullseye  } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const ParagraphDisplaySection = () => {
    return (
        <section className="relative bg-gray-100 text-center py-20 px-4 md:px-10">
            {/* Top Slanted SVG */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#ffffff" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Sales Partners
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Sovisy India works with a comprehensive network of sales partners who supply and professionally install, maintain, and service a myriad of Sovisy India modular SMC/GRP Panel type water storage solutions across the globe. Our esteemed sales partners include:
                </p>
            </div>

            {/* Cards Section */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {/* Card 1 */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-purple-600">
                    <FaBuilding className="text-purple-600 text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        FRP-TECH SOLUTIONS, Bangalore
                    </h3>
                    <p className="text-gray-600">
                        This network is supported by Sovisy India’s Sales, Engineering, Projects, and Service staff who have accumulated many years of valuable experience with local industry and market knowledge.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-purple-600">
                    <HiUserGroup className="text-purple-600 text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Kalpak Utility Solutions, Pune
                    </h3>
                    <p className="text-gray-600">
                        Our sales partners are integral to our operations, ensuring that Sovisy India’s innovative water storage solutions are accessible and efficiently implemented in various regions.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-purple-600">
                    <FaChartLine className="text-purple-600 text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Ragi Mercantile Pvt. Ltd., Assam & Ranchi
                    </h3>
                    <p className="text-gray-600">
                        In instances where a specific country is not covered by an established sales partner, inquiries are managed directly by a Sovisy India member of staff.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-purple-600">
                    <FaBriefcase className="text-purple-600 text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Verity Ventures and Logistics, Kolkata
                    </h3>
                    <p className="text-gray-600">
                        These dedicated professionals handle inquiries in the first instance and then direct them to the most suitable sales partners for the country in question.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-purple-600">
                    <FaHandshake className="text-purple-600 text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        M/s. Galaxy Enterprises, Mumbai
                    </h3>
                    <p className="text-gray-600">
                        This approach ensures that all customers receive the highest level of service and support, regardless of their location.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-purple-600">
                    <FaBullseye  className="text-purple-600 text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Ashok Hardware Agencies, Siliguri
                    </h3>
                    <p className="text-gray-600">
                        Sovisy India is committed to maintaining strong relationships with our sales partners and providing them with the necessary tools and support to succeed.
                    </p>
                </div>
            </div>

            {/* Bottom Slanted SVG */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0L1200 0 307.75 114.72 0 0z" fill="#ffffff" />
                </svg>
            </div>
        </section>
    );
};

export default ParagraphDisplaySection;
