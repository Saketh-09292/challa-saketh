import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import ExtraCurriculars from './pages/ExtraCurriculars'

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/extracurriculars" element={<ExtraCurriculars />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
