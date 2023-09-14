'use client'
import { useEffect, useState } from 'react';
import { app, database } from '@/firebaseconfig'
import { getAuth } from 'firebase/auth'
import { collection, query, where, addDoc, getDocs, doc, updateDoc, deleteDoc, orderBy } from "firebase/firestore";
import Sidebar from '../components/sidebar';
import React, { Suspense } from 'react';


// import supabase from '../../supabase'
const Show=React.lazy(()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(import('../components/show'))
        },2000)
    })
})
export default function History() {

    const [data, setdata] = useState([]);
    const [name, setname] = useState('');
    const auth=getAuth();
    useEffect(()=>{
        getdata();
    })

    const getdata = async () => {
        const user=auth.currentUser
        setname(user.displayName)
        const uid=user.uid
        const q=query(collection(database,"aiapp"),where("uid","==",uid));
    
        
        await getDocs(q).then((response)=>{
            setdata(response.docs.map((elem)=>{
                return {...elem.data(),id:elem.id}
            }))
        })
        
        // try {
        //     let { data, error } = await supabase.from('prompts').select('prompt');
        //     setdata(data)
        // } catch (error) {
        //     console.log(error)
        // }
        console.log("printing prompts")
    }
    

    return (
        <>
           <div className='flex flex-col md:flex-row'>
            <Sidebar  name={name}/>

           <div className='flex flex-col  md:w-3/4 justify-center text-white bg-gray-800 min-h-screen items-center md:left-1/4 relative pt-4 md:pt-20'>
                <div className='rounded-md w-4/5 '>
                    {/* <div>
                        <button onClick={getdata}>Read prompt</button>
                    </div> */}
                    <div className='flex flex-col space-y-3'>
                        {data && data.map((dat) => {
                            return (
                                <>
                                    <Suspense fallback={<div className='w-full h-12 bg-slate-300 animate-pulse rounded-lg'>
                                        
                                    </div>}>
                                    <Show dat={dat} name={name} />
                                    </Suspense>
                                    
                                </>
                            )
                        })}
                    </div>
                </div>
               
            </div>
           </div>

        </>
    )
}