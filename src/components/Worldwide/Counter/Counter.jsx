import React, { useEffect, useState } from "react";

const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const end = parseInt(target.replace(/[^0-9]/g, ''), 10);
        const frameRate = 60;
        const totalFrames = Math.round((duration / 1000) * frameRate);
        const increment = end / totalFrames;

        let currentFrame = 0;
        let currentCount = 0;

        const counter = setInterval(() => {
            currentFrame++;
            currentCount += increment;

            if (currentFrame >= totalFrames) {
                clearInterval(counter);
                setCount(end);
            } else {
                setCount(Math.floor(currentCount));
            }
        }, 1000 / frameRate);

        return () => clearInterval(counter);
    }, [target, duration]);

    return (
        <span>
            {count.toLocaleString()}
            {/\+$/.test(target) && "+"}
        </span>
    );
};

const StatsSection = () => {
    const stats = [
        { number: "10+", label: "Countries" },
        { number: "5800+", label: "Projects Completed" },
        { number: "100+", label: "Industries Served" },
        { number: "5000+", label: "Satisfied Clients" },
    ];

    return (
        <section className="bg-[#0B65AB] text-white py-12 px-4 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center px-4 ${index !== stats.length - 1 ? "border-r border-white/30" : ""
                            }`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-1">
                            <Counter target={item.number} duration={2000} />
                        </h2>
                        <p className="text-sm md:text-base">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
