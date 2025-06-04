import React from 'react';
import { FiCheckCircle, FiHome } from 'react-icons/fi';

const RelationshipSection = () => {
    return (
        <section className="w-full flex justify-center items-center bg-white">
            <div className="w-full max-w-6xl grid md:grid-cols-2 grid-cols-1">
                {/* LEFT SIDE */}
                <div className="bg-[#8dd6f3] text-black p-8 flex flex-col justify-center">
                    <h4 className="text-sm font-semibold uppercase">We Develop</h4>
                    <h2 className="text-4xl font-bold mt-2 mb-4">RELATIONSHIPS</h2>
                    <p className="mb-6 text-base">
                        We foster enduring partnerships through our commitment to excellence and customer satisfaction.
                        At Sovisy, building relationships is at the heart of everything we do.
                    </p>

                    <ul className="space-y-4 text-black text-base">
                        <li className="flex items-start gap-2">
                            <FiCheckCircle className="mt-1 text-black text-xl" />
                            <span>
                                <strong>Customer-centric approach:</strong> Putting our clients first in every aspect of our operations.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiCheckCircle className="mt-1 text-black text-xl" />
                            <span>
                                <strong>Transparent communication:</strong> Ensuring clarity and openness in all interactions.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiCheckCircle className="mt-1 text-black text-xl" />
                            <span>
                                <strong>Consistent support:</strong> Providing reliable assistance and guidance throughout our journey together.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative">
                    <img
                        src="https://sovisy.com/wp-content/uploads/2024/03/medium-shot-smiley-man-wearing-helmet.webp"
                        alt="Worker"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 right-6 bg-white p-4 rounded-md shadow-md flex items-center gap-3">
                        <div className="bg-red-100 text-red-600 p-2 rounded-full">
                            <FiHome className="w-6 h-6" /> {/* Replace with factory icon if available */}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Best Awarded</p>
                            <p className="text-md font-bold text-blue-900">SMC Panel Tank</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelationshipSection;
