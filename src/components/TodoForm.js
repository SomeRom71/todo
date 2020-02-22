import React from 'react';

const TodoForm = props => {

  const addToList = e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const getNewTodo = formData.get('todoName').trim();
    return props.addTodoAction(getNewTodo);
  }

  return(
    <form onSubmit={addToList}>
      <input type="text" name="todoName"/>
      <button type="submit">Add todo</button>
    </form>
  );
}

export default TodoForm;
