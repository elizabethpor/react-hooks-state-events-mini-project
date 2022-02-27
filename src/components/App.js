import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  function onCategoryChange(category) {
    setSelectedCategory(category);
  }
  console.log(`from App: ${selectedCategory}`)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryChange={onCategoryChange}/>
      <NewTaskForm />
      <TaskList categories={CATEGORIES} tasks={TASKS} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
