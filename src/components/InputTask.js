import React, { useState } from "react";

const InputTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="card mt-3">
      <input
        className="input p-1"
        type="text"
        placeholder="enter a task"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputTask;
