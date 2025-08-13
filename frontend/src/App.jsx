import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Rooms from './Pages/Rooms/Rooms'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'
import { Routes, Route} from 'react-router-dom'
import NoteFound from './Pages/NotFound/NoteFound'
import Header from './Component/Home/Header/Header'
import Footer from './Component/Home/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
