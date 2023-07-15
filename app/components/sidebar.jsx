import { useRouter } from "next/navigation"
import { AiFillHome } from 'react-icons/ai'
import { IoIosContact } from 'react-icons/io'
import { GrHistory } from 'react-icons/gr'

export default function Sidebar({ name }) {
  const router = useRouter()
  return (
    <>
      <div className='md:h-full h-fit w-full  md:flex flex-col md:w-1/4 bg-slate-500 md:left-0 fixed top-0 text-white'>
        <div className='text-center py-4 font-bold text-xl'>
          <div>Welcome {name}</div>

        </div>
        <div className='py-8  space-y-4 hidden md:flex flex-col justify-center items-start'>
          <div className='py-2 w-full shadow-md cursor-pointer flex flex-row justify-start items-center pl-4'><div><AiFillHome /></div><div className='px-4'><div onClick={()=>{router.push('/maincomp')}}>Home</div></div></div>
          <div className='py-2 w-full shadow-md cursor-pointer flex flex-row justify-start items-center pl-4'><div><IoIosContact /></div><div onClick={()=>{router.push('/profile')}} className='px-4'>Profile</div></div>
          <div className='py-2 w-full shadow-md cursor-pointer flex flex-row justify-start items-center pl-4'><div ><GrHistory /></div><div onClick={() => { router.push('/history') }} className='px-4'>History</div></div>
          <div className='py-2 w-full shadow-md cursor-pointer flex flex-row justify-start items-center pl-4'><div><IoIosContact /></div><div className='px-4'>About openai</div></div>
        </div>
      </div>
    </>
  )
}