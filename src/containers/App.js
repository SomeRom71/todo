import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import List from '../components/List';
import TodoForm from '../components/TodoForm';
import { addTodo, deleteTodo } from '../actions/index';

class App extends Component {
  render() {
    const { todoList, addTodoAction, deleteTodoAction } = this.props;
    return (
      <>
        <TodoForm addTodoAction={addTodoAction} />
        <List todoList={todoList} deleteTodoAction={deleteTodoAction} />
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
    deleteTodoAction: todoIndex => dispatch(deleteTodo(todoIndex)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
