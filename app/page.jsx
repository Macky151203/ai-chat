'use client';
import { useState } from 'react'
// import supabase from '../supabase'
import { useRouter } from 'next/navigation'
import { app } from '@/firebaseconfig'
import Image from 'next/image';
import hero from '../images/hero.png'


import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'





export default function Register() {
  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  const router = useRouter();



  // const [email, setemail] = useState("");

  // const signup= ()=>{
  // createUserWithEmailAndPassword(auth,email,password).then((response)=>{
  //         sessionStorage.setItem('Token',response.user.accessToken);
  //         console.log(response.user.email);
  //         router.push('/maincomp')
  //     })
  // }
  // const signUpWithGoogle = () => {
  //     signInWithPopup(auth, googleAuthProvider).then((response) => {
  //         sessionStorage.setItem('Token', response.user.accessToken);
  //         router.push('/maincomp')
  //         console.log(response.user)
  //     }
  //     )
  // }
  // useEffect(()=>{
  //     let token= sessionStorage.getItem('Token');
  //     if(token){
  //         router.push('/home')
  //     }
  // },[])

  const signUpWithGoogle = async () => {
    try {
      signInWithPopup(auth, googleAuthProvider).then((response) => {
        sessionStorage.setItem('Token', response.user.accessToken);
        router.push('/maincomp')
        console.log(response.user)
      }
      )







    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>

      <div className='flex flex-col min-h-screen  bg-gray-800'>
        <div className='text-2xl ml-4 mt-4 md:ml-8 md:mt-8 text-white flex  justify-start'>
            <div>AI chat bot</div>
        </div>
        <div className='flex flex-row justify-between items-center flex-wrap-reverse'>
          <div className='flex flex-col ml-4 md:ml-12 text-white space-y-2'>
            <div className='text-2xl'>Please login with your google account to continue...</div>
            <div><button onClick={signUpWithGoogle} className='rounded-sm bg-transparent border-2 border-white p-1 px-4 hover:bg-white hover:text-black'>Login</button></div>
          </div>
          <div>
            <Image src={hero} />
          </div>
        </div>
      </div>

    </>
  )

}
