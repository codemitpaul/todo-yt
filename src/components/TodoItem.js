import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const TodoItem = ({ id, title, status, updateTodo, deleteTodo }) => {
  return (
    <div
      className={`${
        status ? "bg-green-400" : "bg-red-400"
      } w-full rounded-xl text-white flex justify-between items-center cursor-pointer p-4`}
    >
      <div onClick={() => updateTodo(id, title)} className="flex-1">
        <p>{title}</p>
      </div>
      <button onClick={() => deleteTodo(id, title)}>
        <BsFillTrashFill className="h-5 w-5 cursor-pointer" />
      </button>
    </div>
  );
};

export default TodoItem;
