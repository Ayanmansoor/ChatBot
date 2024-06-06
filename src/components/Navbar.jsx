import React, { useContext, useEffect, useState } from 'react'
import { account } from '../appwrite/Config.Appwrite';
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
    const [Login,setLogin]=useState(false)
    let Navigate = useNavigate()
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const userData = await account.get();
                  setLogin(true)
            } catch (err) {
                console.error(err);
                // if you want to navigate user who not have account just uncomment it 
                // Navigate("/login")

            }
        };
        checkAuthStatus();
    }, []);
    return (
        <div className=" h-auto w-full bg-transparent sticky top-0  ">
            <div className=" flex items-center justify-between w-full h-full px-3 py backdrop-blur-sm bg-white/30 ">
                <div className=" h-12 w-12 rounsed raletive overflow-hidden ">
                    <img
                        className="h-full w-full relative object-cover "
                        src="src/assets/Logo.png"
                        alt=""
                    />
                </div>

                <div className=" h-full  p-1  relative flex items-center gap-3 " >
                    <div className="h-fit w-12 rounsed raletive overflow-hidden hover:bg-slate-400  text-white ">
                        <h2 className=" h-full w-full text-center relative font-sans ">
                            Home
                        </h2>
                    </div>




                    <div className="h-fit w-12 rounsed raletive overflow-hidden hover:bg-slate-400  text-white ">
                        <h2 className=" h-full w-full text-center relative font-sans ">
                            About
                        </h2>
                    </div>
                    <div className="h-fit w-fil rounsed raletive overflow-hidden hover:bg-slate-400  text-white ">
                        <h2 className=" h-full w-full text-center relative font-sans ">
                            Contect
                        </h2>
                    </div>
                    {Login ? <div className=" h-fit w-12 rounsed raletive overflow-hidden hover:bg-slate-400 text-white ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"

                            fill="currentColor"
                            class="bi bi-person"
                            viewBox="0 0 16 16"
                            className="h-10 w-full relative cursor-pointer"
                        >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </div> : <div className=" h-fit w-auto rounded-lg raletive overflow-hidden hover:bg-slate-400 text-white ">
                        <Link to="/login" className=" py-3 px-2 bg-black text-white rounded-sm ">LOgin</Link>
                    </div>}


                </div>
            </div>
        </div>
    );
}

export default Navbar;
