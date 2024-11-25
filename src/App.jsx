import React, { useEffect } from 'react'
import './App.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../src/pages/Login'
import HomePage from '../src/pages/HomePage'
import View from './pages/View'
import Location from './pages/Location'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/location' element={<Location />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </>
  )
}

export default App


