import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [newTaskText, setNewTaskText] = useState('')
  const [newTaskCategory, setNewTaskCategory] = useState('')

  function handleTextChange(event) {
    setNewTaskText(event.target.value);
  }

  function handleCategoryInputChange(event) {
    setNewTaskCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {text: newTaskText, category: newTaskCategory}
    onTaskFormSubmit(formData);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTaskText} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={newTaskCategory} onChange={handleCategoryInputChange}>
          {
            categories.filter((category) => category !== 'All').map((category) => {
              return <option key={category}  >{category}</option> 
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
