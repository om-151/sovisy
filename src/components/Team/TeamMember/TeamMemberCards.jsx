import React from "react";
import { Mail, Phone } from "lucide-react";

const teamMembers = [
    {
        name: "Sandeep Patravale",
        role: "Chief Executive Officer",
        degree: "BTech, MBA, MTech, PhD",
        email: "sandeep@sovisy.in",
        phone: "+91 93737 21474",
        image: "https://sovisy.com/wp-content/uploads/2024/01/Sandeep-Sir.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Anuj Goel",
        role: "Regional Manager-North",
        degree: "B.Com from Delhi University, MBA (Marketing) from MDU Rohtak",
        email: "anuj@sovisy.in",
        phone: "+91 99682 02078",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Anuj-Goel.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Devang Soni",
        role: "Production Head",
        degree: "Advance E- commerce from State council of vocational Training of Gujarat, Electrical Engineering from Gujarat Technical Education board",
        email: "devangsoni1981@yahoo.co.in",
        phone: "+91 98980 02573",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Devang-Soni.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Durgesh Thakur",
        role: "Manager-Business Dev.",
        degree: "Business Management and Marketing -Welingkar Institute of Management, BE - Mechanical Engineering - Nagpur University",
        email: "durgesh@sovisy.in",
        phone: "+91 81014 89603",
        image: "https://sovisy.com/wp-content/uploads/2018/03/Durgesh-Thakur.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Ankit Nayak",
        role: "Manager - Business Dev.",
        degree: "Diploma in Mechanical Engineering - Gujarat Technological University (GTU), B.Tech Mechanical Engineering - AMIE, Professional Business Management & Branch Strategy Management-Level 2",
        email: "ankit@sovisy.in",
        phone: "+91 91736 63170",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Ankit-Nayak.png.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Mrinmay Pan",
        role: "Regional Manager - East",
        degree: "Diploma in Engineering - K. G. Engineering Institute, Higher Secondary - WBCHSE",
        email: "mrinmay@sovisy.in",
        phone: "+91 97354 92025",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Mrinmoy-Pan.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Sutapa Chatterjee",
        role: "Senior Manager - CS&CE",
        degree: "Masters from University of Burdwan, Graduation with Hons. from University of Burdwan, Higher Secondary from WB Board",
        email: "sutapa@sovisy.in",
        phone: "+91 78639 91096",
        image: "https://sovisy.com/wp-content/uploads/2024/02/Sutapa-copy.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Nilanjana Bhattacharya",
        role: "Asst. Manager-Proposals & BD",
        degree: "Diploma in 2D Graphics from Arena Animation, Graduation (English Hons.) from University of Burdwan, Higher Secondary from CBSE",
        email: "nilanjana@sovisy.in",
        phone: "+91 93828 61855",
        image: "https://sovisy.com/wp-content/uploads/2024/02/Nilanjana2-copy.png.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Rahul Kumar Saxena",
        role: "Quality Assurance Head",
        degree: "Diploma in Electrical Engineering from TEB, Gujarat in 2013, BBA in correspondence from Sikkim Manipal University in 2015",
        email: "rahul@sovisy.in",
        phone: "+91 97254 63091",
        image: "https://sovisy.com/wp-content/uploads/2024/05/Rahul-Kumar-Saxena.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "V Nageshwar Rao",
        role: "Asst Manager - Business Development",
        degree: "Bachelor of Commerce from Osmania University - year 1984, PGDMM-Post Graduate diploma in Marketing Management (IMM) New Delhi",
        email: "nrao@sovisy.in",
        phone: "+91 90462 36941",
        image: "https://sovisy.com/wp-content/uploads/2024/11/Nageshwar-Rao.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Sunil Kumar Dubey",
        role: "Asst Regional Manager - North East",
        degree: "Bachelor of Science from Guwahati University, Assam - Year 2001, AISSCE from CBSE Board - Year 1998",
        email: "sunild@sovisy.in",
        phone: "+91 97491 26774",
        image: "https://sovisy.com/wp-content/uploads/2024/11/Sunil-Dubey.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
    {
        name: "Khursheed Ahmad Shah",
        role: "Manager - Business Development (Srinagar)",
        degree: "Bachelor of Science from University of Kashmir - Year 1996, I.Sc. from J & K State Board of School Education (JKBOSE) - Year 1992",
        email: "kahmad@sovisy.in",
        phone: "+91 81450 12333",
        image: "https://sovisy.com/wp-content/uploads/2024/11/Khurshid.webp",
        description:
            "With over 27 years of rich experience in the construction and building materials industry, I bring a spectrum of expertise to the table.",
    },
];

const TeamSection = () => {
    return (
        <section className="bg-gray-100 py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Meet Our Team
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6 text-left space-y-3">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-indigo-600 text-sm font-medium">
                                    {member.role}
                                </p>
                                <p className="text-gray-700 text-sm font-medium italic">
                                    {member.degree}
                                </p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                                <div className="mt-4 space-y-1">
                                    <div className="flex items-center text-sm text-gray-700">
                                        <Mail className="w-4 h-4 mr-2 text-gray-500" />
                                        <span>{member.email}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700">
                                        <Phone className="w-4 h-4 mr-2 text-gray-500" />
                                        <span>{member.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
