import './App.css'
import Hero from './components/Home/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Services2 from './components/Services/Service2'
import Common from './components/common/Common'
import Counter from './components/Counting/Counter'
import RelationshipSection from './components/Relationship/Relationship'
import LeadershipSection from './components/Leadership/Leadership'
import Testimonials from './components/Testimonials/Testimonials'
import ClientLogos from './components/ClientLogos/ClientLogos'
import EventnNews from './components/EventAndNews/EventnNews'
import NewsSection from './components/News-section.jsx/NewsSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}

export default App
