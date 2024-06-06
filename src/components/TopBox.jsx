import React from 'react'

function TopBox({contextText,icon}) {
  return (
    <div className=' h-52 w-52 rounded-xl relative  p-3 backdrop-blur-sm bg-white/60  '>
            <div className=' h-fit w-full relative font-extrabold font-sans text-pretty text-xl '>
                <h1>{contextText}</h1>
            </div>
            <div className=' absolute h-fit w-fit p-4 right-4 bottom-4 rounded-xl cursor-pointer bg-slate-300 '>{icon}</div>
    </div>
  )
}

export default TopBox