import React from "react";

const SovisyHistorySection = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-20">
            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* LEFT: TEXT CONTENT */}
                <div>
                    <h2 className="text-gray-600 font-semibold text-lg uppercase">
                        History of
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1 mb-6">
                        Sovisy India
                    </h1>
                    <div className="space-y-6 text-gray-600 text-justify text-base leading-relaxed">
                        <p>
                            In just five years, Sovisy Solutions, later rebranded as Sovisy
                            India, has rapidly grown from a humble beginning to a prominent
                            player in the water storage industry. Established with a vision to
                            redefine the sector through innovation and quality, Sovisy India
                            has emerged as a global leader. With over 25 years of expertise in
                            water storage solutions and 15 years specializing in GRP/SMC panel
                            tanks, Sovisy India was founded to provide innovative, globally
                            certified water storage solutions.
                        </p>
                        <p>
                            From its inception, Sovisy India aimed to revolutionize the
                            industry by designing and offering simple yet innovative water
                            storage solutions using SMC/GRP panels. These solutions, known for
                            their uncompromising quality and reliability, have become the
                            preferred choice worldwide for conserving water to the highest
                            standards. Sovisy tanks, suitable for both domestic and industrial
                            use, have replaced traditional storage systems like plastic and
                            concrete tanks.
                        </p>
                        <p>
                            Certified by esteemed organizations such as NSF USA, WRAS UK, ISI,
                            and ISO 9001:2015, Sovisy India stands as a symbol of excellence
                            and adherence to industry standards. However, it’s not just about
                            the products; Sovisy India prioritizes exceptional after-sales
                            service, ensuring customer satisfaction and support throughout the
                            lifetime of its water storage solutions.
                        </p>
                        <p>
                            From its modest beginnings as Sovisy Solutions to its current
                            stature as Sovisy India, the company’s history is a testament to
                            its commitment to innovation, quality, and customer satisfaction.
                        </p>
                    </div>
                </div>

                {/* RIGHT: SINGLE IMAGE */}
                <div className="w-full">
                    <img
                        src="https://sovisy.com/wp-content/uploads/2024/03/History-Image1.webp"
                        alt="Sovisy History"
                        className="w-full rounded-lg shadow-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default SovisyHistorySection;
