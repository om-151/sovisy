import React from 'react'
import IntroSection from '../../ParentComponents/IntroSection/IntroSection'
import SMCPanelWaterTanks from '../IntroSection/Intro'
import Municipalsectors from '../Municipal/MunicipalSectors'

const MarketSectors = () => {
    return (
        <>
            <IntroSection
                imageUrl="https://sovisy.com/wp-content/uploads/2024/03/Market-sector-Banner.webp"
                path="Home"
                path1="About Us"
                path2="Market Sectors"
                title="Market Sectors"
            />
            <SMCPanelWaterTanks />
            <Municipalsectors />
        </>
    )
}

export default MarketSectors
