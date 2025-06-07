import React from 'react';
import ServiceCard from './ServiceCard';
import { FaToolbox, FaTools, FaHardHat  } from 'react-icons/fa';

const services = [
    {
        icon: <FaToolbox />,
        title: 'General Plumbing',
        description:
            'We provide effective plumbing solutions. With OceanWP WordPress theme, you can launch your business website and showcase your services in minutes with the use of our full website templates.',
    },
    {
        icon: <FaTools />,
        title: 'Leak Detection',
        description:
            'We provide effective plumbing solutions. With OceanWP WordPress theme, you can launch your business website and showcase your services in minutes with the use of our full website templates.',
    },
    {
        icon: <FaHardHat  />,
        title: 'Drain Cleaning',
        description:
            'We provide effective plumbing solutions. With OceanWP WordPress theme, you can launch your business website and showcase your services in minutes with the use of our full website templates.',
    },
];

const ServicesSection = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="text-center mb-12">
                <p className="text-[#7b1904] font-medium">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
                    Our Services In A Pipe Shell
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
