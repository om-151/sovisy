import React from "react";
import IntroSection from '../../ParentComponents/IntroSection/IntroSection'
import SovisyHistorySection from "../AboutSovisy/AboutSovisy";
import YTVideo from "../YoutubeVideo/Video";

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
            <SovisyHistorySection />
            <YTVideo />
        </>
    );
};

export default HistorySection;
