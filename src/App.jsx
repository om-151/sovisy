import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/Navbar/Navbar'
import HeroMain from './components/Home/Main'
import Footer from './components/Home/Footer/Footer'
import HistoryMain from './components/History/History';
import PanelTank from './components/SMCPanelTask/PanelTank';
import TechnicalSpecifications from './components/Technical/TechnicalSpecifications';
import WorldwidePresence from './components/Worldwide/WorldwidePresence';
import Team from './components/Team/Team';
import SalesPartners from './components/SalesPartners/SalesPartners';
import Error from './components/Error(404)/Error';
import ValuableClients from './components/ValuableClients/ValuableClients';
import MarketSectors from './components/MarketSectors/Hero/Hero';

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroMain />} />
            <Route path="/history" element={<HistoryMain />} />
            <Route path="/smc-panel-tank" element={<PanelTank />} />
            <Route path="/technical-specifications" element={<TechnicalSpecifications />} />
            <Route path="/worldwide-presence" element={<WorldwidePresence />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sales-partners" element={<SalesPartners />} />
            <Route path="/valuable-clients" element={<ValuableClients />} />
            <Route path="/market-sectors" element={<MarketSectors />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
