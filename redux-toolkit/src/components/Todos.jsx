import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, upadeteTodo } from "../features/todo/todoSlice.js";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(upadeteTodo({ id, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="bg-gray-800 min-h-[200px] rounded-lg p-6 shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Todo List</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-700 rounded px-4 py-2"
          >
            {editId === todo.id ? (
              <>
                <input
                  className="flex-1 mr-2 px-2 py-1 rounded border border-gray-400 focus:outline-none"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                />
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-1 hover:bg-green-600"
                  onClick={() => handleSave(todo.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="flex-1 text-white">{todo.text}</span>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-1 hover:bg-blue-600"
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <div className="text-gray-300 text-center mt-4">No todos yet!</div>
      )}
    </div>
  );
}

export default Todos;