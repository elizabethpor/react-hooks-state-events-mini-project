import React, {useState} from "react";
import Task from './Task';

function TaskList({ categories, tasks, selectedCategory }) {

  const [taskList, setTaskList] = useState(tasks)

  function onButtonClicked(text) {
    const newTaskList = taskList.filter(task => task.text !== text)
    setTaskList(newTaskList)
  }

  const tasksToDisplay = taskList.filter(task => (selectedCategory === 'All' || task.category === selectedCategory));
  console.log(`from TaskList: ${selectedCategory}`)

  return (
    <div className="tasks">
      <ul>
        {taskList.map(task => (
            <Task key={task.text} text={task.text} taskCategory={task.category} onButtonClicked={onButtonClicked}/>
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
