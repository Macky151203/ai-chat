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
                <div className='flex flex-col md:w-3/4 items-center md:justify-start bg-gray-800 min-h-screen md:items-start md:left-1/4 relative pt-4 md:pt-20'>
                        <div className='bg-gray-800 text-white md:w-1/2  flex flex-col justify-center items-center md:justify-start md:items-start p-1 md:ml-12 rounded-lg'>
                            <div className='text-lg mt-4 font-bold'>
                                Profile picture
                            </div>
                            <div>
                            <Image className='rounded-full mt-4' src={profile} width={150} height={150} />
                            </div>
                            <div className=' text-lg mt-4 font-bold text-center'>
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
 