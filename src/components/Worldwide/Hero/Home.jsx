import React, { useEffect } from "react";

const ImageWithContent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white mt-10">
            {/* IMAGE WITH OVERLAY + HEADING */}
            <div className="relative h-[300px] md:h-[500px] w-full">
                <img
                    src="https://sovisy.com/wp-content/uploads/2024/03/Global-Reach.webp"
                    alt="Global Reach"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center justify-start">
                    <div className="px-6 md:px-16">
                        <p className="text-white text-sm md:text-base mt-2 animate-fade-in-up delay-100">
                            WORLDWIDE PRESENCE OF
                        </p>
                        <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-md animate-fade-in-up">
                            SOVISY INDIA SMC PANEL TANKS
                        </h1>
                    </div>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-200 space-y-6 text-gray-800 leading-relaxed transition-all duration-300">
                    <p>
                        From its base in India, Sovisy has embarked on a journey of worldwide presence expansion with its Modular Insulated GRP water tank/SMC Panel tank water storage solutions, renowned for their superior design and unwavering quality.
                    </p>
                    <p>
                        Facilitated by an extensive network of international distributors, Sovisy structures now grace diverse corners of the globe, reflecting their growing popularity and widespread acceptance.
                    </p>
                    <p>
                        With successful installations spanning over 10 countries, Sovisy's modular insulated GRP/SMC panel water storage solutions continue to garner momentum globally, owing to their time-tested design, robust construction, and remarkable longevity.
                    </p>
                    <p>
                        Strategically situated near major international terminals, Sovisy India enjoys seamless access for global exports, facilitating swift and efficient delivery of its products to customers and expanding worldwide presence day by day.
                    </p>
                    <p>
                        Featuring economical modular designs, Sovisy solutions can be easily containerized for shipment and assembled locally, ensuring consistent adherence to high construction standards across all installations.
                    </p>
                    <p>
                        Supported by a dedicated distribution network, Sovisy offers personalized customer support on a global scale, ensuring smooth operations and compliance with local regulations in every region it serves.
                    </p>
                    <p>
                        With a team of experienced installers proficient in Sovisy’s products and quality protocols, the company guarantees the safe and expert installation of its solutions, delivering peace of mind to customers across the world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ImageWithContent;
