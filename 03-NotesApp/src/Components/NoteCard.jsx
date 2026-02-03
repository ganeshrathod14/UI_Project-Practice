import React from 'react'
import { Trash2 } from 'lucide-react'

const NoteCard = ({ elem, idx, deleteNote }) => {
  return (
    <div className='relative border-2 h-80 w-60 rounded-2xl overflow-hidden bg-cover
      bg-[url("https://static.vecteezy.com/system/resources/thumbnails/037/152/677/small/sticky-note-paper-background-free-png.png")]
      hover:-translate-y-1 shadow-[15px_15px_15px_black]'>

      <button
        className='absolute top-68 right-2 text-red-500 h-10 w-10 p-2 hover:text-white hover:bg-red-700 hover:rounded-full'
        onClick={() => deleteNote(idx)}
      >
        <Trash2 />
      </button>

      <h3 className='font-bold text-2xl text-center mt-4 px-3'>
        {elem.note}
      </h3>

      <p className='font-mono h-56 p-5 overflow-y-auto break-all'>
        {elem.detail}
      </p>
    </div>
  )
}

export default NoteCard
