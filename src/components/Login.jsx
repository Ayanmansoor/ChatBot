import React, { useState } from 'react'
import { LoginUser } from '../appwrite/All.Appwrites'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [Credential,setCredential]=useState({
        email:"",
        password:""
    })
    function validation(){
        const {email,password}=Credential
        if ((email.trim()).length < 10 ){
            toast.error(" enter valid email ")
            throw "enter valid email"
        }
        if (!(password.trim().length >=8 )){
            toast.error(" enter correct password ")
            throw "enter Correct password"
        }
        else{
             console.log(Credential);
             return  true
        }
    }
    function CleanUp(){
        setCredential({...Credential,email:"",password:""})
    }
    function HandleSubmit(e){
        e.preventDefault()
        const {email,password}=Credential
       if ( validation()){
        console.log(Credential)
        LoginUser(String(email),String(password))
       }
       CleanUp()
    }
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center justify-center p-8'>
        <ToastContainer/>
    <form className='flex flex-col md:w-[60%] w-full' onSubmit={HandleSubmit} >
        <h2 className='font-bold text-3xl text-center mb-2'>Log in</h2>
        <label htmlFor='email'>Email Address</label>
        <input
            type='text'
            id='email'
            required
            value={Credential.email}
            onChange={(e)=>setCredential({...Credential,email:e.target.value})}
            className='border-[1px] px-4 py-3 rounded mb-2'
        />
        <label htmlFor='password'>Password</label>
        <input
            type='password'
            id='password'
            required
            value={Credential.password}
            onChange={(e)=>setCredential({...Credential,password:e.target.value})}
            className='border-[1px] px-4 py-3 rounded mb-3'
        />
        <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold p-3 rounded text-lg mb-2'>
            Log in
        </button>
        <p className='text-center'>
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
            
        </p>
    </form>
</div>
  )
}

export default Login