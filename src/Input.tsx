import React from 'react'

type Props = {
  input: string
  todos: TodoList[]
  setInput: React.Dispatch<React.SetStateAction<string>>
  setTodos: React.Dispatch<React.SetStateAction<TodoList[]>>
}

const Input: React.FC<Props> = props => {
  const { input, todos, setInput, setTodos } = props
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
          setTodos([
            ...todos,
            {
              text:  input ,
              complete: false
            }
          ])
        }}
      >
        Add task
      </button>
    </div>
  )
}

export default Input
