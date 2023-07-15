'use client'
import { useEffect, useState } from 'react';
import { app, database } from '@/firebaseconfig'
import { getAuth } from 'firebase/auth'
import { collection, query, where, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import Sidebar from '../components/sidebar';
// import supabase from '../../supabase'
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
           <div className='flex flex-col md:flex-row '>
            <Sidebar  name={name}/>

           <div className='flex flex-col  md:w-3/4 justify-center items-center md:left-1/4 relative mt-4 md:mt-20'>
                <div className='rounded-md w-4/5 '>
                    {/* <div>
                        <button onClick={getdata}>Read prompt</button>
                    </div> */}
                    <div className='flex flex-col space-y-3'>
                        {data && data.map((dat) => {
                            return (
                                <>
                                    <div className='shadow-md rounded-md flex flex-col p-2' key={dat}>
                                        <div className=''><span className='font-semibold'>{name}: </span>{dat.prompt}</div>
                                        <div className=''><span className='font-semibold'>Ai: </span>{dat.message.content}</div>
                                    </div>
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