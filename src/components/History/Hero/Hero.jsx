import React from "react";
import { Link } from 'react-router-dom';
import IntroSection from '../../ParentComponents/IntroSection/IntroSection'

const HistorySection = () => {
    return (
        <>
            <IntroSection
                imageUrl="https://sovisy.com/wp-content/uploads/2024/03/History-Banner.webp"
                path="Home"
                path1="About Us"
                path2="History"
                title="History"
            />
        </>
    );
};

export default HistorySection;
