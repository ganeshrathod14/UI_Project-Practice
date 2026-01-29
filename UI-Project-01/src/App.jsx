import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/section2/Section2'


const App = () => {

  const users = [
    {
      img:"https://i.pinimg.com/736x/16/f2/cb/16f2cb1c6f2c833a250786a3b9270871.jpg",
      intro:"Confident developers using clean code, scalable architecture, and reliable tools daily.",
      Tag:"Satisfied"

    },
    {
      img:"https://i.pinimg.com/736x/43/a3/72/43a372851ae36ea8982d342230545977.jpg",
      intro:"Developers struggling with limited resources, outdated tools, and lack of proper guidance.",
      Tag:"Underserverd"
    },
    {
      img:"https://i.pinimg.com/736x/cf/8a/ad/cf8aad5482488cbea4edf8d100ac6111.jpg",
      intro:"Skilled coders building projects without access to modern platforms, funding, or opportunities.",
      Tag:"Underbanked"
    }
  ]

  return (
    <div>
        < Section1 users={users}/>
        < Section2 />
        
    </div>
  )
}

export default App