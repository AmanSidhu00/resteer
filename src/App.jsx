import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/Dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
import Timing from './sections/TIming'
import Testimonials from './sections/Testimonials'
import FAQs from './sections/FAQs'
import Cta from './sections/Cta'
import Footer from './components/Footer'
import LenisScroll from './components/LenisScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LenisScroll/>
   <Navbar/>
   <Hero/>
   <About/>
   <Stats/>
   <Dishes/>
   <Features/>
   <BookingProcess/>
   <Timing/>
   <Testimonials/>
   <FAQs/>
   <Cta/> 
   <Footer/>
      
    </>
  )
}

export default App
