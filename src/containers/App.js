import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import List from '../components/List';
import { addTodo } from '../actions/index';

class App extends Component {
  constructor(){
    super()
  }

  render() {
    const { todoList, addTodoAction } = this.props;
    debugger;
    return (
      <>
        <List todoList={todoList} addTodoAction={addTodoAction} />
      </>
    )
  }
}

const mapStateToProps = store => {
  return {
    todoList: store.todoList
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addTodoAction: todo => dispatch(addTodo(todo)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
