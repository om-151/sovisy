import React from 'react'
import IntroSection from '../../ParentComponents/IntroSection/IntroSection'
import TankSection from '../Section2/Section2'

const Section = () => {
    return (
        <div>
            <IntroSection
                imageUrl="https://sovisy.com/wp-content/uploads/2024/03/Technical-Specification.webp"
                path="Home"
                path1="About Us"
                path2="Technical Specification"
                title="Technical Specification"
            />
            <TankSection />
        </div>
    )
}

export default Section
