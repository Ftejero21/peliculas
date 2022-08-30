import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import Lista from '../Lista'
import Main from '../Main'
const Rutas = () => {
  return (
    <BrowserRouter>
        

        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/inicio' element={<Main/>}/>
            <Route path='/Lista' element={<Lista/>}/>
        </Routes>
    
    </BrowserRouter>
  )
}

export default Rutas