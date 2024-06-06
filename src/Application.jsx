import React from 'react'
import InputArea from './components/InputArea'
import Body from './components/Body'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Application() {
  return (

    <div className='h-screen bg-gradient-to-r from-pink-300 to-blue-500 relative w-full '>
        <div className='h-full  bg-white/30 relative w-full flex flex-col  gap-4 ' >
            <div className=' h-4/5 w-full relative'>
                 <ToastContainer/>
                  <Body></Body>
            </div>
            <div className=' absolute bottom-3 w-full '>
                <InputArea></InputArea>
            </div>
        </div>
    </div>
  )
}

export default Application