'use client';
import { useChat } from 'ai/react'
import { useState, useEffect } from 'react'
import Sidebar from '../components/sidebar'
import { getAuth } from 'firebase/auth'
import { app,database } from '@/firebaseconfig'
import { collection, query, where, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";


export default function Chat() {
  const databaseref = collection(database, "aiapp")
    const auth=getAuth()
    const[username,setusername]= useState('')
    useEffect(()=>{
      const user=auth.currentUser
      setusername(user.displayName)
    })
  

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish:async(message)=>{
      
      const user=auth.currentUser
      const uid=user.uid
      await addDoc(databaseref,{
        prompt:input,
        message:message,
        uid:uid,

      }).catch((err)=>{
        console.log(err)
      })
    }
  })
    

  
  // const user=session?.user
  // useEffect(()=>{
  //   setusername(user?.username)
  // },[])
  // const auth = getAuth();




  return (
    // <Suspense fallback={Loading}></Suspense>
    <div className='  flex flex-col  md:flex-row '>
      <Sidebar name={username} />

      <div className="flex flex-col w-full md:w-3/4 p-4 text-white bg-gray-800 min-h-screen  md:left-1/4 relative  md:px-12 py-12 mr-12">
        {messages.length > 0
          ? messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap items-start  flex py-1 m-1 shadow-sm ">

            {m.role === 'user' ? `${username}: ` : 'AI: '}
              <div className={`p-2 px-2 bg-slate-500 rounded-md   ${m.role==='user'?`w-3/4`:'w-full'} `}>{m.content}</div>


            </div>
          ))
          : null}

        <form  onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 md:w-1/2 w-4/5 p-2 ml-3 md:ml-6 mb-8 placeholder-white bg-slate-500 text-white border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Write your prompt..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  )
}