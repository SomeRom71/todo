import React, { Component } from 'react';
import {Button, FormControl } from 'react-bootstrap';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemName: ''
    }
  }

  deleteItem = (index) => this.props.deleteTodoAction(index);

  changeItem = (index, e) => {
    this.setState({
      itemName: e.target.value,
    })
    this.props.changeTodoAction(e.target.value, index);
  }

  doneItem = (index) => this.props.changeStateTodo(index);

  focusItem = (e) => e.target.previousElementSibling.focus();

  render() {
    const { todoList } = this.props
    return (
      <ul>
        {todoList.map((item, index) => {
          return(
            <li key={index} className={item.isDone ? 'todo-item completed' : 'todo-item'}>
              <input type="checkbox" onChange={() => this.doneItem(index)} />
              <FormControl className="todo-input" value={item.name} onChange={(e) => this.changeItem(index, e)}/>
              <Button variant="primary" onClick={(e) => this.focusItem(e)}>Change</Button>
              <Button onClick={() => this.deleteItem(index)} variant="danger">Delete</Button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default List;
