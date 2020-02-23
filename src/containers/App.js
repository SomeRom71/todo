import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import List from '../components/List';
import TodoForm from '../components/TodoForm';
import { addTodo, deleteTodo, changeTodo } from '../actions/index';

class App extends Component {
  render() {
    const { todoList, addTodoAction, deleteTodoAction, changeTodoAction } = this.props;
    return (
      <>
        <TodoForm addTodoAction={addTodoAction} />
        <List todoList={todoList} deleteTodoAction={deleteTodoAction} changeTodoAction={changeTodoAction}/>
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
    changeTodoAction: (value, todoIndex) => dispatch(changeTodo(value, todoIndex)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
