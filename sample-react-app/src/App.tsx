import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VirtualDom from './pages/VirtualDom'
import ToDoApp from './pages/ToDo'
import NavBar from './pages/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-dom" element={<VirtualDom />} />
        <Route path="/todo-app" element={<ToDoApp />} />
      </Routes>
    </>
  )
}

export default App
