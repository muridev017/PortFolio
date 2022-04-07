import React from 'react'
import Header from './Component/Head/Header'
import Home from "./Component/Hero/Home"
import './App.css'
import Features from './Component/Features/Features'
import Resume from './Component/Resume/Resume'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Features/>
    <Resume />
    <Contact />
    <Footer/>
    </>
  )
}

export default App
