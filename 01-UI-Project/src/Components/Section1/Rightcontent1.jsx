import React from 'react'
import Rightcard from './rightcard'

const Rightcontent1 = (props) => {
  console.log(props)
  return (
    <div id='right' className='h-full w-3/4 p-4 flex flex-nowrap rounded-3xl overflow-x-auto gap-10  '>
        {props.users.map((elem,idx) => {
          return < Rightcard  key={idx} img={elem.img} intro={elem.intro} Tag={elem.Tag} id={elem.id}/>
          
        })}
    </div>
  )
}

export default Rightcontent1