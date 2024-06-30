import { useState } from 'react'
import React from 'react'
import './App.css'
import { HashRouter , Route ,Routes } from 'react-router-dom'
import { Todo } from './components/Todo'

function App() {

  return (
    <>
     <HashRouter>
        <Routes>
          <Route exact path='/' element={<Todo/>}/>
        </Routes>
     </HashRouter>
    </>
  )
}

export default App
