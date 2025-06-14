import React from 'react'
import IntroSection from '../ParentComponents/IntroSection/IntroSection'
import Home from './Home/Home'
import StatsSection from './Counter/counter'
import TestimonialsSection from '../Home/Testimonials/Testimonials'
import YTVideo from './YoutubeVideo/YTVideo'
import ClientLogoSlider from '../Home/ClientLogos/ClientLogos'
import ProjectCardSection from './DisplayPdf/DisplayPdf'

const ValuableClients = () => {
    return (
        <>
            <IntroSection
                imageUrl="https://sovisy.com/wp-content/uploads/2024/04/Our-Clients.webp"
                path="Home"
                path1="About Us"
                path2="Valuable Clients"
                title="Valuable Clients"
            />
            <Home />
            <ProjectCardSection />
            <StatsSection />
            <TestimonialsSection />
            <YTVideo />
            <ClientLogoSlider />
        </>
    )
}

export default ValuableClients
