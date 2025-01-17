"use client"
import React from 'react'

export default function Button() {
  return (
    <div className='flex flex-col w-full justify-center items-center max-sm:w-32'>
      <button className='shadow-md hover:shadow-violet-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-500 duration-150  bg-violet-400 mx-2 rounded-md px-2 py-[2px] ' onClick={() => alert("sucssesfull")} >Click</button>
    </div>
  )
}
