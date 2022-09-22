/// <reference types="react-scripts" />

type TodoList = {
  text: string
  complete: boolean
}

type addTodo = (input: string) => void
