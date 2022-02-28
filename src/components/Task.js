import React from "react";

function Task({ text, taskCategory, onDelete }) {

  function handleClick(text) {
    onDelete(text);
  }
  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleClick(text)}>X</button>
    </div>
  );
}

export default Task;
