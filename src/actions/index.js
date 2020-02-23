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

export function changeTodo(value, index) {
  return {
    type: 'CHANGE_TODO',
    payload: {value, index},
  }
}
