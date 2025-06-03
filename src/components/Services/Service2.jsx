import React from 'react';
import plumberImg from '../../assets/Water_plan.jpg'; // replace with actual image path
import experienceImg from '../../assets/Main_Logo.webp'; // replace with actual image path

const PlumbingServices = () => {
    return (
        <section className="bg-gray-100 py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <p className="text-red-700 font-semibold text-lg mb-2">What We Do</p>
                    <h2 className="text-4xl font-bold mb-4">Water Panel Tank</h2>
                    <p className="text-gray-700 mb-4">
                        Launch a website for your plumbing services business with the use of the OceanWP’s Plumbing full website template. The fully editable and customizable Plumbing website template will help you showcase comprehensive services from leak detection to pipe repair with precision and clarity.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Elevate your online presence thanks to OceanWP’s intuitive customization options that highlight your expertise and reliability. In this area, add a general description of your plumbing or other services.
                    </p>

                    {/* Bullet List */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                            'Affordable Pricing', 'Sewer Repair',
                            'Drain Cleaning', 'Pipping',
                            'Leak Detection', 'Certification Legal Used',
                            'Faucet Installation & Replacement', 'Camera Inspection',
                            'Boiler Services', 'Best Materials Used',
                            'Water Heater Services', 'All Sorts of Plumbing Services',
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                                <span className="mt-1 w-2 h-2 bg-red-700 rounded-full"></span>
                                <span className="text-gray-800 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <button className="bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition">
                        CONTACT US
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="relative">
                    <img
                        src={plumberImg}
                        alt="Plumber Working"
                        className="rounded-xl shadow-md w-full"
                    />
                    <div className="absolute -bottom-10 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4">
                        <div>
                            <p className="text-red-700 font-semibold text-lg">24 Years Experience</p>
                            <p className="font-bold text-gray-900">Plumbing Services</p>
                        </div>
                        <img src={experienceImg} alt="Experience" className="w-16 h-16 rounded-md object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlumbingServices;
