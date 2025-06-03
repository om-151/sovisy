import React, { useEffect, useRef } from "react";

const logos = [
    "https://sovisy.com/wp-content/uploads/2024/11/adani.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/aptar.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/bangaluru_airport.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/brigade.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/cept_university.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/delhi_metro.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/glenmark.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/hyderabad_airport.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/hyundai.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/indian_rail.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/jp_infra.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/larsen__toubro.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/maithan_steel.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/ntpc.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/piramal.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/sapoorji_pallonji.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/sparsh_hospital.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/suncity.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/tata_motors.webp",
    "https://sovisy.com/wp-content/uploads/2024/11/tata_steel.webp"
];

const ClientLogoSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            scrollAmount += 1;
            if (slider) {
                if (scrollAmount >= slider.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                slider.scrollLeft = scrollAmount;
            }
        };

        const interval = setInterval(scroll, 15); // adjust speed here

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white py-12 overflow-hidden">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Our Valuable Clients
            </h2>

            <div
                ref={sliderRef}
                className="flex overflow-x-hidden whitespace-nowrap"
            >
                <div className="flex gap-10 shrink-0 px-4">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center min-w-[150px] sm:min-w-[180px]">
                            <img
                                src={logo}
                                alt={`Client Logo ${index}`}
                                className="h-12 sm:h-16 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientLogoSlider;
