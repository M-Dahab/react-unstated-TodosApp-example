import React from 'react';
import { Link } from 'react-router-dom';
import connect from 'unstated-connect';
import TodosSC from '../state_containers/todos';
import Todo from './Todo';

const TodoList = ({
  containers: [{
    state: { newTodo },
    onNewTodoChange,
    addNewTodo,
    toggleTodoDoneStatus,
    deleteTodo,
    doneTodos,
    pendingTodos,
  }],
}) => (
  <div className="container mx-auto">
    <Link to="/deleted-todos">Deleted Todos</Link>
    <div>
      <input className="border rounded px-4 py-2" value={newTodo} onChange={onNewTodoChange} />
      <button className="border rounded px-4 py-2" onClick={addNewTodo}>+ Add</button>
    </div>
    <ul className="list-reset">
      {
        pendingTodos().map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            toggleTodoDoneStatus={() => toggleTodoDoneStatus(todo)}
            deleteTodo={() => deleteTodo(todo)}
          />
        ))
      }
      {
        doneTodos().map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            toggleTodoDoneStatus={() => toggleTodoDoneStatus(todo)}
            deleteTodo={() => deleteTodo(todo)}
            done
          />
        ))
      }
    </ul>
  </div>
);

export default connect([TodosSC])(TodoList);
