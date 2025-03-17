import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Reactslick from './Reactslick'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    <Reactslick/>
    <Footer/>

    </>
   
  ) 
}

export default App
