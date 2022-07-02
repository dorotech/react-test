import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { SingleCharacter } from '../pages/SingleCharacter'

export default function RouterList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='character/:id' element={<SingleCharacter />} />
      </Routes>
    </BrowserRouter>
  )
}
