import React from "react";

const TestimonialCard = ({ image, name, occupation, message }) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center flex flex-col items-center space-y-4 hover:shadow-xl transition">
            {/* Image on Top */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-200">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Name & Occupation */}
            <div>
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500">{occupation}</p>
            </div>

            {/* Testimonial Message */}
            <p className="text-gray-600 italic">"{message}"</p>
        </div>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            image: "https://sovisy.com/wp-content/uploads/2024/09/testimonial-image-2.webp",
            name: "Anjali Verma",
            occupation: "Product Designer",
            message:
                "The team and platform here are truly amazing. They care about your growth and success!",
        },
        {
            image: "https://sovisy.com/wp-content/uploads/2024/09/testimonial-image-1.webp",
            name: "Rahul Singh",
            occupation: "Real Estate Business",
            message:
                "I improved my coding skills and landed my dream job. Highly recommended!",
        },
        {
            image: "https://sovisy.com/wp-content/uploads/2024/09/testimonial-image-3.webp",
            name: "Rahul Singh",
            occupation: "Real Estate Business",
            message:
                "I improved my coding skills and landed my dream job. Highly recommended!",
        },
        {
            image: "https://sovisy.com/wp-content/uploads/2024/09/testimonial-image-1.webp",
            name: "Rahul Singh",
            occupation: "Real Estate Business",
            message:
                "I improved my coding skills and landed my dream job. Highly recommended!",
        },
        {
            image: "https://sovisy.com/wp-content/uploads/2024/09/testimonial-image-3.webp",
            name: "Rahul Singh",
            occupation: "Real Estate Business",
            message:
                "I improved my coding skills and landed my dream job. Highly recommended!",
        },
        {
            image: "https://sovisy.com/wp-content/uploads/2024/09/testimonial-image-2.webp",
            name: "Vikram Chauhan",
            occupation: "Real Estate Business",
            message:
                "A beautiful community that always pushes me forward. A must-join for developers!",
        },
    ];

    return (
        <section className="py-10 px-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                What People Are Saying
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {testimonials.map((t, index) => (
                    <TestimonialCard key={index} {...t} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
