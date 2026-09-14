import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Builder from './pages/Builder'
import HowItWorks from './pages/HowItWorks'
import Workouts from './pages/Workouts'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Builder />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App