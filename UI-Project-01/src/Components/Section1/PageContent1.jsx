import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent1 from './Rightcontent1'


const PageContent1 = (props) => {
  return (
    <div className='pb-20 flex gap-10 items-center h-[90vh]  px-18'>
        < Leftcontent />
        < Rightcontent1 users={props.users}/>
    </div>
  )
}

export default PageContent1