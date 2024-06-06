import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { RegisterUser } from '../appwrite/Register.appwrite';
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const [UserObj, setUserObj] = useState({
        Username: "",
        password: "",
        email: ''
    })
    const [cpassword, setcpassword] = useState("")

    function Validation() {
        const { Username, email, password } = UserObj
        if ((Username.trim()).length < 3) {
            toast.error("Username Must be Greater ")
            throw (" Username Must be Greater ")
        }
        if ((password.trim()) != (cpassword.trim()) || !(password.trim().length >= 8)) {
            toast.error("Password Must be Same or strong ")
            throw (" username Must be same ")
        }
        if ((email.trim().length < 5)) {
            toast.error(" invalid email ")
            throw (" invalid email ")
        }
        else {
            console.log(UserObj)
            return true
        }
    }
    function CreateUser() {
        console.log(UserObj)
        const { Username, password, email } = UserObj
        try {
            RegisterUser(Username, email, password)

        }
        catch (error) {
            toast.error("Something went wrong happend ")

        }
    }
    function CleanUp(){
        setUserObj({...UserObj,Username:"",password:"",email:""})
    }
    function HandleFrom(e) {
        e.preventDefault()
        if (Validation()) {
            CreateUser()
        }
        CleanUp()
    }
    return (
        <>
            <div className='w-full min-h-[100vh] flex flex-col items-center justify-center p-8'>
                <ToastContainer />

                <form className='flex flex-col md:w-[60%] w-full' onSubmit={HandleFrom}>
                    <h2 className='font-bold text-3xl text-center mb-2'>Register</h2>
                    <label htmlFor='username'>Full Name</label>
                    <input
                        type='text'
                        id='fullName'
                        value={UserObj.Username}
                        className='border-[1px] px-4 py-3 rounded mb-2'
                        required
                        onChange={(e) => setUserObj({ ...UserObj, Username: e.target.value })}
                    />
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        id='email'
                        className='border-[1px] px-4 py-3 rounded mb-2'
                        required
                        value={UserObj.email}
                        onChange={(e) => setUserObj({ ...UserObj, email: e.target.value })}

                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        className='border-[1px] px-4 py-3 rounded mb-3'
                        required
                        value={UserObj.password}

                        onChange={(e) => setUserObj({ ...UserObj, password: e.target.value })}

                    />
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <input
                        type='password'
                        id='cpassword'
                        className='border-[1px] px-4 py-3 rounded mb-3'
                        required
                        value={cpassword}
                        onChange={(e) => setcpassword(e.target.value)}

                    />

                    <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold p-3 rounded text-lg mb-2'>
                        Create account
                    </button>
                    <p className='text-center'>
                        Already have an account?{" "}
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register