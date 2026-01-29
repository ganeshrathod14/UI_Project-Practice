import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/section2/Section2'


const App = () => {

  const users = [
    {
      id:1,
      img:"https://i.pinimg.com/736x/16/f2/cb/16f2cb1c6f2c833a250786a3b9270871.jpg",
      intro:"Confident developers using clean code, scalable architecture, and reliable tools daily.",
      Tag:"Satisfied"

    },
    {
      id:2,
      img:"https://i.pinimg.com/736x/43/a3/72/43a372851ae36ea8982d342230545977.jpg",
      intro:"Developers struggling with limited resources, outdated tools, and lack of proper guidance.",
      Tag:"Underserverd"
    },
    {
      id:3,
      img:"https://i.pinimg.com/736x/cf/8a/ad/cf8aad5482488cbea4edf8d100ac6111.jpg",
      intro:"Skilled coders building projects without access to modern platforms, funding, or opportunities.",
      Tag:"Underbanked"
    },
    {
      id:4,
      img:"https://i.pinimg.com/736x/7b/a6/b7/7ba6b7c5b22f184dffd53e73f89e797c.jpg",
      intro:"Skilled coders building projects without access to modern platforms, funding, or opportunities.",
      Tag:"Underbanked"
    },
    {
      id:5,
      img:"https://i.pinimg.com/736x/97/9a/7a/979a7a5f1f61fa35006959b8d2b2c8ec.jpg",
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