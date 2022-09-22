import React, { useState } from 'react'

type Props = {
  addTodo: addTodo
}

const Input: React.FC<Props> = props => {
  const { addTodo } = props
  
  const [input, setInput] = useState('')

  return (
    <div>
      <input
        value={input}
        onChange={e => {
          setInput(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setInput('')
          addTodo(input)
        }}
      >
        Add task
      </button>
    </div>
  )
}

export default Input
