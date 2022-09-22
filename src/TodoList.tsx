import React from 'react'
import TodoListItem from './TodoListItem'

// 一整個 todoList , 注意這邊跟 TodoListItem 的差別在一個 [] 符號
interface props {
  todos: Todo[]
  toggleTodo: ToggleTodo
}

const TodoList: React.FC<props> = props => {
  const { todos, toggleTodo } = props
  return (
    <div>
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}

export default TodoList
