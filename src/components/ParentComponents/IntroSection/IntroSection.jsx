import React from "react";
import { Link } from 'react-router-dom';

const HistorySection = ({ imageUrl, path, path1, path2, title }) => {
    return (
        <div className="relative w-full h-[35vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
            <img
                src={imageUrl}
                alt={title}
                className="absolute w-full h-full object-cover md:object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#001d3d]/30 to-[#00509e]/30"></div>

            <div className="relative z-10 text-center px-4 w-full max-w-screen-md">
                <div className="text-white text-sm sm:text-base flex flex-wrap justify-center gap-1 sm:gap-2 mb-2">
                    <Link to="/" className="hover:underline">{path}</Link>
                    <span>-</span>
                    <span>{path1}</span>
                    <span>-</span>
                    <span className="text-blue-200">{path2}</span>
                </div>

                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default HistorySection;
