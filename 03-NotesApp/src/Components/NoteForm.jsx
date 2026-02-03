import React, { useState } from 'react'

const NoteForm = ({ addNote }) => {

  const [note, setNote] = useState('')
  const [detail, setDetail] = useState('')

  const formHandler = (e) => {
    e.preventDefault()
    addNote(note, detail)
    setNote('')
    setDetail('')
  }

  return (
    <form
      onSubmit={formHandler}
      className='flex lg:w-1/2 items-start gap-4 flex-col p-10'
    >
      <h1 className='text-4xl font-bold text-center text-white'>
        Add Notes
      </h1>

      <input
        type="text"
        placeholder='Enter Notes Heading'
        className='px-5 py-2 border-2 w-full font-bold outline-none rounded bg-blue-50'
        required
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <textarea
        placeholder='Write Notes'
        className='px-5 py-2 h-20 w-full border-2 outline-none rounded bg-amber-50'
        required
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />

      <button className='bg-amber-50 font-bold w-full px-5 py-2 rounded border-2 shadow'>
        Add Notes
      </button>
    </form>
  )
}

export default NoteForm
