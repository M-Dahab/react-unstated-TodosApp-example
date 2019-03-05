import React from 'react';
import { Link } from 'react-router-dom';
import connect from 'unstated-connect';
import TodosSC from '../state_containers/todos';
import DeletedTodo from './DeletedTodo';

const DeletedTodoList = ({
  containers: [{
    deletedTodos,
    unDeleteTodo,
  }],
}) => (
  <div className="container mx-auto">
    <Link to="/">Home</Link>
    <ul className="list-reset">
      {
        deletedTodos().map(todo => (
          <DeletedTodo
            key={todo.id}
            text={todo.text}
            unDeleteTodo={() => unDeleteTodo(todo)}
          />
        ))
      }
    </ul>
  </div>
);

export default connect([TodosSC])(DeletedTodoList);
