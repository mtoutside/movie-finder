import React from "react";

const FilterTodo = ({ value, onChange }) => {
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="card d-flex">
      <a
        href="#"
        className="d-inline-block"
        onClick={(e) => handleClick("ALL", e)}
      >
        ALL
      </a>
      <a
        href="#"
        className="d-inline-block"
        onClick={(e) => handleClick("TODO", e)}
      >
        TODO
      </a>
      <a
        href="#"
        className="d-inline-block"
        onClick={(e) => handleClick("DONE", e)}
      >
        DONE
      </a>
    </div>
  );
};

export default FilterTodo;
