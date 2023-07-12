'use client'
import { useState } from 'react';
// import supabase from '../../supabase'
export default function History() {

    const [data, setdata] = useState([]);
    const [resp, setresp] = useState([]);

    const getprompt = async () => {
        // try {
        //     let { data, error } = await supabase.from('prompts').select('prompt');
        //     setdata(data)
        // } catch (error) {
        //     console.log(error)
        // }
        console.log("printing prompts")
    }
    const getresp= async()=>{
        // try{
        //     let {data,error}= await supabase.from('response').select('response');
        //     setresp(data)

        // }catch(error){
        //     console.log(error)
        // }
        console.log("printing resp")
    }

    return (
        <>
            <div className='flex flex-col ml-12 justify-center items-center space-y-12'>
                <div className='rounded-md w-4/5  bg-red-500 '>
                    <div>
                        <button onClick={getprompt}>Read prompt</button>
                    </div>
                    <div>
                        {data && data.map((dat) => {
                            return (
                                <>
                                    <div key={dat}>
                                        <div>{dat.prompt}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className='bg-amber-500 rounded-md w-4/5'>
                <div>
                        <button onClick={getresp}>Read resp </button>
                    </div>
                    <div>
                        {resp && resp.map((dat) => {
                            return (

                                <>
                                    <div key={dat}>
                                        <div>{dat.response}</div>
                                    </div>
                                </>


                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}