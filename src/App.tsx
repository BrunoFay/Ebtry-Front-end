import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import MainPage from './pages/MainPage';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/projects' element={<MainPage />} />
    </Routes>
  )
}

export default App
