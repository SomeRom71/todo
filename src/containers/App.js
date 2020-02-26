import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from '../components/List';
import TodoForm from '../components/TodoForm';
import { addTodo, deleteTodo, changeTodo, changeStateTodo } from '../actions/index';

class App extends Component {
  render() {
    const { todoList, addTodoAction, deleteTodoAction, changeTodoAction, changeStateAction } = this.props;
    return (
      <div className="container">
        <TodoForm addTodoAction={addTodoAction} />
        <hr />
        {todoList.length > 0 ? <List todoList={todoList} deleteTodoAction={deleteTodoAction} changeTodoAction={changeTodoAction} changeStateTodo={changeStateAction}/> : <div className="no-todo">Sorry, todo's not found</div>}
      </div>
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
    changeStateAction: todoIndex => dispatch(changeStateTodo(todoIndex))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
