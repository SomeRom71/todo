export const initialState = {
  todoList: ['Выучи', 'редакс', 'тупой', 'мешок', 'говна']
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const todoListAdd = [...state.todoList, action.payload];
      return { ...state, todoList: todoListAdd}
    case 'DELETE_TODO':
      const todoListDelete = state.todoList.filter((item, index) => action.payload != index);
      return { ...state, todoList: todoListDelete}
    case 'CHANGE_TODO':
      const { index, value } = action.payload;
      state.todoList[index] = value;
      return {...state}
    default:
      return state
  }
}
