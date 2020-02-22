export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    payload: todo,
  }
}

export function deleteTodo(todoIndex) {
  return {
    type: 'DELETE_TODO',
    payload: todoIndex,
  }
}
