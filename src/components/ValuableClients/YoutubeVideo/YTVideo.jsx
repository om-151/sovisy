import React, { useState } from "react";

const YTVideo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-0"
                style={{
                    backgroundImage: "url('https://sovisy.com/wp-content/uploads/2024/02/SMC-Panel-Tank-Installatioon-process-scaled.webp')",
                }}
            />

            <div className="relative z-20 h-full flex flex-col bg-black/30 justify-center items-center text-black text-center px-4">
                <button
                    onClick={openModal}
                    className="bg-[#FF004F] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg mb-6"
                >
                    <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>

                <h2 className="text-2xl md:text-5xl font-bold max-w-2xl leading-tight text-white">
                    Sovisy Provides the Best Solution for Water Storage
                </h2>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50 px-4">
                    <div className="relative w-full max-w-3xl aspect-video bg-black">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-3xl z-10 cursor-pointer"
                        >
                            &times;
                        </button>

                        {/* YouTube Video Embed */}
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/7mufZ5l7bVY?si=9jYft1tqTTRVvzHg"
                            title="YouTube video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default YTVideo;
