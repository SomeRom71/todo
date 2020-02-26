export const initialState = {
  todoList: [
    {name : 'выучи', isDone: false},
    {name : 'редакс', isDone: false},
    {name : 'кусок', isDone: false},
    {name : 'мяса', isDone: false}
  ]
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const todoListAdd = [...state.todoList, {name: action.payload, isDone: false}];
      return { ...state, todoList: todoListAdd}

    case 'DELETE_TODO':
      const todoListDelete = state.todoList.filter((item, index) => action.payload != index);
      return { ...state, todoList: todoListDelete}

    case 'CHANGE_TODO':
      const { index, value } = action.payload;
      const newListChange = state.todoList.map((item, mapIndex) => {
        if(mapIndex === index){
          item.name = value
        }
        return item;
      })
      return {...state, todoList: newListChange}

    case 'CHANGE_STATE_TODO':
      const newList = state.todoList.map((item, index) => {
        if (index === action.payload) {
           item.isDone = !item.isDone
         }
        return item;
      })
      return {...state, todoList: newList };

    default:
      return state
  }
}
