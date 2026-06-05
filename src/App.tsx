import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { ServicesOverview } from './pages/ServicesOverview'
import { Rebuild } from './pages/Rebuild'
import { Launch } from './pages/Launch'
import { Pathway } from './pages/Pathway'
import { TalentPipeline } from './pages/TalentPipeline'
import { Explore } from './pages/Explore'
import { Impact } from './pages/Impact'
import { Insights } from './pages/Insights'
import { About } from './pages/About'
import { Partner } from './pages/Partner'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      {/* pt-16 offsets the fixed 64px navbar */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/rebuild" element={<Rebuild />} />
          <Route path="/services/launch" element={<Launch />} />
          <Route path="/services/pathway" element={<Pathway />} />
          <Route path="/services/talent-pipeline" element={<TalentPipeline />} />
          <Route path="/services/explore" element={<Explore />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
