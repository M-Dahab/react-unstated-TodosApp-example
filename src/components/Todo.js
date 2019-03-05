import React from 'react';

const Todo = ({
  text,
  toggleTodoDoneStatus,
  deleteTodo,
  done,
}) => (
  <li className="border flex p-4 mt-4">
    <input type="checkbox" checked={done} onChange={toggleTodoDoneStatus} />
    <span className="pl-4">{text}</span>
    <button className="ml-auto" onClick={deleteTodo}>X</button>
  </li>
);

export default Todo;
