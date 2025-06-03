// import React, { useRef, useEffect } from 'react';

// const CertificationsSection = () => {
//     const sliderRef = useRef(null);
//     const isDragging = useRef(false);
//     const startX = useRef(0);
//     const scrollLeft = useRef(0);
//     const scrollInterval = useRef(null);

//     const logos = [
//         "https://picsum.photos/id/100/200/100",
//         "https://picsum.photos/id/101/200/100",
//         "https://picsum.photos/id/102/200/100",
//         "https://picsum.photos/id/103/200/100",
//         "https://picsum.photos/id/104/200/100",
//         "https://picsum.photos/id/105/200/100",
//         "https://picsum.photos/id/106/200/100",
//         "https://picsum.photos/id/107/200/100",
//         "https://picsum.photos/id/108/200/100",
//         "https://picsum.photos/id/109/200/100",
//     ];

//     // Duplicate logos to enable infinite loop illusion
//     const extendedLogos = [...logos, ...logos];

//     const handleMouseDown = (e) => {
//         isDragging.current = true;
//         startX.current = e.pageX - sliderRef.current.offsetLeft;
//         scrollLeft.current = sliderRef.current.scrollLeft;
//     };

//     const handleMouseLeave = () => {
//         isDragging.current = false;
//     };

//     const handleMouseUp = () => {
//         isDragging.current = false;
//     };

//     const handleMouseMove = (e) => {
//         if (!isDragging.current) return;
//         e.preventDefault();
//         const x = e.pageX - sliderRef.current.offsetLeft;
//         const walk = (x - startX.current) * 1.5;
//         sliderRef.current.scrollLeft = scrollLeft.current - walk;
//     };

//     const scrollByOneCard = () => {
//         const container = sliderRef.current;
//         const cardWidth = container.firstChild.offsetWidth + 24; // 24px gap-6

//         container.scrollBy({
//             left: cardWidth,
//             behavior: 'smooth'
//         });

//         // Reset scroll if at or near end of duplicated list
//         if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - cardWidth) {
//             setTimeout(() => {
//                 container.scrollLeft = 0;
//             }, 500); // wait for scroll to finish
//         }
//     };

//     useEffect(() => {
//         scrollInterval.current = setInterval(scrollByOneCard, 1000);

//         return () => clearInterval(scrollInterval.current);
//     }, []);

//     return (
//         <section className="py-16 px-4 bg-gray-50">
//             <div className="max-w-6xl mx-auto text-center">
//                 <h2 className="text-sm uppercase text-gray-500 mb-2">Worldwide Industry Accreditations:</h2>
//                 <h1 className="text-3xl font-bold text-gray-800 mb-4">Symbols of Quality and Dependability</h1>
//                 <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
//                     Sovisy has proudly achieved a host of certifications, attesting to our commitment to excellence and quality assurance.
//                 </p>

//                 <div
//                     ref={sliderRef}
//                     onMouseDown={handleMouseDown}
//                     onMouseLeave={handleMouseLeave}
//                     onMouseUp={handleMouseUp}
//                     onMouseMove={handleMouseMove}
//                     className="flex gap-6 overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing px-2 snap-x snap-mandatory scroll-smooth"
//                 >
//                     {extendedLogos.map((src, index) => (
//                         <div
//                             key={index}
//                             className="min-w-[200px] snap-start flex-shrink-0 bg-white rounded-lg shadow-md p-4"
//                         >
//                             <img
//                                 src={src}
//                                 alt={`Logo ${index + 1}`}
//                                 className="h-20 w-full object-contain"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CertificationsSection;


import React, { useEffect, useRef, useState } from "react";

const CertificationsSection = () => {
    const [position, setPosition] = useState(0);
    const containerRef = useRef(null);
    const cardWidth = 224; // 200px width + 24px gap (Tailwind gap-6 = 1.5rem = 24px)

    const logos = [
        "https://sovisy.com/wp-content/uploads/2024/02/06-300x106.webp",
        "https://sovisy.com/wp-content/uploads/2024/02/05-300x106.webp",
        "https://sovisy.com/wp-content/uploads/2024/02/04-300x106.webp",
        "https://sovisy.com/wp-content/uploads/2024/02/03-300x106.webp",
        "https://sovisy.com/wp-content/uploads/2024/02/02-300x106.webp",
        "https://sovisy.com/wp-content/uploads/2024/02/01-300x106.webp",
        "https://sovisy.com/wp-content/uploads/2024/02/09-300x106.webp",
        "https://sovisy.com/wp-content/uploads/2024/02/08-300x106.webp",
        "https://sovisy.com/wp-content/uploads/2024/02/07-300x106.webp",
    ];

    // Duplicate logos to create infinite effect
    const infiniteLogos = [...logos, ...logos, ...logos];

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => prev - cardWidth);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Reset position without flicker
    useEffect(() => {
        const totalWidth = cardWidth * logos.length;
        if (Math.abs(position) >= totalWidth) {
            // Reset immediately with no transition
            const container = containerRef.current;
            container.style.transition = "none";
            setPosition(0);

            // Re-enable transition after 1 frame
            requestAnimationFrame(() => {
                container.style.transition = "transform 0.5s ease";
            });
        }
    }, [position]);

    return (
        <section className="py-16 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-sm uppercase text-gray-500 mb-2">
                    Worldwide Industry Accreditations:
                </h2>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Symbols of Quality and Dependability
                </h1>
                <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
                    Sovisy has proudly achieved a host of certifications, attesting to our commitment to excellence and quality assurance. Recognized by esteemed bodies such as the Fire & Security Association of India, ISI, ISO 9001:2015 certification, NSF USA, Green Pro, Confederation of Indian Industry, WRAS UK, and Bureau Veritas Certification. These certifications reflect Sovisy's dedication to meeting and exceeding international standards across various domains.
                </p>

                <div className="relative w-full overflow-hidden">
                    <div
                        ref={containerRef}
                        style={{
                            transform: `translateX(${position}px)`,
                            transition: "transform 0.5s ease",
                        }}
                        className="flex gap-6"
                    >
                        {infiniteLogos.map((src, index) => (
                            <div
                                key={index}
                                className="min-w-[195px] flex-shrink-0"
                            >
                                <img
                                    src={src}
                                    alt={`Logo ${index + 1}`}
                                    className="h-20 w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center my-7">
                    <img src="https://sovisy.com/wp-content/uploads/2024/05/Email-footer-1.webp" alt="image" width={800}/>
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
