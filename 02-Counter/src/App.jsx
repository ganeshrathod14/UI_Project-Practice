import React from 'react'
import { useState } from 'react'

const App = () => {

    const [count, setcount] = useState(0)

  return (
    <>
    <div className="container">
      <h1 className='counter'> {count} </h1>
      <button onClick={()=>{
        setcount(count + 1)
      }}> Increase </button>

      <button onClick={()=> {
        setcount(count - 1)
      }}> Decrease </button>

      <form action="reset">
        <input className='Reset' type="reset" value="Reset" onClick={()=> {
          setcount(0)
        }}/>
      </form>
      </div>
    </>
  )
}

export default App