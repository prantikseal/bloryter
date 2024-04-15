import { useState } from 'react'
import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  )
}

export default App
