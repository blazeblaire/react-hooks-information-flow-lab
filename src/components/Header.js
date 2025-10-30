import React from 'react'

export default function Header({onDarkModeClick}) {
  return (
     <header>
      <h1>My Shopping List</h1>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </header>
  )
}
