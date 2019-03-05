import React from 'react';

const DeletedTodo = ({
  text,
  unDeleteTodo,
}) => (
  <li className="border flex p-4 mt-4">
    <span className="pl-4">{text}</span>
    <button className="ml-auto" onClick={unDeleteTodo}>restore</button>
  </li>
);

export default DeletedTodo;
