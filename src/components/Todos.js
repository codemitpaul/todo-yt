import React, { useRef, useState } from "react";
import uuid from "react-uuid";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const titleRef = useRef();

  const addTodoHandler = () => {
    const tilte = titleRef.current.value;
    const todoData = {
      id: uuid(),
      title: tilte,
      status: false,
    };

    const newTodos = [todoData, ...todos];
    setTodos(newTodos);
    titleRef.current.value = "";
  };

  const updateTodoStatus = (id, title) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const deleteTodo = (id, title) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="flex items-center bg-gray-50 rounded-xl">
        <input
          ref={titleRef}
          type="text"
          className="w-full bg-gray-50 text-slate-900 p-2 rounded-xl outline-none"
          placeholder="Todo eingeben ..."
        />
        <button
          onClick={addTodoHandler}
          className="p-2 rounded-r-xl bg-orange-500 text-white hover:bg-orange-400"
        >
          Hinzufügen
        </button>
      </div>
      <div className="mt-10 space-y-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodoStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
