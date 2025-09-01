import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Room from './Pages/Room/Room'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Home/Header/Header'
import Footer from './Components/Home/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<Room />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
