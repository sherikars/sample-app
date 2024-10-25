import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VirtualDom from './pages/VirtualDom'
import ToDoApp from './pages/ToDo'
import NavBar from './pages/NavBar'
import StateComp from './pages/State'
import BiDirectionalData from './pages/BiDirectionalData'
import JsxDemo from './pages/JsxDemo'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-dom" element={<VirtualDom />} />
        <Route path="/todo-app" element={<ToDoApp />} />
        <Route path="/state" element={<StateComp />} />
        <Route path="/biDirectional" element={<BiDirectionalData />} />
        <Route path="/jsx-demo" element={<JsxDemo />} />
      </Routes>
    </>
  )
}

export default App
