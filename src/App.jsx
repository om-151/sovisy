import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/Navbar/Navbar'
import HeroMain from './components/Home/Main'
import Footer from './components/Home/Footer/Footer'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroMain />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
