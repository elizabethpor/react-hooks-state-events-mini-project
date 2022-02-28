import React from "react";
import Task from './Task';

function TaskList({ selectedCategory, taskList, onDelete }) {


  const tasksToDisplay = taskList.filter(task => (selectedCategory === 'All' || task.category === selectedCategory));

  return (
    <div className="tasks">
      <ul>
        {tasksToDisplay.map(task => (
            <Task key={task.text} text={task.text} taskCategory={task.category} onDelete={onDelete}/>
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
