'use client';
import { useState } from 'react'
// import supabase from '../supabase'
import { useRouter } from 'next/navigation'
import { app } from '@/firebaseconfig'


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
      <div className="from-amber-200 bg-gradient-to-b h-full flex flex-col">
        <div className="text-center p-4 md:mt-14">
          <div className="text-2xl font-bold p-4">Easy login</div>
          <p className="p-2 text-xl">
            Using your google account
          </p>

        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className="md:w-1/4  auth-widget">
            <div className='flex flex-col space-y-4 justify-center items-center'>

              {/* <input className='shadow-md rounded-md p-2 w-56' placeholder='example@mail.com' type='email' name='email' onChange={(e) => setemail(e.target.value)} />
<input className='shadow-md rounded-md p-2 w-56' placeholder='password' type='email' name='password' onChange={(e) => setpassword(e.target.value)} /> */}
              <div className='flex flex-row space-x-2'>
                <button className='shadow-md rounded-md text-white px-4 hover:bg-green-400 p-2  bg-green-500' onClick={signUpWithGoogle}>Login</button>
                {/* <button className='shadow-md rounded-md text-white px-4 hover:bg-green-400 p-2  bg-green-500' onClick={signup}>Sign up</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
