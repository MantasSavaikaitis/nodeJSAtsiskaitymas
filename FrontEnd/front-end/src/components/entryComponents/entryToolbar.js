import React from 'react'

function EntryToolbar({ log }) {
  return (
    <div className='entryToolbar'>
      <button onClick={() => log(true)}>Login</button>
      <button onClick={() => log(false)}>Register</button>
    </div>
  )
}

export default EntryToolbar