import React, { useState } from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import './App.css'

function App (): JSX.Element {
  const [todos, setTodos] = useState(todoList)

  const toggleTodo = (selectedTodo: Todo): void => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false }
    setTodos([...todos, newTodo])
  }

  return (
    <div className='App-header'>
      <h1 className=''>TypeScript Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  )
}

export default App

const todoList: Todo[] = [
  {
    text: '吃飯',
    complete: true
  },
  {
    text: '睡覺',
    complete: false
  }
]
