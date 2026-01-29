import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent1 from './Rightcontent1'


const PageContent1 = () => {
  return (
    <div className='py-10 flex gap-10 items-center h-[90vh] bg-green-800 px-18'>
        < Leftcontent />
        < Rightcontent1 />
    </div>
  )
}

export default PageContent1