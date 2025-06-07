import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition duration-300 max-w-sm mx-auto">
            <div className="flex justify-center -mt-14 mb-4">
                <div className="bg-[#7b1904] p-4 rounded-full text-white text-3xl">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <a href="#" className="text-black font-semibold hover:underline inline-flex items-center gap-1">
                Read More <span className="ml-1">➜</span>
            </a>
        </div>
    );
};

export default ServiceCard;
