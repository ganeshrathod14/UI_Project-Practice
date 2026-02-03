import React, { useState } from 'react'
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'

const App = () => {

  const [task, setTask] = useState([])

  const addNote = (note, detail) => {
    setTask([...task, { note, detail }])
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen text-black lg:flex'>
      <NoteForm addNote={addNote} />
      <NotesList task={task} deleteNote={deleteNote} />
    </div>
  )
}

export default App
