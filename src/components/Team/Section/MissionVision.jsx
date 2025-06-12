import React from "react";
import { Lightbulb, CheckCircle, Globe, Users, Target, Leaf, Star, UserPlus } from "lucide-react";

const features = [
    {
        title: "Our Vision and Mission",
        icon: <Target className="w-6 h-6 text-indigo-600" />,
        description:
            "The Sovisy India Team is united by a common vision – to revolutionize water storage solutions with innovation, simplicity, and uncompromising quality. Over the past 25 years, we have established ourselves as a premier manufacturer of SMC (Sheet Moulding Compound) and GRP (Glass Reinforced Plastic) Panel type Water Storage Tanks. This journey has been made possible by the tireless efforts and commitment of our professional team leaders.",
    },
    {
        title: "Expertise and Experience",
        icon: <Star className="w-6 h-6 text-yellow-500" />,
        description:
            "Our team members come from diverse backgrounds, each bringing unique skills and perspectives. From our engineers who design and develop cutting-edge products to our sales and customer service representatives who ensure that our clients receive the best support, every member of the team plays a crucial role in our success. The collaborative spirit within the team fosters innovation and drives continuous improvement in everything we do.",
    },
    {
        title: "Leadership and Innovation",
        icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
        description:
            "At the helm of the Sovisy India Team are visionary leaders who have steered the company towards achieving global recognition. Their strategic direction and commitment to excellence inspire the entire team to strive for greatness. Our professional team embraces a culture of innovation, constantly exploring new technologies and methodologies to enhance our product offerings and maintain our competitive edge in the market.",
    },
    {
        title: "Commitment to Quality",
        icon: <CheckCircle className="w-6 h-6 text-green-600" />,
        description:
            "Quality is at the core of our  Team’s ethos. Our team meticulously ensures that every product meets the highest standards of durability, strength, and longevity. We are proud to have received certifications from reputable organizations, including NSF USA, WRAS UK, ISI, ISO 9001:2015, and Green Pro, attesting to our commitment to excellence. Sovisy India is dedicated to maintaining these standards and continually improving our processes to deliver the best water storage solutions.",
    },
    {
        title: "Customer-Centric Approach",
        icon: <Users className="w-6 h-6 text-blue-600" />,
        description:
            "The Sovisy India Team understands that customer satisfaction is the cornerstone of our success. We prioritize after-sales support, ensuring that our clients receive unparalleled assistance every step of the way. Our customer relationship managers work closely with clients to understand their needs and provide tailored solutions. This customer-centric approach sets Sovisy India apart from our competitors and fosters long-term partnerships with our clients.",
    },
    {
        title: "Sustainability and Environmental Responsibility",
        icon: <Leaf className="w-6 h-6 text-emerald-600" />,
        description:
            "Environmental sustainability is a key focus for Sovisy India. We integrate eco-friendly practices into our manufacturing processes and offer products that provide cost-effective and sustainable water storage solutions. Our commitment to green practices is validated by our Green Pro certification. The Sovisy India Team continuously seeks ways to minimize our environmental footprint and contribute positively to the global community.",
    },
    {
        title: "Global Reach and Future Goals",
        icon: <Globe className="w-6 h-6 text-teal-600" />,
        description:
            "The Sovisy India Team’s expertise extends beyond national boundaries. We have a significant global presence, providing water storage solutions to clients worldwide. Our team is adept at understanding and meeting the diverse needs of our international clients, ensuring that our products are suitable for various climates and regulatory requirements.",
    },
    {
        title: "Join Sovisy India Team",
        icon: <UserPlus className="w-6 h-6 text-pink-600" />,
        description:
            "We invite you to learn more about the Sovisy India and join us on our journey as we continue to redefine the standards of water storage solutions. Together, we are building a sustainable future, one innovative solution at a time.",
    },
];

const CoreValuesSection = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Sovisy India Team
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex-shrink-0">{item.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValuesSection;
