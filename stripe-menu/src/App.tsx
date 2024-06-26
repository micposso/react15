import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import SideBar from './components/SideBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Navbar />
      <SideBar />
    </>
  );
}

export default App
