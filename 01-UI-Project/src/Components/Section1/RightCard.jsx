import React from "react";
import RightCardContent from "./RightCardContent";


const Rightcard = (props) => {
  return (
    <div className=" relative h-full w-60 shrink-0 overflow-hidden rounded-4xl">
        <img className="h-full w-full object-cover" src={props.img} alt=" coding img" />
       < RightCardContent intro={props.intro} Tag={props.Tag} id={props.id}/>
         
    </div>
  )
}

export default Rightcard;
