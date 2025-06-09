import React from "react";
import IntroSection from '../../ParentComponents/IntroSection/IntroSection'
import SMCPanelSection from "../Section1/Section1";

const SMCPanel = () => {
    return (
        <>
            <IntroSection
                imageUrl="https://sovisy.com/wp-content/uploads/2024/03/Design-section-Banner.webp"
                path="Home"
                path1="About Us"
                path2="SMC Panel Tanks Design"
                title="SMC Panel Tanks Design"
            />
            <SMCPanelSection />
        </>
    );
};

export default SMCPanel;
