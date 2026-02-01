import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'



const App = () => {


    const [note, setNote] = useState('')
    const [detail, setDetail] = useState('')

    const [task, setTask] = useState([])

    const FormHandlar = (e) => {
      e.preventDefault()

      const copyTask = [...task]

      copyTask.push({note,detail})

      setTask(copyTask)
      
      //console.log(copyTask)
      // console.log(note)
      // console.log(detail)

      setNote('')
      setDetail('')
    }


    const notedelete = (idx) => {
      
      const copyTask = [...task]

      copyTask.splice(idx,1)

      setTask(copyTask)
    }

  return (
    <div className='min-h-screen  text-black lg:flex '>
      
        <form onSubmit={(e) => {
          FormHandlar(e)
        }}
        className='flex  lg:w-1/2 items-start gap-4 flex-col p-10 ' >

        <h1 className='text-4xl font-bold text-center text-white '> Add Notes </h1>
          
          <input 
          type="text" 
          placeholder='Enter Notes Heading' 
          className='px-5 py-2 border-2 w-full font-bold outline-none rounded bg-blue-50'
          required
          value={note}
          onChange={(e) => {
            setNote(e.target.value)
          }}
          />

          <textarea 
          name="" 
          placeholder='Write Notes'
          className='px-5 py-2 h-20 w-full border-2 outline-none rounded bg-amber-50'
          required
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}

          >
          </textarea>

          <button 
          className='bg-amber-50 active:bg-gray-300 font-bold w-full text-center outline-none px-5 py-2 rounded border-2 border-b-gray-800 shadow-gray-900 shadow hover:active:scale-98'> 
          Add Notes </button>

        </form>

        <div className=' lg:w-1/2 p-10 lg:border-2 lg:border-x-white '>

        <h1 className='text-4xl font-bold text-center mb-5 text-white'> Your Notes </h1>

        <div className='flex flex-wrap gap-5 overflow-auto justify-start pt-5 '>

            {task.map((elem,idx) => {
              return <div key={idx} className=' relative border-2 h-80 w-60 rounded-2xl overflow-hidden bg-cover  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/037/152/677/small/sticky-note-paper-background-free-png.png")] hover:-translate-y-1 shadow-[15px_15px_15px_black] '> 


                  <button className='absolute top-70 right-2 text-red-500 h-10 w-10 p-2' 
                onClick={()=> {
                    notedelete(idx)
                }} ><Trash2 /></button>
                

                <h3 className='font-bold leading-tight text-2xl text-center text-wrap overf wrap-break-word mt-4 pt-3'>{elem.note}</h3>
                <p className='font-mono leading-snug  h-65 w-full wrap-break-word text-gray-800 p-5 flex-1 break-all overflow-y-auto '> {elem.detail} </p>
              </div>
            })}
            
        </div>

        </div>

    </div>
  )
}

export default App