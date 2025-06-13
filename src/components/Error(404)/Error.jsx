import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorImg from "../../assets/error.jpg"; // Use your image

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">

            {/* Image */}
            <img
                src={ErrorImg}
                alt="Error Illustration"
                className="w-full max-w-md mb-8 object-contain animate-pulse"
            />

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Page Not Found
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 max-w-md mb-6">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            {/* Button */}
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
            >
                Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;
