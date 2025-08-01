import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice.js";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-500">
      <div className="text-gray-50">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="text-red-500" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todos;
