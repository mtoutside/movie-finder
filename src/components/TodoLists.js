import React, { useState } from "react";
import { v4 as uuidv4} from "uuid";

const TodoLists = (props) => {
  const [items, setItems] = useState([
    { key: uuidv4(), text: "texx1", done: false },
    { key: uuidv4(), text: "texx2", done: false },
    { key: uuidv4(), text: "texx3", done: false }
  ]);

  return(
    <>
    <ul className="list-group">
      {items.map(item => (
        <li className="list-group-item" key={items.key}>
          <label className="text-secondary ml-10">
            <input className="checkbox" type="checkbox" />
            {item.text}
          </label>
        </li>
      ))}
    </ul>
    <div className="amount badge badge-secondary m-3">{items.length}</div>
    </>
  );
};

export default TodoLists;

