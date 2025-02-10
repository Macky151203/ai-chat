"use client";

import { useEffect, useState } from "react";
import { Inter, Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Show({ dat, name }) {
  const [more, setmore] = useState(true);
  const [disp, setdisp] = useState("Read more...");
  const togg = () => {
    setmore((prev) => !prev);
    setdisp(more ? "Read less..." : "Read more...");
  };

  // useEffect(()=>{
  //     setcont(dat.message.content.length>100?dat.message.content.substring(0,100):dat.message.content.length)
  // })
  return (
    <>
      <div
        className="shadow-md rounded-md space-y-2  flex flex-col p-2"
        key={dat}
      >
        <div className="flex flex-row space-x-1 items-start">
          <div className="font-semibold md:mt-0 mt-2">{name}: </div>
          <div
            className={`
            w-3/4
        bg-slate-500 ${ubuntu.className} p-2 rounded-md w-full`}
          >
            {dat.prompt}
          </div>
        </div>
        <div className="flex flex-row space-x-1 items-start">
          <div className="font-semibold mt-2">Ai: </div>
          <div
            className={`w-3/4
          bg-slate-500 ${ubuntu.className} p-2 rounded-md w-full`}
          >
            {more ? dat.message.content.substring(0, 250) : dat.message.content}
            <span
              className="cursor-pointer text-gray-800 font-bold ml-2"
              onClick={togg}
            >
              {dat.message.content.length > 250 ? disp : ""}
            </span>
          </div>
        </div>
        {/* <div className='p-2 px-2 bg-slate-500 rounded-md'><span className='font-semibold'>Ai: </span>{dat.message.content}</div> */}
      </div>
    </>
  );
}
