import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Builder from './pages/Builder'
import HowItWorks from './pages/HowItWorks'
import Workouts from './pages/Workouts'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import MedicalDisclaimer from './pages/MedicalDisclaimer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Builder />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about" element={<About />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/medical-disclaimer"
          element={<MedicalDisclaimer />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App