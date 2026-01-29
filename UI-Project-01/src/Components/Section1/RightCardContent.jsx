import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
   
        <div className="absolute inset-0 flex flex-col justify-between  p-8">
            <h1 className="h-10 w-10 rounded-full bg-white text-2xl font-semibold flex justify-center items-center p-2"> 1 </h1>
            <div>
                <p className="font-medium leading-relaxed text-white pb-6"> {props.intro} </p>
                <div className="flex items-center gap-2">
                    <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full text-lg"> {props.Tag}  </button>
                    <button className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-full text-lg flex items-center justify-center "> <ArrowRight /> </button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent