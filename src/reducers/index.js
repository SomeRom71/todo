export const initialState = {
  todoList: ['Выучи', 'редакс', 'тупой', 'мешок', 'говна']
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todo: action.payload }

    default:
      return state
  }
}
