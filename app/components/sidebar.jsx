'use client'
import { useRouter } from "next/navigation"
import { AiFillHome } from 'react-icons/ai'
import { IoIosContact } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'
import { BsClockHistory } from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react"
import Link from "next/link"

export default function Sidebar({ name }) {
  const router = useRouter()
  const [open,setopen]=useState(false)
  
  return (
    <>
      <div className= 'md:h-full h-fit w-full  md:flex flex-col md:w-1/4 bg-slate-500 md:left-0 md:fixed relative top-0 text-white'>
        <div className='text-center py-4 flex flex-row font-bold text-md md:text-xl justify-around items-center'>
          <div>Welcome {name}</div>
          < AiOutlineMenu className="md:hidden hover:cursor-pointer" onClick={()=>setopen(!open)} />
        </div>
        <div className={`py-8  space-y-4 ${!open?'hidden':''} transition ease-in-out duration-75 delay-100 md:flex flex-col justify-center items-start`}>
          <div className='py-2 w-full shadow-md cursor-pointer flex flex-row justify-start items-center pl-4'><div><AiFillHome /></div><div className='px-4'><div onClick={()=>{router.push('/maincomp')}}>Home</div></div></div>
          <div className='py-2 w-full shadow-md cursor-pointer flex flex-row justify-start items-center pl-4'><div>< IoIosContact /></div><div onClick={()=>{router.push('/profile')}} className='px-4'>Profile</div></div>
          <div className='py-2 w-full shadow-md cursor-pointer flex flex-row justify-start items-center pl-4'><div ><BsClockHistory className="text-white" /></div><div onClick={() => { router.push('/history') }} className='px-4'>History</div></div>
          <div className='py-2 w-full shadow-md cursor-pointer flex flex-row justify-start items-center pl-4'><div><FcAbout className="text-white" /></div><div className='px-4'><Link href="https://openai.com" target="_main">About openAI</Link></div></div>
        </div>
      </div>
    </>
  )
}