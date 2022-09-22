// 單一個 todoItem
interface Todo {
  text: string
  complete: boolean
}

// 定義點擊 todo 的 fn
type ToggleTodo = (selectedTodo: Todo) => void

// 定義增加 todo 的 fn
type AddTodo = (text: string) => void
