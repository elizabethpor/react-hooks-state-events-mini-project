import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleDelete(text) {
    const newTaskList = taskList.filter(task => task.text !== text)
    setTaskList(newTaskList)
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category)
  }

  function handleAddingNewTask(formData) {
    setTaskList(taskList =>[...taskList, formData]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddingNewTask}/>
      <TaskList selectedCategory={selectedCategory} onDelete={handleDelete} taskList={taskList}/>
    </div>
  );
}

export default App;
