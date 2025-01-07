import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { addTodo, removeTodo } from "./store/todoSlice";

const App: React.FC = () => {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-400 flex flex-col items-center p-6">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-lg p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">TODO List</h1>
        <div className="flex gap-3 mb-6">
          <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Enter a new TODO..." className="flex-1 px-4 py-3 border rounded-lg shadow focus:ring-2 focus:ring-blue-500 outline-none" />
          <button onClick={handleAddTodo} className="px-6 py-3 bg-gradient-to-b from-blue-600 to-blue-400 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-blue-300 transition">
            Add
          </button>
        </div>
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center px-4 py-3 bg-gray-100 rounded-lg shadow-md transition transform hover:scale-105">
              <span className="text-gray-800 font-medium">{todo.text}</span>
              <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 font-semibold hover:text-red-700 transition">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
