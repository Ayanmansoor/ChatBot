import { useState } from 'react'
import './App.css'
import Application from './Application'
import Contextprovider from './GeminiProvider'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <Contextprovider>
        <Router>
          <Routes>
            <Route path='/' element={<Application />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/dashboard' element={<Dashboard />} />  */}
          </Routes>
        </Router>
      </Contextprovider>
    </>
  )
}

export default App
