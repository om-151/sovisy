import React from "react";

const newsData = [
    {
        id: 1,
        title: "React Conference 2025",
        date: "2025-06-10",
        description: "Join top developers in SF for the latest React trends.",
        type: "upcoming",
        image: 'https://sovisy.com/wp-content/uploads/2025/02/Delhi_Airport-1-640x871.webp',
    },
    {
        id: 2,
        title: "MERN Stack Bootcamp",
        date: "2025-06-01",
        description: "A hands-on workshop on building MERN apps from scratch.",
        type: "upcoming",
        image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1748958258~exp=1748961858~hmac=0a27e9c21d39800d5792ebc272bf00d0d8215293bf4dc94caed17edf45e647f0&w=1380",
    },
    {
        id: 3,
        title: "AI & Future Tech Meetup",
        date: "2025-05-25",
        description: "Highlights from last week's tech meetup in Bangalore.",
        type: "recent",
        image: "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?t=st=1748958190~exp=1748961790~hmac=882973012483ae1486b0e39578fe47306e8a57ae04c79729a670862f00117ac1&w=1380",
    },
    {
        id: 4,
        title: "Hackathon Winners Announced",
        date: "2025-05-20",
        description: "The results of the national level coding hackathon.",
        type: "recent",
        image: "https://img.freepik.com/free-vector/hackathon-technology-infographic-with-flat-icons_88138-961.jpg?t=st=1748958300~exp=1748961900~hmac=f3e7bbc280213c068b3322101e016b213f07a7b5391e08e4259934087ec6c249&w=1380",
    },
];

const NewsSection = () => {
    const upcomingNews = newsData.filter((item) => item.type === "upcoming");
    const recentNews = newsData.filter((item) => item.type === "recent");

    const renderCard = (item) => (
        <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex gap-4 transition hover:shadow-lg"
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md shrink-0"
            />
            <div>
                <p className="text-sm text-gray-500">{new Date(item.date).toDateString()}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
        </div>
    );

    return (
        <section className="py-12 px-4 md:px-10 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h4 className="text-pink-600 font-semibold text-xl">Upcoming & Recent</h4>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">EVENTS & NEWS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Upcoming */}
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">Upcoming Events & News</h3>
                        <div className="space-y-5">
                            {upcomingNews.map(renderCard)}
                            {upcomingNews.length === 0 && <p className="text-gray-500">No upcoming events.</p>}
                        </div>
                    </div>

                    {/* Recent */}
                    <div>
                        <h3 className="text-2xl font-semibold text-green-700 mb-4 border-b pb-2">Recent Events & News</h3>
                        <div className="space-y-5">
                            {recentNews.map(renderCard)}
                            {recentNews.length === 0 && <p className="text-gray-500">No recent news.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
