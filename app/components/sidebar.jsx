import { useRouter } from "next/navigation"

export default function Sidebar(){
    const router=useRouter()
    return (
        <>
            <div className='h-full hidden md:flex flex-col w-1/4 bg-slate-500 left-0 fixed top-0 text-white'>
        <div className='text-center py-4'>
          <div>Welcome</div>
          
        </div>
        <div className='py-8  space-y-4 flex flex-col justify-center items-start'>
          <div className='py-2 w-full shadow-md'><div className='px-4'>Profile</div></div>
          <div className='py-2 w-full shadow-md cursor-pointer'><div onClick={()=>{router.push('/history')}} className='px-4'>History</div></div>
          <div className='py-2 w-full shadow-md'><div className='px-4'>About openai</div></div>
        </div>
      </div>
        </>
    )
}