import { useState } from 'react'
import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import { Todo } from './components/Todo'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Todo/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
