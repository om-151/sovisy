import React from "react";

const partners = [
    {
        id: 1,
        name: "FRP-TECH SOLUTIONS",
        founder: "Mr. Sandeep Gowda",
        logo: "https://sovisy.com/wp-content/uploads/2024/03/FRP-TECH-SOLUTIONS.jpeg.webp",
        address: "80, Magadi Main Rd, near Veeresh Theatre Complex, Govindaraja Nagar, Vijayanagar, Bengaluru, Karnataka 560044",
        contact: "+91 73380 45636",
    },
    {
        id: 2,
        name: "Ragi Mercantile Pvt. Ltd.",
        founder: "Mr. Ankush Surana",
        logo: "https://sovisy.com/wp-content/uploads/2024/03/Ragi-Mercantile-Pvt.-Ltd.webp",
        address: "RCC Building, 1st Floor, Anil Plaza, ABC Point, Near IDBI Bank, Sree Nagar, Guwahati, Assam 781005",
        contact: "+91 94353 09918",
    },
    {
        id: 3,
        name: "Kalpak Utility Solutions",
        founder: "Mr. Parag Kulkarni",
        logo: "https://sovisy.com/wp-content/uploads/2024/03/Logos.jpg.webp",
        address: "C/O Flat No 703, C Wing, Renuka Vrundavan, Rajyoy Colony Chinchwad, Valhekarwadi, Pune-411033, Maharashtra",
        contact: "+91 98500 68779",
    },
    {
        id: 4,
        name: "Verity Ventures & logistics",
        founder: "Mr. Sanjay Goenka",
        logo: "https://sovisy.com/wp-content/uploads/2024/03/VV.jpg.webp",
        address: "9/2G Topsia Road South, ND Towers - 4th floor, Behind Thar Marbles, Maruti Bagan, Kolkata - 700046",
        contact: "+91 90380 80808",
    },
    {
        id: 5,
        name: "Ashok Hardware Agency",
        founder: "Siliguri",
        logo: "https://sovisy.com/wp-content/uploads/2024/03/A.jpg.webp",
        address: "PC8F+RM6, Hotel Gateway Bldg, Sevoke Rd, Ward 11, Hakim Para, Siliguri, West Bengal 734001",
        contact: "+91 90380 80808",
    },
    {
        id: 6,
        name: "Ragi Mercantile Pvt. Ltd.",
        founder: "Mr. Sandeep Gowda",
        logo: "https://sovisy.com/wp-content/uploads/2024/03/Ragi-Mercantile-Pvt.-Ltd.webp",
        address: "Harjee Complex, Itki Raod Opp. Domino’s Pizza, Near Mahabir Complex Axis Bank Piska More Ranchi Jahrkhand - 834005",
        contact: "+91 70025 15501",
    },
    {
        id: 7,
        name: "M/s. Galaxy Enterprises",
        founder: "Mr. Ashfaque Aga",
        logo: "https://sovisy.com/wp-content/uploads/2024/03/GE.jpg.webp",
        address: "Shiv Shakti CHS Ltd; Soc. No. 80, Shop No. D -6, Near Janki Devi High School, S. V. P. Nagar, Four Bunglows, Andheri ( West ), Mumbai - 400 053.",
        contact: "+91 97737 36886",
    },
    {
        id: 8,
        name: "Silchar Trading Company",
        founder: "Assam",
        logo: "https://sovisy.com/wp-content/uploads/2024/07/S.webp",
        address: "Sonai Road, Silchar - 788 006 Cachar, Assam Nagatila Branch",
        contact: "+91 93654 17360",
    },
];

const OurPartners = () => {
    return (
        <section className="bg-gradient-to-br from-gray-100 to-white py-20 px-4 md:px-10">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Trusted Partners
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Empowering innovation together. Meet the visionary companies we proudly collaborate with.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {partners.map((partner) => (
                    <div
                        key={partner.id}
                        className="bg-white bg-opacity-70 backdrop-blur-md border border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-16 h-16 object-contain rounded-full border border-gray-300 shadow-sm"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    {partner.name}
                                </h3>
                                <p className="text-sm text-gray-500 italic">
                                    Founded by {partner.founder}
                                </p>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                            <p>
                                <span className="font-medium text-gray-700">Address:</span> {partner.address}
                            </p>
                            <p>
                                <span className="font-medium text-gray-700">Contact:</span> {partner.contact}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurPartners;
