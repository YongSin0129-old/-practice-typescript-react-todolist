import React from 'react'

type props = {
  todos: TodoList[]
  setTodos: React.Dispatch<React.SetStateAction<TodoList[]>>
}

const TodoListPanel: React.FC<props> = props => {
  const { todos, setTodos } = props

  const handleClick = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const target = e.target as Element
    console.log(target.innerHTML)
    const newTodos = todos.map(todo => {
      if (todo.text === target.innerHTML) {
        return { ...todo, complete: !todo.complete }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <h3
            key={index}
            style={{
              textDecoration: todo.complete ? 'line-through' : undefined
            }}
            onClick={handleClick}
          >
            {todo.text}
          </h3>
        )
      })}
    </div>
  )
}

export default TodoListPanel
