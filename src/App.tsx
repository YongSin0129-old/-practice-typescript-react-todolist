import React, { useState } from 'react'
import './App.css'
import Input from './Input'
import TodoListPanel from './TodoList'

const todoList: TodoList[] = [
  {
    text: '吃飯',
    complete: true
  },
  {
    text: '睡覺',
    complete: false
  }
]

function App (): JSX.Element {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(todoList)

  return (
    <div className='App-header'>
      <h1 className=''>TypeScript Todo List</h1>
      <Input input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      <TodoListPanel todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
