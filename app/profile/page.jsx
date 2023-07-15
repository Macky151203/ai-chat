'use client'
import { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import { getAuth } from 'firebase/auth'
import { app, database } from '@/firebaseconfig'
import Image from 'next/image'

export default function Profile() {
    const [name, setname] = useState('')
    const [profile, setprofile] = useState('')
    const [email, setemail] = useState('')
    const auth = getAuth();
    useEffect(() => {
        const user = auth.currentUser
        setname(user.displayName)

        setemail(user.email)

        setprofile(user.photoURL)

    })
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <Sidebar name={name} />
                <div className='flex flex-col md:w-3/4 justify-center items-center md:left-1/4 relative mt-4 md:mt-20'>
                        <div className='bg-gray-200 md:w-1/2 flex flex-col justify-center items-center p-2 rounded-lg'>
                            <div>
                            <Image className='rounded-full' src={profile} width={150} height={150} />
                            </div>
                            <div className='font-bold text-lg mt-4 text-center'>
                                Username
                            </div>
                            <div className='text-center'>
                            {name}
                            </div>
                            <div className='font-bold text-lg mt-4'>
                                Registered Email
                            </div>
                            <div className='text-center'>
                                {email}
                            </div>
                        </div> 
                </div>

            </div>
        </>
    )
}
 