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
  const [todos, setTodos] = useState(todoList)

  const addTodo: addTodo = input => {
    setTodos([
      ...todos,
      {
        text: input,
        complete: false
      }
    ])
  }

  return (
    <div className='App-header'>
      <h1 className=''>TypeScript Todo List</h1>
      <Input
        addTodo={addTodo}
      />
      <TodoListPanel todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
