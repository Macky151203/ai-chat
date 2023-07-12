'use client';


import { useChat } from 'ai/react'

import { useState, useEffect } from 'react'
// import supabase from '../../supabase'
import Sidebar from '../components/sidebar'





export default function Chat() {
  // const [name,setname]=useState('')
  // const onAuthStateChange = async () => {
  //   try {
  //     const { data: { user }, } = await supabase.auth.getUser();
  //     console.log(user.email)
  //     // setname(user.email)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   onAuthStateChange();
  // }, []);

  const { messages, input, handleInputChange, handleSubmit } = useChat()
    

  
  // const user=session?.user
  // useEffect(()=>{
  //   setusername(user?.username)
  // },[])
  // const auth = getAuth();




  return (
    // <Suspense fallback={Loading}></Suspense>
    <div className=' h-full flex flex-row'>
      <Sidebar />

      <div className="flex flex-col md:w-3/4 p-4  md:left-1/4 md:relative px-12 py-12 mr-12">
        {messages.length > 0
          ? messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap py-1 ">

              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}


            </div>
          ))
          : null}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 md:w-1/2 w-3/5 p-2 ml-6 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  )
}