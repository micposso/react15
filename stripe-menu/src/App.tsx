import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import SideBar from './components/SideBar'
import SubMenu from './components/SubMenu';
import './App.css'

function App() {

  return (
    <>
      <Hero />
      <Navbar />
      <SideBar />
      <SubMenu />
    </>
  );
}

export default App
