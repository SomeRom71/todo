import React from 'react';

const List = props => {

  const deleteItem = (e) => {
    const index = e.target.getAttribute('index');
    return props.deleteTodoAction(index);
  }

  return (
    <>
      <ul>
        {props.todoList.map((item, index) => {
          return(
            <li key={index}>{item}<button index={index} onClick={deleteItem}>Delete</button></li>
          )
        })}
      </ul>
    </>
  )
}

export default List;
