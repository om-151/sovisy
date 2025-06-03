import React from "react";

const eventsData = [
    {
        id: 1,
        title: "6th Bhutan Construction Expo 2024",
        description:
            "Alpha Associates has extended an invitation for our participation in the 6th Bhutan Construction Expo 2024 (Building & Construction Exhibition), hosted by the Construction Association of Bhutan (CAB). The event will take place at Changlimthang Stadium Parking, Thimphu, Bhutan, from May 10th to May 13th, 2024.",
        date: "10 - 13 May 2024",
        image: "https://sovisy.com/wp-content/uploads/2024/04/6-BC-Expo-24_Bhutan.webp",
    },
    {
        id: 2,
        title: "Plumbex India 2024 - Mumbai",
        description:
            "Plumbex India 2024 is set for April 25th to 27th at Jio World Convention Centre, Mumbai. It's the largest expo for Water, Sanitation & Plumbing in India, connecting the industry for business opportunities. Showcasing Sanitaryware, Bathroom Fixtures, Pipes, Pumps, Valves, STP & WTP, and more. Ideal for Architects, Interior Designers, Real Estate Developers, and MEP Consultants. Also features the Water Innovation Challenge for startups.",
        date: "15 - 17 July 2025",
        image: "https://sovisy.com/wp-content/uploads/2024/04/Plumbex-2024.webp",
    },
];

const EventNewsSection = () => {
    return (
        <section className="py-12 bg-gray-50 px-4 md:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
                {eventsData.map((event, index) => {
                    const isImageRight = index % 2 === 0;

                    return (
                        <div
                            key={event.id}
                            className={`flex flex-col md:flex-row ${isImageRight ? "md:flex-row-reverse" : ""
                                } items-center gap-8`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-auto rounded-xl shadow-md"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-pink-600 text-xl font-bold mb-2">{event.title}</h2>
                                <p className="text-gray-500 mb-3">{event.date}</p>
                                <p className="text-gray-700 text-sm md:text-base">{event.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default EventNewsSection;
