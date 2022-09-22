import React from 'react'

interface props {
  todo: Todo
  toggleTodo: ToggleTodo
}

const TodoListItem: React.FC<props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type='checkbox'
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo)
          }}
        />
        {todo.text}
      </label>
    </li>
  )
}

export default TodoListItem
