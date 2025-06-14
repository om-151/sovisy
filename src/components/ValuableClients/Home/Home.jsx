import React from "react";
import valuableClient from "../../../assets/valuable-client-1.jpg";
import valuableClients from "../../../assets/valuable-client-2.jpg";
import ValuableClients from "../../../assets/valuable-client-3.jpg";

const ParagraphWithImage = () => {
    return (
        <>
            <section className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="w-full">
                        <img
                            src={valuableClient}
                            alt="Descriptive visual"
                            className="w-full h-auto object-cover rounded-2xl shadow-md"
                        />
                    </div>
                    <div className="space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Sovisy India stands as a beacon of excellence in the realm of water storage solutions, boasting a rich legacy of innovation, reliability, and unparalleled service. With a steadfast commitment to quality and customer satisfaction, Sovisy has earned its place as a trusted partner for our valuable clients, including major conglomerates and government entities alike.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            At the heart of Sovisy’s success lies a dedication to pushing the boundaries of technology and design to deliver cutting-edge SMC panel tanks that meet the diverse needs of our clients. Our tanks are not just storage solutions; they are symbols of strength, durability, and sustainability, designed to withstand the test of time and the rigors of various industries.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            One of Sovisy’s valuable clients is the Tata Group, a global enterprise known for its commitment to excellence and innovation across diverse sectors. Our partnership with Tata Group underscores our ability to deliver tailor-made solutions that align with the highest standards of quality and performance.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            In addition to Tata Group, Sovisy has forged strong relationships with other industry leaders such as Adani Realty and JP Infra, catering to their unique requirements with precision and expertise. Our collaboration with these giants is a testament to Sovisy’s ability to adapt to evolving market demands while maintaining a steadfast focus on delivering value to our valuable clients.
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            src={valuableClients}
                            alt="Descriptive visual"
                            className="w-full h-auto object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="w-full">
                        <img
                            src={ValuableClients}
                            alt="Descriptive visual"
                            className="w-full h-auto object-cover rounded-2xl shadow-md"
                        />
                    </div>
                    <div className="space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Sovisy’s footprint extends beyond the private sector, with a significant presence in critical infrastructure projects such as airports and railways. Our tanks play a vital role in ensuring the smooth operation of these essential services, providing reliable water storage solutions that meet stringent regulatory standards.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Moreover, Sovisy has been a trusted partner to various government agencies, supplying tanks for a wide range of applications, from firefighting to disaster management. Our proven track record in the government sector underscores our unwavering commitment to national development and sustainability.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ParagraphWithImage;
