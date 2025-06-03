// import React, { useEffect, useState } from 'react';

// const CounterCard = ({ icon, targetNumber, label }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         let start = 0;
//         const end = parseInt(targetNumber.replace(/,/g, '')); // remove commas
//         if (start === end) return;

//         const duration = 2000; // total duration in ms
//         const incrementTime = 20; // ms per increment
//         const step = Math.ceil(end / (duration / incrementTime));

//         const timer = setInterval(() => {
//             start += step;
//             if (start >= end) {
//                 setCount(end);
//                 clearInterval(timer);
//             } else {
//                 setCount(start);
//             }
//         }, incrementTime);

//         return () => clearInterval(timer);
//     }, [targetNumber]);

//     return (
//         <div className="text-center flex flex-col items-center px-4">
//             {icon && <img src={icon} alt="icon" className="h-12 mb-4" />}
//             <h2 className="text-4xl font-bold text-red-800">
//                 {count.toLocaleString()}+
//             </h2>
//             <p className="text-md mt-1 text-gray-800 font-medium">{label}</p>
//         </div>
//     );
// };

// const StatsSection = () => {
//     return (
//         <section className="bg-gray-100 py-16 px-4">
//             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
//                 <CounterCard
//                     icon="/path-to-your-logo1.png" // Replace with your logo path or use the uploaded one
//                     targetNumber="8500"
//                     label="Satisfied Clients"
//                 />
//                 <CounterCard
//                     icon="/path-to-your-logo2.png"
//                     targetNumber="22300"
//                     label="Completed Projects and Interventions"
//                 />
//             </div>
//         </section>
//     );
// };

// export default StatsSection;

import React, { useEffect, useState } from 'react';
import { FiSmile, FiCheckCircle } from 'react-icons/fi';

const CounterCard = ({ icon: Icon, targetNumber, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(targetNumber.replace(/,/g, ''));
        if (start === end) return;

        const duration = 5000; // ms
        const incrementTime = 20;
        const step = Math.ceil(end / (duration / incrementTime));

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [targetNumber]);

    return (
        <div className="text-center flex flex-col items-center px-4">
            <Icon className="text-5xl text-red-800 mb-4" />
            <h2 className="text-4xl font-bold text-red-800">
                {count.toLocaleString()}+
            </h2>
            <p className="text-md mt-1 text-gray-800 font-medium">{label}</p>
        </div>
    );
};

const StatsSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
                <CounterCard
                    icon={FiSmile}
                    targetNumber="6300"
                    label="Projects completed successfully"
                />
                <CounterCard
                    icon={FiCheckCircle}
                    targetNumber="5000"
                    label="Clients are happy and satisfied"
                />
            </div>
        </section>
    );
};

export default StatsSection;
