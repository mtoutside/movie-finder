import React from "react";

const TodoItem = ({ item, onCheck }) => {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <li className="list-group-item">
      <label className="text-primary ml-10">
        <input
          className="checkbox"
          type="checkbox"
          checked={item.done}
          onChange={handleChange}
        />
        <span className={item.done ? "text-muted" : ""}>{item.text}</span>
      </label>
    </li>
  );
};

export default TodoItem;
