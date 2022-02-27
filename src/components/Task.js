import React from "react";

function Task({ text, taskCategory, onButtonClicked }) {

  function handleClick(text) {
    onButtonClicked(text);
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
