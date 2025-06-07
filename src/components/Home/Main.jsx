import Hero from './Hero/Hero'
import Services from './Services/Services'
import Services2 from './Services/Service2'
import Common from './common/Common'
import Counter from './Counting/Counter'
import RelationshipSection from './Relationship/Relationship'
import LeadershipSection from './Leadership/Leadership'
import Testimonials from './Testimonials/Testimonials'
import ClientLogos from './ClientLogos/ClientLogos'
import EventnNews from './EventAndNews/EventnNews'
import NewsSection from './News-section.jsx/NewsSection'

function MainHome() {

  return (
    <>
      <Hero />
      <Services />
      <Services2 />
      <Common />
      <Counter />
      <RelationshipSection />
      <LeadershipSection />
      <Testimonials />
      <ClientLogos />
      <EventnNews />
      <NewsSection />
    </>
  )
}

export default MainHome
