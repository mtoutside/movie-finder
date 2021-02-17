import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import InputTask from "./InputTask";
import FilterTodo from "./FilterTodo";

const TodoLists = (props) => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const handleCheck = (checked) => {
    const newItems = items.map((item) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  const handleAdd = (text) => {
    setItems([...items, { key: uuidv4(), text, done: false }]);
  };

  const handleFilterChange = (value) => setFilter(value);

  const displayItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
    return item;
  });

  return (
    <>
      <h4 className="title">input</h4>
      <InputTask onAdd={handleAdd} />
      <FilterTodo onChange={handleFilterChange} value={filter} />
      <ul className="list-group pt-3">
        {displayItems.map((item) => (
          <TodoItem key={item.key} item={item} onCheck={handleCheck} />
        ))}
      </ul>
      <div className="amount badge badge-secondary m-3">
        {displayItems.length} items
      </div>
    </>
  );
};

export default TodoLists;
