import React from 'react'
import NoteCard from './NoteCard'

const NotesList = ({ task, deleteNote }) => {
  return (
    <div className='lg:w-1/2 p-10 lg:border-2 lg:border-x-white'>
      <h1 className='text-4xl font-bold text-center mb-5 text-white'>
        Your Notes
      </h1>

      <div className='flex flex-wrap gap-5 overflow-auto pt-5'>
        {task.map((elem, idx) => (
          <NoteCard
            key={idx}
            elem={elem}
            idx={idx}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  )
}

export default NotesList
