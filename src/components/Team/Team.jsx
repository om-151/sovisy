import React from 'react'
import IntroSection from '../ParentComponents/IntroSection/IntroSection'
import MissionVision from './Section/MissionVision'
import TeamSection from './TeamMember/TeamMemberCards'

const Team = () => {
    return (
        <>
            <IntroSection
                imageUrl="https://sovisy.com/wp-content/uploads/2024/04/Our-Team-Banner.webp"
                path="Home"
                path1="About Us"
                path2="Sovisy India Team"
                title="Sovisy India Team"
            />
            <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 relative">
                        <svg
                            className="w-10 h-10 text-gray-300 absolute -top-5 left-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.17 6.27a6 6 0 00-2.17 4.73V18H0v-7a8 8 0 012.92-6.27A10 10 0 017 2.5l1.1 1.9a7.98 7.98 0 00-0.93 1.87zM21.17 6.27a6 6 0 00-2.17 4.73V18h-5v-7a8 8 0 012.92-6.27A10 10 0 0121 2.5l1.1 1.9a7.98 7.98 0 00-0.93 1.87z" />
                        </svg>

                        <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                            "Great things in business are never done by one person, They're done by a team of people."
                        </p>
                        <p className="mt-6 text-right text-gray-600 font-medium">– Steve Jobs</p>
                    </div>
                </div>
            </section>
            <MissionVision />
            <TeamSection />
        </>
    )
}

export default Team
