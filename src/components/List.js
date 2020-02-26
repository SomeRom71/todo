import React from 'react';
import {Button, FormControl } from 'react-bootstrap';

const List = (props) => {

  const deleteItem = (index) => props.deleteTodoAction(index);

  const changeItem = (index, e) => props.changeTodoAction(e.target.value, index);

  const doneItem = (index) => props.changeStateTodo(index);

  const focusItem = (e) => e.target.previousElementSibling.focus();

  return (
    <ul>
      {props.todoList.map((item, index) => {
        return(
          <li key={index} className={item.isDone ? 'todo-item completed' : 'todo-item'}>
            <input type="checkbox" checked={item.isDone} onChange={() => doneItem(index)} />
            <textarea className="todo-input" value={item.name} onChange={(e) => changeItem(index, e)}>{item.name}</textarea>
            <Button className="change-btn" variant="primary" onClick={(e) => focusItem(e)}>Change</Button>
            <Button onClick={() => deleteItem(index)} variant="danger">Delete</Button>
          </li>
        )
      })}
    </ul>
  )
}

export default List;
