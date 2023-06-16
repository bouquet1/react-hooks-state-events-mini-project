import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  function handleClick(category) {
    setSelectedCategory(category);
  }
  console.log(categories);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here. The buttons are generated using the map method on the categories array. */}
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : null}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

/**
handleButtonClick takes a category parameter and sets the selected category using the setselectedCategory function.
The buttons are generated using the map method on the categories array. Each category in the array is mapped to a button element.
The key prop is set to the category value to help React efficiently update the DOM when the array changes.
The className prop of each button is conditionally set. If the setselectedCategory value matches the current category, the button will have the "selected" class; otherwise, it will have no additional class.
The onClick event handler is set to call the handleButtonClick function with the corresponding category as an argument when a button is clicked.
The button text is set to the current category value. */
