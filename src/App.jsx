import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './foodDeliveryApp.css'
import Header from './components/Header'
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Slider from './components/Slider';
import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Slider/>
      <Cards/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
