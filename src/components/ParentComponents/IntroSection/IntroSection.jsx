import React from "react";
import { Link } from 'react-router-dom';

const HistorySection = ({ imageUrl, path, path1, path2, title }) => {
    return (
        <div className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
            style={{
                backgroundImage: `url('${imageUrl}')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#001d3d]/50 to-[#00509e]/20"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                {/* Breadcrumb */}
                <p className="text-white text-sm md:text-base mb-2">
                    <Link to="/" className="hover:underline">{path}</Link> <span className="mx-1">-</span> {path1} <span className="mx-1">-</span> <span className="text-blue-200">{path2}</span>
                </p>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </div>
        </div>
    );
};

export default HistorySection;
