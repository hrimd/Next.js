import React from 'react'
import Link from 'next/link'
export default function AboutLayout({children}) {
  return (
    <main className='mt-6   '>
     <div >
        <ul >
           
        <li className="shadow-md hover:shadow-violet-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-500 duration-150  bg-violet-400 mx-2 rounded-md px-2 py-[2px] w-[70px] my-3"><Link href="/About/Mission">Mission</Link></li>
        <li className="shadow-md hover:shadow-violet-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-500 duration-150  bg-violet-400 mx-2 rounded-md px-2 py-[2px] w-[70px] my-3"><Link href="/About/Vision">Vision</Link></li>
        </ul>
        
        {children}
     </div>
    </main>
  )
}
