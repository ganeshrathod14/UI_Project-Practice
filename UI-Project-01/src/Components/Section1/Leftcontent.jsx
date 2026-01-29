import React from 'react'
import Herotext from './Herotext'
import ArrowText from './ArrowText'

const Leftcontent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between bg-amber-200'>
        < Herotext />
        < ArrowText />
        
    </div>
  )
}

export default Leftcontent