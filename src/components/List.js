import React, { Component } from 'react';

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

  render() {
    const { todoList } = this.props
    return (
      <ul>
        {todoList.map((item, index) => {
          return(
            <li key={index}><input type="text" value={item} onChange={(e) => this.changeItem(index, e)} /><button onClick={() => this.deleteItem(index)}>Delete</button></li>
          )
        })}
      </ul>
    )
  }
}

export default List;
