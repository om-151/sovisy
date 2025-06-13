import React from 'react'
import IntroSection from '../ParentComponents/IntroSection/IntroSection'
import Home from './Home/Home'
import OurPartner from './Cards/OurPartner';

const dummyContent = `
React is a powerful JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes. React's component-based architecture makes code more modular, easier to maintain, and reusable. Tailwind CSS, on the other hand, is a utility-first CSS framework that enables developers to design directly in their markup. Combining React with Tailwind allows for rapid and responsive development while maintaining a clean UI and a great developer experience. It’s particularly popular for modern, scalable, and high-performance web development...
`;

const SalesPartners = () => {
    return (
        <>
            <IntroSection
                imageUrl="https://sovisy.com/wp-content/uploads/2024/04/Our-Partner-Banner.webp"
                path="Home"
                path1="About Us"
                path2="Sales Partners"
                title="Sales Partners"
            />
            <Home />
            <OurPartner />
        </>
    )
}

export default SalesPartners
