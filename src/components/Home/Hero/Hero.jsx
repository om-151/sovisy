// import { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//     "https://sovisy.in/img/banner2.jpg",
//     "https://sovisy.in/img/banner0.jpg",
//     "https://sovisy.in/img/banner1.jpg",
// ];

// export default function HomeSection() {
//     const [current, setCurrent] = useState(0);
//     const timeoutRef = useRef(null);

//     const resetTimeout = () => {
//         if (timeoutRef.current) {
//             clearTimeout(timeoutRef.current);
//         }
//     };

//     useEffect(() => {
//         resetTimeout();
//         timeoutRef.current = setTimeout(() => {
//             setCurrent((prevIndex) => (prevIndex + 1) % images.length);
//         }, 4000);
//         return () => resetTimeout();
//     }, [current]);

//     const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
//     const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

//     return (
//         <section className="relative h-screen w-full overflow-hidden">
//             {/* Slides */}
//             {images.map((src, index) => (
//                 <div
//                     key={index}
//                     className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//                         }`}
//                 >
//                     <img
//                         src={src}
//                         alt={`slide-${index}`}
//                         className="w-full h-full object-cover"
//                     />
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-opacity-60 flex flex-col justify-center items-start pl-20 text-white">
//                         <p className="text-sm mb-2">Welcome to the world of water storage solutions</p>
//                         <h1 className="text-5xl font-bold leading-tight">
//                             World's best <br />
//                             <span className="text-red-500">SMC Panel Tank</span>
//                         </h1>
//                         <div className="mt-6 flex gap-4">
//                             <button className="bg-[#f2dede] hover:bg-[#fdcfcf] text-[#a94442] py-2 px-5 rounded shadow cursor-pointer">
//                                 Discover more
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ))}

//             {/* Navigation */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow"
//             >
//                 <ChevronLeft className="text-red-500" />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow"
//             >
//                 <ChevronRight className="text-red-500" />
//             </button>
//         </section>
//     );
// }


import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "https://sovisy.in/img/banner2.jpg",
    "https://sovisy.in/img/banner0.jpg",
    "https://sovisy.in/img/banner1.jpg",
];

export default function HomeSection() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrent((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => resetTimeout();
    }, [current]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="relative h-[700px] w-full overflow-hidden">
            {/* Slides */}
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <img
                        src={src}
                        alt={`slide-${index}`}
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay (above image, below text) */}
                    <div className="absolute inset-0 bg-black opacity-50 z-10" />

                    {/* Text Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-start pl-20 text-black">
                        <p className="text-sm mb-2 text-white">Welcome to the world of water storage solutions</p>
                        <h1 className="sm:text-5xl text-2xl font-bold leading-tight text-white">
                            World's best <br />
                            <span className="text-red-500">SMC Panel Tank</span>
                        </h1>
                        <div className="mt-6 flex gap-4">
                            <button className="bg-[#f2dede] hover:bg-[#fdcfcf] text-[#a94442] py-2 px-5 rounded shadow cursor-pointer">
                                Discover more
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow"
            >
                <ChevronLeft className="text-red-500" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full shadow"
            >
                <ChevronRight className="text-red-500" />
            </button>
        </section>
    );
}
