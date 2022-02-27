import React, {useState} from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick(event) {
    setIsClicked((isClicked) => !isClicked);
    console.log(event.target.value)
    onCategoryChange(event.target.value);
  }
  // function handleChange(event) {
  //   console.log(event.target.value)
  //   onCategoryChange(event.target.value);
  // }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map(category => {
          return (
            <button key={category} className={(isClicked ? 'selected' : '')} onClick={handleClick} value={selectedCategory}>
              {category}
            </button>
          )
        })
      }
    </div>
  );
}

export default CategoryFilter;
