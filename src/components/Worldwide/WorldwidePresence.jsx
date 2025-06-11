import React from 'react'
import IntroSection from '../ParentComponents/IntroSection/IntroSection'
import ImageWithContent from './Hero/Home'
import Counter from './Counter/Counter'
import TestimonialsSection from '../Home/Testimonials/Testimonials'

const WorldwidePresence = () => {
    return (
        <>
            <IntroSection
                imageUrl="https://sovisy.com/wp-content/uploads/2024/03/All-country-flag-for-global-reach-page-banner.jpg"
                path="Home"
                path1="About Us"
                path2="Worldwide Presence"
                title="Worldwide Presence"
            />
            <Counter />
            <ImageWithContent />
            <TestimonialsSection />
        </>
    )
}

export default WorldwidePresence
