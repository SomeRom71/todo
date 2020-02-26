import React from 'react';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';

const TodoForm = props => {

  const addToList = e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const getNewTodo = formData.get('todoName').trim();
    if (getNewTodo.length > 0) {
      e.target.reset();
      return props.addTodoAction(getNewTodo);
    } else {
      alert('Field is empty')
    }
  }

  return(
    <Form onSubmit={addToList} >
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Write todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="todoName"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit">Add Todo</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default TodoForm;
