import React from "react";
import { CrossIcon } from "./icons";

const TodoListItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-gray-200 p-4">
      <button
        type="button"
        className="inline-block h-5 w-5 rounded-full border-2"
      ></button>
      <p
        className={
          "grow text-gray-600 " + `${completed && "text-gray-300 line-through"}`
        }
      >
        {title}
      </p>
      <button>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoListItem;