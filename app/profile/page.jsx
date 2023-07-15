'use client'
import { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import {getAuth} from 'firebase/auth'
import { app, database } from '@/firebaseconfig'

export default function Profile(){
    const [name,setname]=useState('')
    const [profile,setprofile]=useState('')
    const [email,setemail]=useState('')
    const auth=getAuth();
    useEffect(()=>{
        const user=auth.currentUser
        setname(user.displayName)

        setemail(user.email)
        console.log(user.photoURL)
        setprofile(user.photoURL)
        
    })
    return (
        <>
            <div className="flex flex-row">
                <Sidebar name={name} />
                <div className='flex flex-col  md:w-3/4 justify-center items-center md:left-1/4 relative mt-20'>

                </div>

            </div>
        </>
    )
}