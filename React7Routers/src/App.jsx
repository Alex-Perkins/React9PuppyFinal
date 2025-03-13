import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
//React Router Imports
import { Routes, Route, Link } from "react-router-dom"

function App() {

  return (

    <div id="container">
      <div id="navbar">
        <Link to={{ pathname: "/red" }}> Red </Link>
        <Link to={{ pathname: "/blue" }}> Blue </Link>
        <Link to={{ pathname: "/" }}> Home </Link>
      </div>
      <div id="main-section">

        <Routes>
          <Route path='/blue' element={Blue()} />
          <Route path='/red' element={Red()} />
          <Route path='/' element={Home()} />
        </Routes>

      </div>
    </div>
  )
}

export default App
